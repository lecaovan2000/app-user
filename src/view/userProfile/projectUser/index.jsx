import {React, useEffect, useState} from 'react'
import Header from '../../../component/HeaderprofieUder';
import ProjectTable from '../component/projectTableUser';
import newsApi from '../../../api/newsApi';
// import constants from '../../../constants/'


function Project(){
   const [dataSource,setDataSource]=useState({})
   const [loading, setLoading]=useState(false)
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
               status: true
            }
            const res = await newsApi.getAllNews(payload)
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
         <Header title="Project"/>
         <ProjectTable
            dataSource={dataSource}
            loading={loading}
            pagination={pagination}
         />
      </div>
   )
}
export default Project;