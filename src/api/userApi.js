import axiosClient from './axiosClient'
import { common } from '../utils/common'
const userApi={
   getProfileUserName:(userUid)=>{
      const url='/user/get_profile'
      const params = { uid: userUid}

    return axiosClient.get(url, {params})
   },
   updateProfileUser: payload => {
      const url = 'user/update'
      return axiosClient.post(url, common.createFormDataPayload(payload))
    },
}
export default userApi;