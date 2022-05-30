import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import authApi from '../../api/authApi'
import { paths } from '../../constants/paths'
import { common } from '../../utils/common'
import { utilsToken } from '../../utils/token'
import LayoutRoute from './layoutRoute'

function UserProfile(){
   // const history=useHistory()
   // useEffect(()=>{
   //    const checkAccessToken = async () => {
   //       const token = utilsToken.getAccessToken()
   //          try {
   //             const response = await authApi.checkToken(token)
   //             if (!(await utilsToken.checkExpiredToken(response))) {
   //                history.push(paths.root)
   //             }
   //             common.removeBearerToken()
   //              // history.push(paths.root)
   //          } catch (error) {
               
   //          }
   //       // common.removeBearerToken()
   //       // history.push(paths.root)
   //    }
   //    checkAccessToken()
   // },[history])
   return(
      <div>
         <LayoutRoute/>
      </div>
   )
}
export default UserProfile;