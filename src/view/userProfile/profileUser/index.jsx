import {React,useState,useEffect} from 'react'
import FormProfile from '../component/formProfile';
import userApi  from '../../../api/userApi.js'
import Header from '../../../component/HeaderprofieUder';

function ProfileUser(){
   const [profile, setProfile]=useState({})

   const getProfileUser = async()=>{
      try {
         const uidUser='bed7ad23-b58b-450f-abe5-056a71c02b1d'
         const re = await userApi.getProfileUserName(uidUser)
         setProfile(re.data)
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(()=>{
      getProfileUser()
   },[])
   console.log('data',profile)
   return(
      <div>
         <Header title='Profile'/>
         <FormProfile
            data={profile}
         />
      </div>
   )
}
export default ProfileUser;