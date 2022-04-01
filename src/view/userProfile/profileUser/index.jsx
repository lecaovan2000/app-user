import {React,useState,useEffect} from 'react'
import FormProfile from '../component/formProfile';
import userApi  from '../../../api/userApi.js'
import Header from '../../../component/HeaderprofieUder';
import { utilsToken } from '../../../utils/token';



function ProfileUser(){
   const [profile, setProfile]=useState({})
   const [loading, setLoading]=useState(false)
   const uidUser = utilsToken.getAccessUser()
   const getUidUser = JSON.parse(uidUser)
   
   const getProfileUser = async()=>{
      setLoading(true)
      try {
         const re = await userApi.getProfileUserName(getUidUser.uid)
         console.log('owr day',re)
         setProfile(re.data)
      } catch (error) {
         console.log(error)
      }
      setLoading(false)
   }
   useEffect(()=>{
      getProfileUser()
   },[])
   console.log('data',profile)
   return(
      <div>
         <Header title='Profile' />
         <FormProfile
            data={profile}
            loading={loading}
         />
      </div>
   )
}
export default ProfileUser;