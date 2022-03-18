import axios from "axios";
import queryString from "query-string";
import { utilsToken } from "../utils/token";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs

const axiosClient = axios.create({
  baseURL: 'http://13.215.47.50:8000/api/v1/',
  Headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = utilsToken.getAccessToken()
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }
  return config;
});

axiosClient.interceptors.response.use(response => {
  utilsToken.checkAccessToken(response.data)

  if (response && response.data.error_code === 200) {
     return response.data
  }

  throw response.data
})


export default axiosClient;
