import { React,useState } from "react";
import NewsList from "../newsList";
import FilterList from "../../../component/FilterList";

function NewsLatest(){
   const [selected, setSelected]=useState('all')
   const options =[
      {
         name:"All",
         value:"all"
      },
      {
         name:"Biệt Thự",
         value:"BIET_THU"
      },
      {
         name:"Nhà Vườn",
         value:"NHA_VUON"
      },
      {
         name:"Nhà Phố",
         value:"NHA_PHO"
      },
      {
         name:"Chung Cư",
         value:"CHUNG_CU"
      },
      {
         name:"Căn Hộ",
         value:"CAN_HO"
      }
   ] 
   

   const handleOption=(value)=>{
      setSelected(value);
   };
   
   return(
      <div className='newsLatest'>
         <div className='newsLatest__title'>
            <div >
               <span className='newsLatest__title-nameLeft'>DỰ ÁN</span>
               <span className='newsLatest__title-nameRight'>MỚI NHẤT</span>
               <p className='newsLatest__title-suggest'>Dự án mới nhất đang gần bạn</p>
            </div>
            <div>
               <FilterList
                list ={options}
                selected={selected}
                handleClick={handleOption}
                />
            </div>            
         </div>
         
         <NewsList 
               selectedOrgan={selected}
         />      
      </div>
   )
}
export default NewsLatest;