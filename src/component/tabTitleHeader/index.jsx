import {React} from 'react'
import './style.scss'
function TabTitleHeader(props){
   return(
      <div className='root'>
         <span  className='root-text'>{props.text}</span>
      </div>
   )
}
export default TabTitleHeader;