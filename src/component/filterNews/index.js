
import newsApi from "../../api/newsApi";

   export const  filterApi = async( data)=>{
      try {
         const payload={
            type:data
         }
         console.log(payload)
         const response = await newsApi.getAllNews(payload)
         console.log(response)
         return response
      } catch (error) {
      }
   }

