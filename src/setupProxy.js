const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("user/login", {
      target: "http://54.169.184.49:8000/api/v1/",
      changeOrigin: true,
    })
  );
};
