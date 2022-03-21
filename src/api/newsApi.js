import axiosClient from "./axiosClient";
const newsApi = {
  getAllNews: (data) => {
    const url = "news/";
    return axiosClient.post(url, data)
  },
  getNewsDetail: (newsUid) => {
    const url = "news/detail"
    const params = { uid: newsUid}

    return axiosClient.get(url, {params})
 },
};
export default newsApi;
