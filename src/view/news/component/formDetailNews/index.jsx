import {React, useEffect,useState} from 'react'
import {PageHeader} from 'antd'
import { common } from '../../../../utils/common';
import icon from '../../../../assets/icons/58-call-phone-outline.gif'
import TabTitleHeader from '../../../../component/tabTitleHeader';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../images/background.jpg'
import img2 from '../../../../images/datnenbanner.jpg'
import img3 from '../../../../images/toan-canh-bat-dong-san-nha-trang-1625440231.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' ;
function NewsDetailForm(props){
   const {data, loading} = props
   console.log('datadetail',data)
   const history=useHistory()
   // const routes =[
   //    {
   //       path:'',
   //       breadcrumbName:'Home'
   //    },
   //    {
   //       path:'',
   //       breadcrumbName:data.title
   //    }
   // ];
   
   return(
   <>
      {
         !loading &&(
      <div className='details' >
         <div>
            <PageHeader
               className='details__pageHeader'
               onBack={() => history.go(-1)}
               title='Home'
               subTitle={data.title}
            />
         </div>
         <div className='details__news'>
            <Carousel className='carousel_detail' >
               {data.img_info.map((item, key)=>(<div key={key}>
                  <img className='text111' src={item} /></div>))}
               {/* <div className='text11'>
                  <img className='text111' src={img1} />
               </div>
               <div className='text11'>
                  <img  className='text111' src={img2} />
               </div>
               <div className='text11'>
                  <img  className='text111' src={img3} />
               </div> */}
            </Carousel>
            <div className='details__news-right'>
               <div className='details__news-right-title'>
                  <div className='details__news-right-title-text'>{data.title}</div>
               </div>
               <div  className='details__news-right-address'>
                  <div  className='details__news-right-address-city'>
                     <div className='details__news-right-address-city__district'>Thuộc Quận/huyện: </div>
                     <div className='details__news-right-address-city__info'><span>{data.address.street}</span> <span>{data.address.district}</span> <span>{data.address.city}</span></div>
                  </div  >
                  <div  className='details__news-right-address-project'>
                     <div className='details__news-right-address-city__district'>Kiểu dự án: </div>
                     <div className='details__news-right-address-city__info'>{data.type}</div>
                  </div>
                  <div  className='details__news-right-address-status'>
                     <div className='details__news-right-address-city__district'>Trạng thái: </div>
                     <div className='details__news-right-address-city__info'>{data.status ? (<div>đang bán</div>):(<div>đã bán</div>)}</div>
                  </div>   
               </div>
               <div  className='details__news-right-price'>
                    <span className='details__news-right-price-text'><span>Giá bán: </span>{ common.formatPrice(data.price)} VND</span>
               </div>
               <a  href={`tel:${data.owner.phone}`} className='details__news-right-phone' >
                   <img style={{width:32, height:32}} src={icon} alt='...' />
                   <span itemProp='telephone'  className='details__news-right-phone-text'>{data.owner.phone ||'......'}<br/><p>{'(liên hệ ngay)'}</p></span>
               </a>
            </div>
         </div>
         <TabTitleHeader text="Đặc điểm dự án" />
         <div className='details__description'>
            <div className='details__description-left'>
            <div className='details__description-left-item'><span className='details__description-left-item-left'>Loại tin rao:</span> <span className='details__description-left-item-right'>Đang update</span></div>
            <div className='details__description-left-item'><span className='details__description-left-item-left'>Địa chỉ:</span> <div className='details__description-left-item-right'> <span>{data.address.street}</span> <span>{data.address.district}</span> <span>{data.address.city}</span></div></div>
            <div className='details__description-left-item'><span className='details__description-left-item-left'>Diện tích:</span> <span className='details__description-left-item-right'>{data.acreage}m2</span></div>
            <div className='details__description-left-item'><span className='details__description-left-item-left'>Phòng ngủ:</span> <span className='details__description-left-item-right'>{data.bedroom_no}</span></div>
            <div className='details__description-left-item'><span className='details__description-left-item-left'>Phòng WC: </span><span className='details__description-left-item-right'>Đang update</span></div>
            <div className='details__description-left-item'><span className='details__description-left-item-left'>{'Hướng nhà(dự án):'}</span><span className='details__description-left-item-right'>Đang update</span></div>
            </div>
            <div className='details__description-right'>
               <div className='details__description-right-item'><span  >Tên người bán:</span><span className='details__description-right-item-right' >{data.username}</span></div>
               <div className='details__description-right-item'><span>Số điện thoại:</span><span className='details__description-right-item-right'>{data.owner.phone}</span></div>
               <div className='details__description-right-item'><span>Email:</span><span className='details__description-right-item-right'>{data.owner.email}</span></div>
            </div>
         </div>
         <TabTitleHeader text="Chi tiết dự án" />
         <p>
               Một bậc quân vương mang trong con tim hình hài đất nước
               Ngỡ như dân an ta sẽ chẳng bao giờ buồn
               Nào ngờ một hôm ngao du nhân gian chạm một ánh mắt
               Khiến cho ta say ta mê như chốn thiên đường
               Trời cao như đang trêu ngươi thân ta khi bông hoa ấy
               Trót mang con tim trao cho một nam nhân thường
               Giận lòng ta ban cho bông hoa thơm hồi về cung cấm
               Khiến em luôn luôn bên ta mãi mãi không buông
               Mà nào ngờ đâu thân em nơi đây tâm trí nơi nào
               Nhìn về quê hương em ôm tương tư nặng lòng biết bao
               Một người nam nhân không vinh không hoa mà có lẽ nào
               Người lại yêu thương quan tâm hơn ta một đế vương sao
               Giọt lệ quân vương không khi nào rơi khi nước chưa tàn
               Mà tình chưa yên nên vương trên mi giọt buồn chứa chan
               Đành lòng buông tay cho em ra đi với mối tình vàng
               Một bậc quân vương uy nghiêm oai phong nhưng tim nát tan
               Một bậc quân vương mang trong con tim hình hài đất nước
               Ngỡ như dân an ta sẽ chẳng bao giờ buồn
               Nào ngờ một hôm ngao du nhân gian chạm một ánh mắt
               Khiến cho ta say ta mê như chốn thiên đường
               Trời cao như đang trêu ngươi thân ta khi bông hoa ấy
               Trót mang con tim trao cho một nam nhân thường
               Giận lòng ta ban cho bông hoa thơm hồi về cung cấm
               Khiến em luôn luôn bên ta mãi mãi không buông
               Mà nào ngờ đâu thân em nơi đây tâm trí nơi nào
               Nhìn về quê hương em ôm tương tư nặng lòng biết bao
               Một người nam nhân không vinh không hoa mà có lẽ nào
               Người lại yêu thương quan tâm hơn ta một đế vương sao
               Giọt lệ quân vương không khi nào rơi khi nước chưa tàn
               Mà tình chưa yên nên vương trên mi giọt buồn chứa chan
               Đành lòng buông tay cho em ra đi với mối tình vàng
               Một bậc quân vương uy nghiêm oai phong nhưng tim nát tan
               Mà nào ngờ đâu thân em nơi đây tâm trí nơi nào
               Nhìn về quê hương em ôm tương tư nặng lòng biết bao
               Một người nam nhân không vinh không hoa mà có lẽ nào
               Người lại yêu thương quan tâm hơn ta một đế vương sao
               Giọt lệ quân vương không khi nào rơi khi nước chưa tàn
               Mà tình chưa yên nên vương trên mi giọt buồn chứa chan
               Đành lòng buông tay cho em ra đi với mối tình vàng
               Một bậc quân vương uy nghiêm oai phong nhưng tim nát tan
               Một bậc quân vương mang trong con tim hình hài đất nước
               Ngỡ như dân an ta sẽ chẳng bao giờ buồn
               Nào ngờ một hôm ngao du nhân gian chạm một ánh mắt
               Khiến cho ta say ta mê như chốn thiên đường
         </p>
      </div> 
         )
      }
   </>
   )     
}
export default NewsDetailForm                 