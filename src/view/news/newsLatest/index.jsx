import { useSnackbar } from "notistack";
import { React,useEffect,useState } from "react";
import newsApi from "../../../api/newsApi";
import CardNews from "../../../component/cardNews";

function NewsLatest(){
   const[dataNews, setDataNews] = useState({})
   const {enqueueSnackbar} = useSnackbar(); 
   
   useEffect(()=>{
      const getAllNews = async(pageNo=1, pageSize = 15)=>{
         try {
            const payload={
               page: pageNo,
               page_size: pageSize,
            }
            const response = await newsApi.getAllNews(payload)
            setDataNews(response.data)
            
         } catch (error) {
            enqueueSnackbar(error.message, {
               variant: 'error',
            })
         }
      }
      getAllNews()
   },[])
   const newData = Array.from(dataNews);
   console.log('datanews',newData)
   
   return(
      <div className='newsLatest'>
         {newData.map(item=>(
            <CardNews
            data={item}
         />
         ))}
          
      </div>
   )
}
export default NewsLatest;