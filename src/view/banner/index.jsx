import React from 'react';
import { Select, Input,Button  } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import Header from '../header';
const {Option} = Select;
function Banner(){

   return(
      <div className='banner'>
         <Header/>
         {/* <div className='banner-title'>
            <span className='banner-title-text'>Searching for your dream home</span>
         </div>
         <div className='banner-search'>
            <Select size='large' className='banner-search-select' defaultValue='ban' >
               <Option value='ban'>Bán</Option>
               <Option value='thue'>Thuê</Option>
            </Select>
            <Input size='large' className='banner-search-input' placeholder='Tìm dự án...' />
            <button  className='banner-search-btn' >
               <span style={{padding:10}}><SearchOutlined /></span>
               <span>Tìm kiếm nhanh</span>
               </button>
         </div>
         <div className='banner-collections'>
         
         </div> */}
      </div>
   )
}
export default Banner;