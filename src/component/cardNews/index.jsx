import React from 'react'
import {path} from '../../constants/paths'
import './cardStyle.scss'
import { useSnackbar } from 'notistack'
import IconPlace from '../../assets/icons/iconPlace';
import { useHistory } from 'react-router';
import { PhoneOutlined } from '@ant-design/icons';
import IconBed from '../../assets/icons/iconBed';
import IconBath from '../../assets/icons/IconBath';
import IconSquare from '../../assets/icons/IconSquare';
import { common } from '../../utils/common';
import { Link } from 'react-router-dom'

function CardNews(props){
   const{newsData, handleEvent}=props
   return(
         <div style={{display:'flex', justifyContent:'center',flexWrap:'wrap'}}>
         {
           newsData.map && newsData.map((item,key)=>(
               <div className='card' key={key} >
                   <Link key={key} onClick={handleEvent} to={`${item.uid}`} >
                      <div className='card_btnImg'>
                         <img src={item.img_info[0]} className='card-img' alt='...' />
                      </div> 
                   </Link>

                  <div className='card_content' >
                     <Link to={`/${item.uid}`} key={key}  className='card_content-name'>{item.title}</Link>
                  </div>

                  <div className='card_content__section'>
                     <span><IconPlace /></span>
                     <span className='card_content__section-text'>{item.address.city}</span>
                  </div>

                  <div className='card_content__price'>
                     <span  className='card_content__price-icon' ><PhoneOutlined style={{fontSize:'20px'}} twoToneColor='#f8f8f8' /></span>
                     <span className='card_content__price-text'>{common.formatPrice(item.price)}<sup>đ</sup></span>
                  </div>

                  <div className='card_content__extentions'>
                     <div>
                        <IconBed/> <span className='card_content__extentions-text'>{item.bedroom_no} <sup>Ngủ</sup></span>
                     </div>
                     <div>
                        <IconBath/> <span  className='card_content__extentions-text'>{item.bathroom_no}<sup>Tắm</sup></span>
                     </div>
                     <div>
                        <IconSquare/> <span  className='card_content__extentions-text'>{item.acreage}<sup>m2</sup></span>
                     </div>
                  </div>         
               </div>
            ))
            
         }
      </div>
      
   )
}
export default CardNews;