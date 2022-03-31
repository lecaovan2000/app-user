import axiosClient from './axiosClient'
const userApi={
   getProfileUserName:(userUid)=>{
      const url='/user/get_profile'
      const params = { uid: userUid}

    return axiosClient.get(url, {params})
   }
}
export default userApi;