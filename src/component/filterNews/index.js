
import newsApi from "../../api/newsApi";

   export const  filterApi = async( data)=>{
      try {
         const payload={
            type:data
         }
         const response = await newsApi.getAllNews(payload)
         return response
      } catch (error) {
      }
   }

