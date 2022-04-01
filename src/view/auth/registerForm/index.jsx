import React from 'react'
import InputField from '../../../component/form-controls/InputField';
import NumberField from '../../../component/form-controls/NumberField';
import {useForm} from 'react-hook-form'
import {yupResolver}from '@hookform/resolvers/yup'
import { paths } from '../../../constants/paths';
import * as yup from 'yup'
import PasswordField from '../../../component/form-controls/passwordField';
import {Button}from 'antd'
import { useHistory } from 'react-router';
function RegisterForm(props){
   const schema = yup.object().shape({
      username: yup.string().required('Please enter your Username'),
      password: yup.string().required('Please enter your password'),
      email:yup.string().required('Please enter your emmail')

   })
   const form = useForm({
      defaultValues:{
         username:'',
         email:"",
         phone:'',
         fullname:'',
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
   const history = useHistory()
   return(
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='login-content-right__label'>
            <label htmlFor="username">Username</label>
         </div>
         <InputField 
            name='username' 
            form={form} 
            placeholder='Username...' 
            style={{ width: 300 }}
            size='large'
         />
         
         <div className='login-content-right__label'>
            <label htmlFor="password">Password</label>
         </div>
          <InputField 
            name='email' 
            form={form} 
            placeholder='Email...' 
            style={{ width: 300 }}
            size='large'
         />
         <div className='login-content-right__label'>
            <label htmlFor="password">Password</label>
         </div>
         <InputField
            name='phone'
            form={form}
            placeholder='Phone...'
            style={{width:300}}
            size='large'
         />
         
         <div className='login-content-right__label'>
            <label htmlFor="password">Password</label>
         </div>
         <InputField 
            name='fullname' 
            form={form} 
            placeholder='FullName...' 
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
            Creat account
         </Button>
         <div>
         <Button 
            onClick={()=>{
               history.push(paths.login)
            }}
            className='login-content-right__btn-login'>
            Sing in
         </Button>
         </div>
         
         

      </form>
   )
}
export default RegisterForm;