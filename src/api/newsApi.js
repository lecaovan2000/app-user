import axiosClient from "./axiosClient";
import { common } from "../utils/common";
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
 deleteNews:(data)=>{
   const url="news/delete"
   return axiosClient.post(url, data)
 },
 getNewsByUser:(data) => {
    const url = "user/news"
    return axiosClient.post(url, data)
 },
 addProject: payload => {
  const url = 'news/create'
  return axiosClient.post(url, common.createFormDataPayload(payload))
},
};
export default newsApi;
