import {React, useEffect, useState} from 'react'
import InputFiled from '../../../../component/form-controls/InputField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Col, Row } from 'antd'
import RadioFiled from '../../../../component/form-controls/radioFiled'

function FormProfile(props){
   const {data}=props
   const schema = yup.object().shape({
   })
   const form = useForm({
      resolver: yupResolver(schema)
   })
   const {
      reset,
      formState:{isSubmitting}
   } = form

   useEffect(()=>{
      reset({
         fullname: data.fullname || '',
         phone:data.phone ||'',
         gender:data.gender||''

      })
   },[data])

   return(
      <div>
         <div className='formProfileUser'>
            <div className='formProfileUser-left'>
               <img className='formProfileUser-left-img' src={data.avatar ||'https://joeschmoe.io/api/v1/random' } alt="Avatar"/>
            </div>
            <div className='formProfileUser-right'>
            <form>
                  <Row>
                     <Col span={24}>
                        <InputFiled
                           size="large"
                           name="fullname"
                           form={form}
                           placeholder="Họ và tên"
                           label="Họ và tên:"
                           labelCol={{ span: 24 }}
                           // disabled={true}
                        />
                     </Col>
                  </Row>
                  <Row>
                     <Col span={24}>
                        <RadioFiled 
                           name="gender"
                           form={form}
                           label="Gới tính:"
                           options={
                              [
                                 { label: 'Nam', value: 'Male' },
                                 { label: 'Nữ', value: 'Female' },
                                 { label: 'Khác', value: 'other' },
                               ]
                           }
                           // disabled={true}
                           // value={data.gender}
                        />
                     </Col>
                  </Row>
                  <Row>
                     <Col span={24}>
                       <InputFiled
                            size="large"
                            name="phone"
                            form={form}
                            placeholder="Số điện thoại"
                            label="Số điện thoại:"
                            labelCol={{ span: 24 }}
                           //  disabled={true}
                       />
                     </Col>
                  </Row>
                  <Row>
                  </Row>
               </form>
            </div>

         </div>
      </div>
   )
}
export default FormProfile;