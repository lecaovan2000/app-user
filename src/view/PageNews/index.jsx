import React from 'react'
import Header from '../header';
import imgNews from '../../images/news.jpg'
function PageNews(){
   return(
      <>
         <Header/>
         <div className='page_news'>
            <div className='page_news-content'>
               <div className='page_news-content-left'>
               <hr/>
                  <div className='list-news'>
                     <div className='list-news-left'>
                        <h1>Hiệp hội súng nhiều ảnh hưởng của Mỹ</h1>
                        <p>Hiệp hội Súng trường Quốc gia Mỹ chi khoảng 3 triệu USD mỗi năm cho vận động hành lang, 
                        tác động đáng kể đến chính sách kiểm soát súng tại nước này. </p>
                     </div>
                     <div className='list-news-right'>
                        <img src={imgNews}/>
                     </div>
                  </div>
               <hr/>
               </div>
               <div className='page_news-content-right'>right</div>
            </div>
         </div>
      </>
      
   )
}
export default PageNews;