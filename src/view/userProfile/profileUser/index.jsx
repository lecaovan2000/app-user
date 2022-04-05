import {React,useState,useEffect} from 'react'
import FormProfile from '../component/formProfile';
import userApi  from '../../../api/userApi.js'
import Header from '../../../component/HeaderprofieUder';
import { utilsToken } from '../../../utils/token';
import HeaderRightAction from '../../../component/HeaderprofieUder/HeaderRightAction';
import FormEditProfile from '../component/formEditProfile';
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router-dom';


function ProfileUser(){
   const [profile, setProfile]=useState({})
   const [loading, setLoading]=useState(false)
   const uidUser = utilsToken.getAccessUser()
   const getUidUser = JSON.parse(uidUser)
   const [isOpenModal,setIsOpenModal] = useState(false)
   const tokenUser = utilsToken.getAccessToken()
   const { enqueueSnackbar } = useSnackbar()
   const history = useHistory()
   
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
   const handleUpdate = async (data)=>{
      console.log('hifhifhi', data)
      const payload ={
         fullname:data.fullname,
         phone:data.phone,
         gender:data.gender,
         avatar:data.avatar[0].originFileObj,
         token:tokenUser,
      }
      try {
         const response = await userApi.updateProfileUser(payload)
         enqueueSnackbar(response.message, {
            variant: 'success'
         })
         setIsOpenModal(false)
         history.go(0)
      } catch (error) {
         enqueueSnackbar(error.message, {
            variant: 'error'
         })
      }
    }
   console.log('data',profile)
   return(
      <div>
         <Header title='Profile' rightComponent={
            <HeaderRightAction text='Edit' onClick={()=>{setIsOpenModal(true)}} />
         } />
         <FormProfile
            data={profile}
            loading={loading}
         />
         <FormEditProfile
            isOpen={isOpenModal}
            dataProfile={profile}
            toggle={()=>{setIsOpenModal(!isOpenModal)}}
            onSave={handleUpdate}
         />
      </div>
   )
}
export default ProfileUser;