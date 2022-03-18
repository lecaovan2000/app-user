import { useSnackbar } from "notistack";
import { React,useEffect,useState } from "react";
import newsApi from "../../../api/newsApi";
import CardNews from "../../../component/cardNews";

function NewsList(props){
   const {selectedOrgan}=props
   const[dataNews, setDataNews] = useState({})
   const {enqueueSnackbar} = useSnackbar();
   const getFilterNews = async(pageNo=1, pageSize = 15)=>{
      console.log('selectOrgan',selectedOrgan)
      try {
         const payload =selectedOrgan === 'all'  ? {page:pageNo,
            page_size:pageSize,} :{type:selectedOrgan}
         const response = await newsApi.getAllNews(payload)
         console.log('dataSelect',response)
         setDataNews(response.data)
      } catch (error) {
                  enqueueSnackbar(error.message, {
               variant: 'error',
            })
      }
   }
   
   useEffect(()=>{
      if (selectedOrgan ) {
         getFilterNews();
      }
   },[selectedOrgan])

   
   const newData = Array.from(dataNews);
   console.log('datanew',dataNews)
   
   return(
      <div className='newList'>
            {newData .length ===0 ?(
               <div className='newList__filterError'>
                  <h1>Không Tìm Thấy</h1>
               </div>
            ):(
               <div className='newList__content'>
                  {newData.map(item=>(
                        <CardNews
                     data={item}
                  />
                  ))}
               </div>
            )} 
      </div>
   )
}
export default NewsList;