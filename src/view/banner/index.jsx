import React from 'react';
import { Select, Input,Button  } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import Header from '../header';
import { Carousel } from 'antd';
import img1 from '../../images/chinh-sach-ho-tro-tai-chinh-kich-cau-thi-truong-bat-dong-san-cuoi-nam-1.jpg'
import img2 from '../../images/toan-canh-bat-dong-san-nha-trang-1625440231.jpg'
import img3 from '../../images/1920-x900-e1582807154658.jpg'
import img4 from '../../images/background.jpg'
// const {Option} = Select;
function Banner(){

   return(
      <div className='banner'>
         
         {/* <div className='banner-title'>
            <span className='banner-title-text'>Searching for your dream home</span>
         </div> */}
         {/* <div className='banner-search'>
            <Select size='large' className='banner-search-select' defaultValue='ban' >
               <Option value='ban'>Bán</Option>
               <Option value='thue'>Thuê</Option>
            </Select>
            <Input size='large' className='banner-search-input' placeholder='Tìm dự án...' />
            <button  className='banner-search-btn' >
               <span style={{padding:10}}><SearchOutlined /></span>
               <span>Tìm kiếm nhanh</span>
               </button>
         </div> */}
         <div className='banner-collections'>
         <Header/>
            <Carousel autoplay co >
               <div ><img className='contentStyle_carousel' src={img1}/></div>
               <div><img className='contentStyle_carousel' src={img2}/></div>
               <div><img className='contentStyle_carousel' src={img3}/></div>
               <div><img className='contentStyle_carousel' src={img4}/></div>
            </Carousel>
         </div>
      </div>
   )
}
export default Banner;