import {React, useEffect, useState} from 'react'
import Header from '../../../component/HeaderprofieUder';
import ProjectTable from '../component/projectTableUser';
import newsApi from '../../../api/newsApi';
import { utilsToken } from '../../../utils/token';
import IconAdd from '../../../assets/icons/IconAdd';
import HeaderRight from '../../../component/HeaderprofieUder/HeaderRightAction'
import AddProjectModal from '../component/addProjectModal';
import { useSnackbar } from 'notistack'
// import constants from '../../../constants/'


function Project(){
   const { enqueueSnackbar } = useSnackbar()
   const [dataSource,setDataSource]=useState({})
   const [loading, setLoading]=useState(false)
   const [isOpenModal,setIsOpenModal] = useState(false)
   const tokenUser = utilsToken.getAccessToken()
   
   const default_pagination ={
      page: 1,
      page_size: 15
   }
   const [pagination, setPagination] = useState(default_pagination)
  
      const getNewProject = async(pagination=default_pagination)=>{
         setLoading(true)
         try {
            
            const payload={
               page: pagination.pageNo,
               page_size: pagination.pageSize,
               token:tokenUser,
            }
            const res = await newsApi.getNewsByUser(payload)
            setDataSource(res.data)
            setPagination({
               pageNo: res.total_page,
               pageSize: res.total,
            })
         } catch (error) {
            console.log(error)
         }
         setLoading(false)
      }

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
            imgs:data.imgs[0].originFileObj
         }
         
         try {
            const response = await newsApi.addProject(payload)
            setIsOpenModal(false)
            enqueueSnackbar(response.message, {
               variant: 'success'
            })
         } catch (error) {
            enqueueSnackbar(error.message, {
               variant: 'error'
            })
         }
      }
     
  useEffect(()=>{
   getNewProject()
  },[])
   return(
      <div>
         <Header title="Project" rightComponent={
            
            <HeaderRight icon={<IconAdd/>} onClick={()=>{setIsOpenModal(true)}}/>
         }/>
         <ProjectTable
            dataSource={dataSource}
            loading={loading}
            pagination={pagination}
         />
         <AddProjectModal
            isOpen={isOpenModal}
            toggle={()=>{setIsOpenModal(!isOpenModal)}}
            onSubmit={handleAddProject}
         />
      </div>
   )
}
export default Project;