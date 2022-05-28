import React from 'react'
function ItemNewsList(props){
   const {data}=props
   return(
      <>{
         data.map&&data.map((item,key)=>(
            <div key={key} className='page_news'>
            <div className='page_news-content'>
               <div className='page_news-content-left'>
               <hr/>
                  <div className='list-news'>
                     <div className='list-news-left'>
                        <h1>{item.title}</h1>
                        <p> {item.content} </p>
                     </div>
                     <div className='list-news-right'>
                        <img src={item.cover}/>
                     </div>
                  </div>
               <hr/>
               </div>
               {/* <div className='page_news-content-right'>right</div> */}
            </div>
         </div>
         )
      )}
      </>
   )
}
export default ItemNewsList;