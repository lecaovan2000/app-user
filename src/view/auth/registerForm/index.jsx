import React from 'react'
import InputField from '../../../component/form-controls/InputField';
import NumberField from '../../../component/form-controls/NumberField';
import {useForm} from 'react-hook-form'
import {yupResolver}from '@hookform/resolvers/yup'
import { paths } from '../../../constants/paths';
import * as yup from 'yup'
import PasswordField from '../../../component/form-controls/passwordField';
import {Button, Col, Row}from 'antd'
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
         <Row gutter={[24,0]}>
            <Col span={24}>
               <InputField
                  label='UserName'
                  name='username' 
                  form={form} 
                  placeholder='Username...' 
                  // style={{ width: 300 }}
                  size='large'
                  labelCol={{ span: 24 }}
               />
            </Col>
         </Row>
         <Row>
            <Col span={24}>
               <InputField 
                  label='Email'
                  name='email' 
                  form={form} 
                  placeholder='Email...' 
                  // style={{ width: 300 }}
                  size='large'
                  labelCol={{ span: 24 }}
               />
            </Col>
         </Row>
         <Row>
            <Col span={24}>
               <InputField
                  label='Phone'
                  name='phone'
                  form={form}
                  placeholder='Phone...'
                  labelCol={{ span: 24 }}
                  size='large'
               />
            </Col>
         </Row>
         <Row>
            <Col span={24}>
               <InputField
                  label='FullName'
                  name='fullname' 
                  form={form} 
                  placeholder='FullName...' 
                  labelCol={{ span: 24 }}
                  size='large'
               />
            </Col>
         </Row>
         <Row>
            <Col span={24}>
               <PasswordField 
                  label='Password'
                  name='password'
                  form={form}
                  placeholder='Password'
                  labelCol={{ span: 24 }}
                  size='large'
               />
            </Col>
         </Row>
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