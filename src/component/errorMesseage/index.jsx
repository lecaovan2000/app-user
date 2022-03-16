import { ErrorMessage } from '@hookform/error-message';
import React from 'react'
function CustomErrorMessage(props){
   const {errors, name} = props
   return(
      <ErrorMessage 
         errors={errors}
         name={name}
         render={({ message }) => <p className="error-message color--danger">{message}</p>}
      />
   )
}
export default CustomErrorMessage;