import React from 'react'
import {path} from '../../constants/path'
import './cardStyle.scss'
// import imgnews from '../../images/news.png';
import IconPlace from '../../assets/icons/iconPlace';
import { Link } from 'react-router-dom';
import { PhoneOutlined } from '@ant-design/icons';
import IconBed from '../../assets/icons/iconBed';
import IconBath from '../../assets/icons/IconBath';
import IconSquare from '../../assets/icons/IconSquare';

function CardNews(props){
   const{data}=props
   return(
      <div className='card'>
            <Link to={path.root}>
               <div className='card_btnImg'>
                  <img src={data.img_info[0]} className='card-img' alt='...' />
               </div> 
            </Link>

            <div className='card_content' >
               <Link className='card_content-name'>{data.title}</Link>
            </div>

            <div className='card_content__section'>
               <span><IconPlace /></span>
               <span className='card_content__section-text'>{data.address.city}</span>
            </div>

            <div className='card_content__price'>
               <span  className='card_content__price-icon' ><PhoneOutlined style={{fontSize:'20px'}} twoToneColor='#f8f8f8' /></span>
               <span className='card_content__price-text'>{data.price}<sup>đ</sup></span>
            </div>

            <div className='card_content__extentions'>
               <div>
                  <IconBed/> <span className='card_content__extentions-text'>{data.bedroom_no} <sup>Ngủ</sup></span>
               </div>
               <div>
                  <IconBath/> <span  className='card_content__extentions-text'>{data.bathroom_no}<sup>Tắm</sup></span>
               </div>
               <div>
                  <IconSquare/> <span  className='card_content__extentions-text'>{data.acreage}<sup>m2</sup></span>
               </div>
            </div>         
         </div>
   )
}
export default CardNews;