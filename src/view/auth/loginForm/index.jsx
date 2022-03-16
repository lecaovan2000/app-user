import React from 'react'
import InputField from '../../../component/form-controls/InputField';
import {useForm} from 'react-hook-form'
import {yupResolver}from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { NavLink } from 'react-router-dom';
import PasswordField from '../../../component/form-controls/passwordField';
import {Button}from 'antd'
function LoginForm(props){
   const schema = yup.object().shape({
      username: yup.string().required('Please enter your Username'),
      password: yup.string().required('Please enter your password'),

   })
   const form = useForm({
      defaultValues:{
         username:'',
         password:'',
      }, resolver: yupResolver(schema)
   })
   const handleSubmit = async (value)=>{
      const {onSubmit}=props
      if(onSubmit){
         await onSubmit(value)
      }
   }
   const {isSubmitting}=form.formState
   return(
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='login-content-right__label'>
            <label htmlFor="username">Username</label>
         </div>

         <InputField 
            name='username' 
            form={form} 
            placeholder='UserName' 
            style={{ width: 300 }}
            size='large'
         />

         <div className='login-content-right__label'>
            <label htmlFor="password">Password</label>
         </div>

         <PasswordField 
            name='password'
            form={form}
            placeholder='Password'
            style={{ width: 300 }}
            size='large'
         />
         <Button 
            loading={isSubmitting}
            htmlType="submit"
            className='login-content-right__btn-submit'>
            Sign in
         </Button> 
         <div className='login-content-right__btn-singUp'>
            <NavLink to='/login/register'>Create an account!</NavLink> 
         </div>   
      </form>
   )
}
export default LoginForm;