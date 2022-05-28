import React, { useEffect, useState } from 'react'
import newsApi from '../../api/newsApi';
import Header from '../header';
import ItemNewsList from './component/itemNewsList';
import img1 from '../../images/news_ur.jpg';
import img2 from '../../images/Ukraine.jpg';
import img3 from '../../images/img3.jpg'
function PageNews(){
   const [newspaper, setNewspaper]=useState({})
   const [loading, setLoading]=useState(false)
   const getAllNewspaper =async()=>{
      setLoading(true)
      try {
         const response = await newsApi.getAllNewspaper()
         setNewspaper(response.data)
      } catch (error) {
         console.log('err',error)
      }
      setLoading(false)
   }
   useEffect(()=>{
      getAllNewspaper()
   },[])
   return(
      <>
         <Header/>
         
         <div style={{width:'80%',margin:'auto', paddingTop:'50px'}}>
         <div style={{
            width:'100%', 
            backgroundColor:'#afed5a',
         }} ><h1>Tin tức</h1></div>
            <div style={{display:'flex',}}>
               <div style={{height:'100%'}} >
                  <div>
                     {!loading&&
                        <ItemNewsList
                        data={newspaper}
                     />
                     }
                  </div>
               </div>

               <div style={{width:'50%', borderLeft:'1px solid #8c8c8c', borderRight:'1px solid #8c8c8c' }} >
                  <div>
                     <div style={{ width:'100%',padding:'5px' }} >
                        <div  ><h2 style={{ width:'100%',padding:'5px', color:'#9f224e', display:'flex' }} >Tin thế giới</h2></div>
                        <div style={{borderBottom:'1px solid #8c8c8c'}} >
                           <a href='https://vnexpress.net/tuyet-vong-o-chien-tuyen-dong-ukraine-4468573.html' ><img style={{ width:'100%', padding:'5px' }} src={img1} /></a>
                           <div ><a  href='https://vnexpress.net/tuyet-vong-o-chien-tuyen-dong-ukraine-4468573.html' style={{ width:'100%', fontSize:'18px', color:'black', fontWeight:'bold' }}  >Tuyệt vọng ở chiến tuyến đông Ukraine</a></div>
                        </div>

                        <div style={{borderBottom:'1px solid #8c8c8c'}} >
                           <a href='https://vnexpress.net/nga-tren-da-kiem-soat-toan-bo-donbass-4461844.html' ><img style={{ width:'100%', padding:'5px' }} src={img2} /></a>
                           <div ><a  href='https://vnexpress.net/nga-tren-da-kiem-soat-toan-bo-donbass-4461844.html' style={{ width:'100%', fontSize:'18px', color:'black',fontWeight:'bold' }}  >Nga trên đà kiểm soát toàn bộ Donbass</a></div>
                        </div>

                        <div style={{borderBottom:'1px solid #8c8c8c'}} >
                           <a href='https://vnexpress.net/hanh-trinh-slovakia-chuyen-ten-lua-s-300-cho-ukraine-4452052.html' ><img style={{ width:'100%', padding:'5px' }} src={img3} /></a>
                           <div ><a  href='https://vnexpress.net/hanh-trinh-slovakia-chuyen-ten-lua-s-300-cho-ukraine-4452052.html' style={{ width:'100%', fontSize:'18px', color:'black',fontWeight:'bold' }}  >Hành trình Slovakia chuyển tên lửa S-300 cho Ukraine</a></div>
                        </div>
                        
                     </div>
                  </div>
                  
               </div>

            </div>
         </div>
      </>
      
   )
}
export default PageNews;