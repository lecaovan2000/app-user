import {React} from 'react'
import RegisterForm from '../registerForm/index.jsx';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types';
import { register } from '../userSlice.js';
import { useDispatch } from 'react-redux';
import registerImg from '../../../images/bgr_register.jpg'
Register.propTypes = {
   closeDialog: PropTypes.func
};
function Register(props){
   const MessageSuccess={variant:'success', message:'Success'}
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();
   const handleSubmit = async (values) => {
      try {
          const action = register(values)
          const resultAction = await dispatch(action);
           unwrapResult(resultAction);
           enqueueSnackbar(MessageSuccess.message,{
              variant:'success'
           });
      } catch (error) {
         enqueueSnackbar(error.message,{
            variant: "error" 
         })
      }
  }
   
   return(
      <div className='register'>
         <div className='register-content'>
            <div className='register-content-left'> 
               <img className='register-content-left__img' src={registerImg}/>
            </div>
            <div className='register-content__right'>
               <span className='register-content__right-title'>Sing up</span>
               <RegisterForm onSubmit={handleSubmit} />
            </div>
         </div>
      </div>
   )
}
export default Register;