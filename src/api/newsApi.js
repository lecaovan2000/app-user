import { common } from "../utils/common";
import axiosClient from "./axiosClient";
const newsApi = {
  // getAllNews: (data) => {
  //   const url = "news/";
  //   return axiosClient.post(url, common.createFormDataPayload(data)
  //   );
  // },
  getAllNews: (data) => {
    const url = "news/";
    return axiosClient.post(url, data)
  },
};
export default newsApi;
