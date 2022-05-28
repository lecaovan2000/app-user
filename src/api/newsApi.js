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
  return axiosClient.post(url, common.createFormDataPayload(payload),{
    header: { "Content-Type": "multipart/form-data"}
  })
},
updateNews:(payload)=>{
  const url = "news/update"
    return axiosClient.post(url, common.createFormDataPayload(payload))
},
restoreNews:(payload)=>{
  const url = "news/restore"
    return axiosClient.post(url,payload)
},
getAllNewspaper:(payload)=>{
  const url = "newspaper/"
    return axiosClient.post(url,payload)
},

};
export default newsApi;
