import { Button } from 'antd';
import React,{useState} from 'react'
import { utilsToken } from '../../utils/token';
import Header from '../header';
import newsApi from '../../api/newsApi';
import AddProjectModal from '../userProfile/component/addProjectModal';
import {useHistory} from 'react-router-dom'
import {useSnackbar}from 'notistack'
import { NavLink } from 'react-router-dom';
function RaoTin(){
   const token = utilsToken.getAccessToken()
   const tokenUser = utilsToken.getAccessToken()
   const { enqueueSnackbar } = useSnackbar()
   const [isOpenModal,setIsOpenModal] = useState(false)
   const history = useHistory()
   const handleAddProject = async (data)=>{
      const payload={
         title:data.title,
         type:data.type,
         city:data.city,
         district:data.district,
         street:data.street,
         price:data.price,
         acreage:data.acreage,
         bedroom_no:data.bedroom_no,
         bathroom_no:data.bathroom_no,
         token:tokenUser,
         note:data.note,
         imgs:data.imgs[0].originFileObj
      }
      
      try {
         const response = await newsApi.addProject(payload)
         setIsOpenModal(false)
         history.go(0)
         enqueueSnackbar(response.message, {
            variant: 'success'
         })
      } catch (error) {
         enqueueSnackbar(error.message, {
            variant: 'error'
         })
      }
   }
   return(
      <div className='collections_root'>
         <Header/>
         <div>
         {token ?
         (<div>
            <div className='box-collections'>
               <Button className='box-collections_btn' onClick={()=>{setIsOpenModal(true)}}>Đăng tin rao</Button>
            </div>
            <AddProjectModal
               isOpen={isOpenModal}
               toggle={()=>{setIsOpenModal(!isOpenModal)}}
               onSubmit={handleAddProject}
            />

         </div>)
         :
         (<div>
            <span><h2><span><NavLink to={'/login'}>Đăng nhập</NavLink></span> để đăng tin </h2></span> 
            
         </div>)
         }
         </div>
         
      </div>
      
   )
}
export default RaoTin;