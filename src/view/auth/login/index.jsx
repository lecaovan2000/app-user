import {React} from 'react'
import LoginForm from '../loginForm/index.jsx';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { login } from '../userSlice.js';
import { useDispatch } from 'react-redux';
import IconBack from '../../../assets/icons/IconBack.js';
import { paths } from '../../../constants/paths.js';
Login.propTypes = {
   closeDialog: PropTypes.func
};
function Login(props){
   const history = useHistory()
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();
   const handleSubmit = async (values) => {
      try {
         
         const userLogin = await dispatch(login(values))
         unwrapResult(userLogin);
         history.push(paths.root)
      } catch (error) {
         enqueueSnackbar(error.message,{
            variant: 'error'
         })
         
      }
  }
   
   return(
      <div className='login'>
         
         <div className='login-content'>
            <button className='login-content-back' onClick={()=>{history.goBack()}}>
                  <span className='login-content-back__icon'>
                     <IconBack/>
                  </span>

                  <span className='login-content-back__text'>Back</span>
            </button>
            <div className='login-content-left'> 
               <span className='login-content-left__text'>Welcome Login</span>
            </div>
            <div className='login-content-right'>
                  <div className='login-content-right__content_login'>
                     {/* <span >Login</span> */}
                  </div> 
                  <div>
                     <LoginForm onSubmit={handleSubmit} />
                  </div>
               
            </div>
         </div>
      </div>
   )
}
export default Login;