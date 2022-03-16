import axiosClient from "./axiosClient";

const authApi = {
   register:(data)=>{
      const url = 'user/register'
      return axiosClient.post(url, data)
   },

   login: (payload)=>{
      const url = 'user/login'
      return axiosClient.post(url, payload)
   },
   logout:(data)=>{
      const url='user/logout'
      return axiosClient.post(url,data)
   },

   getAllUser:()=>{

   }
   
}
export default authApi;