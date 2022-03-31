import {React, useEffect,useState} from 'react'
import Header from '../../../header'
import NewsDetailForm from '../formDetailNews'
import { useSnackbar } from 'notistack'
import newsApi from '../../../../api/newsApi'
import { useParams } from 'react-router'
function DetailNewsPage(){
   const {newsUid}=useParams()
   const {enqueueSnackbar}= useSnackbar()
   const [detailNews, setDetailNews]= useState({})
   const [loading, setLoading]= useState(true)

   useEffect(() => {
      const  getDetailNews = async () => {
         setLoading(true)
         try {
            const response = await newsApi.getNewsDetail(newsUid)
            setDetailNews(response.data)
         } catch (error) {
            enqueueSnackbar(error.message, {
               variant: 'error'
            })
         }
         setLoading(false)
      }
      getDetailNews()
   })
   
   return(
   <div  >
      <Header />
            <NewsDetailForm 
               data={detailNews}
               loading={loading}
            />
   </div>
   )     
}
export default DetailNewsPage                 