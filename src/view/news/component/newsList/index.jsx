import { useSnackbar } from "notistack";
import { React,useEffect,useState } from "react";
import newsApi from '../../../../api/newsApi.js'
import CardNews from "../../../../component/cardNews";
import SearchForm from "../../../../component/SearchForm/SearchForm.jsx";
import { constants } from "../../../../constants/global.js";

function NewsList(props){
   const {selectedOrgan}=props
   const[dataNews, setDataNews] = useState({})
   const [loading, setLoading]=useState(false)
   const {enqueueSnackbar} = useSnackbar();
   const [search, setSearch] = useState()

   const [pagination, setPagination] = useState(constants.DEFAULT_PAGINATION)
   const getFilterNews = async(pagination=constants.DEFAULT_PAGINATION)=>{
      try {
         const payload = selectedOrgan === 'all'  ? {
            page:pagination.pageNo,
            page_size:pagination.pageSize,
            status:search
         } 
         :{
               type:selectedOrgan,
               page:pagination.pageNo,
               page_size:pagination.pageSize,
               status:search
            }
         setLoading(true)
         const response = await newsApi.getAllNews(payload)
         console.log('all new', response)
         setDataNews(response.data)
         setPagination({
            pageNo:response.total_page,
            pageSize:response.total
         })
      } catch (error) {
         setLoading(false)
         enqueueSnackbar(error.message, {
            variant: 'error',
         })
      }
   }
   
   
   useEffect(()=>{
      if (selectedOrgan ) {
         getFilterNews();
      }
   },[selectedOrgan,search ])

   

   const handleChangePagination = (pageNo, pageSize) => {
      getFilterNews({ pageNo, pageSize })
   }
   const newData = Array.from(dataNews);  
    
   //  const _data=newData
   const handleSearch = async _data => {
      console.log('search', _data)
      setSearch(_data.status)
   }
   return(
      <div className='newList'>
         <div style={{ width:'80%',margin:'auto', paddingTop:'10px' }}>
            <SearchForm onSubmit={handleSearch} />
         </div>
            {newData.length ===0 ?(
               <div className='newList__filterError'>
                  <h1 className='newList__filterError-text'>{'Không tìm thấy thông tin nào :('}</h1>
               </div>
            ):(
               <div>
               <div className='newList__content'>
                     <CardNews
                        newsData={newData}
                        loading={loading}
                        hasPagination={true}
                        pagination={pagination}
                        onPaginate={handleChangePagination}
                        // onPaginate={handleChangePagination}
                  />
               </div>
            </div>
            )} 
      </div>
   )
}
export default NewsList;