import {React, useEffect, useState} from 'react'
import Header from '../../../component/HeaderprofieUder';
import ProjectTable from '../component/projectTableUser';
import newsApi from '../../../api/newsApi';
import { utilsToken } from '../../../utils/token';
import IconAdd from '../../../assets/icons/IconAdd';
import HeaderRight from '../../../component/HeaderprofieUder/HeaderRightAction'
import AddProjectModal from '../component/addProjectModal';
// import constants from '../../../constants/'


function Project(){
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
            console.log('kkkk', res)
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
         />
      </div>
   )
}
export default Project;