import React from 'react'
import './style.scss'
FilterList.propTypes = {}

function FilterList(props) {
   const { list, selected, handleClick } = props
   const onClickOrgan = e => {
      if (!e.target.classList.contains('active_ant')) {
         handleClick(e.target.dataset.value)
      }
   }
   return (
      <>
         <div className="groupButton">
            {list.map((item,key) =>
               item.value === selected ? (
                  <button
                     key={key}
                     className="btn-filter active_ant"
                     data-value={item.value}
                     onClick={onClickOrgan}
                  >
                     {item.name}
                  </button>
               ) : (
                  <button key={key} className="btn-filter" data-value={item.value} onClick={onClickOrgan}>
                     {item.name}
                  </button>
               ),
            )}
         </div>
      
         
      </>
   )
}
export default FilterList
