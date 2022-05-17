import {React, useEffect, useState}from 'react'
import { useParams } from 'react-router'
import FormEditProject from '../../component/formEditProject'
import Header from '../../../../component/HeaderprofieUder'
import newsApi from '../../../../api/newsApi'
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { utilsToken } from '../../../../utils/token'

function EditProject(){
   const {newsUid}=useParams()
   const [loading, setLoading]=useState(true)
   const [data, setData]=useState({})
   const { enqueueSnackbar } = useSnackbar()
   const history = useHistory()
   console.log('id của project:', newsUid)
   const tokenUser = utilsToken.getAccessToken()
   useEffect(() => {
      const  getDataNews = async () => {
         setLoading(true)
         try {
            const response = await newsApi.getNewsDetail(newsUid)
            setData(response.data)
            console.log('dât của dự án', response)
         } catch (error) {
            enqueueSnackbar(error.message, {
               variant: 'error'
            })
         }
         setLoading(false)
      }
      getDataNews()
   },[])
   const handleSubmit = async(data)=>{
      console.log('data từ foem edit:', data)
      
      try {
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
               uid:data.uid,
               // note:data.note,
               imgs:data.imgs[0].originFileObj
         }
         const response = await newsApi.updateNews(payload)
         console.log("edit",response)
         enqueueSnackbar(response.message,{
            variant:'success'
         })
         history.push('/profile/Project')
      } catch (error) {
         // history.push('/profile/Project')
         enqueueSnackbar(error.message,{
            variant:"error"
         })
      }
   }
   return(
      <>{
         !loading&&(
            <FormEditProject
            isOpen={true}
            dataNews={data}
            title={`Edit project ${data.title}`}
            onSave={handleSubmit}
         />
         )}
         
      </>
   )
}
export default EditProject;