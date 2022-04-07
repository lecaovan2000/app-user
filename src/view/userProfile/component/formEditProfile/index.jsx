import {React, useState, useEffect} from 'react'
import FormModal from '../../../../component/CustomModal/FormModal'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Col, Row, Modal } from 'antd'
import InputField from '../../../../component/form-controls/InputField'
import RadioFiled from '../../../../component/form-controls/radioFiled'
import FileUploadField from '../../../../component/form-controls/FileUploadField'
import { utilsToken } from '../../../../utils/token'

function FormEditProfile(props){
    const {isOpen,toggle,onSave,dataProfile,handleChange} = props
    const tokenUser = utilsToken.getAccessToken()
    const [radio,setRadio] = useState()
    const schema = yup.object().shape({
       
     })
     const onChangeRadio = (e)=>{
      setRadio(e.target.value)
     }
     console.log('value: ',radio)
     const form = useForm({
      fullname:'',
      phone:'',
      gender:radio,
      avatar:[],
      token:tokenUser,
        resolver: yupResolver(schema),
     })
     const {
      reset,
      formState: { isSubmitting }
   } = form
   useEffect(()=>{
      reset({
         fullname: dataProfile.fullname || '',
         phone:dataProfile.phone ||'',
         gender:dataProfile.gender||'',
         avatar:dataProfile.avatar||'',
         token:tokenUser,
      })
   },[dataProfile])
   

   const handleSubmit = async data => {
      console.log(isSubmitting)
      if (onSave) {
         await onSave(data)
      }
   }

    return(
        <FormModal
            title="Edit profile"
            width={900}
            footerTexts={['Cancel', 'Save']}
            isOpen={isOpen}
            toggle={toggle}
            form={form}
            onPrimarySubmit={form.handleSubmit(handleSubmit)}
        >
         <form>
            <Row>
            <Col span={12}>
                  <Row>
                     <Col >
                        <FileUploadField
                            name="avatar"
                            form={form}
                            maxItem={1}
                            labelCol={{ span: 24 }}
                            label="Hình ảnh"
                        />
                     </Col>
                  </Row>
               </Col>

               <Col span={12}>
               <Row>
                    <Col span={24}>
                        <InputField
                            size="large"
                            name="token"
                            form={form}
                            placeholder="Uid token"
                            label="Uid token"
                            labelCol={{ span: 24 }}
                            disabled={true}
                        />
                    </Col>
                </Row>
                  <Row>
                     <Col span={12}>
                        <InputField
                           size="large"
                           name="fullname"
                           form={form}
                           placeholder="Họ và tên"
                           label="Họ và tên:"
                           labelCol={{ span: 24 }}
                        />
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                        <RadioFiled 
                           name="gender"
                           form={form}
                           label="Gới tính:"
                           onChange={onChangeRadio}
                           options={
                              [
                                 { label: "Nam", value:"Male" },
                                 { label: "Nữ", value: "Female" },
                                 { label: "Khác", value: "other" },
                               ]
                           }
                           defaultValue={dataProfile.gender}
                           
                        />
                     </Col>
                  </Row>
                  <Row>
                     <Col span={12}>
                       <InputField
                            size="large"
                            name="phone"
                            form={form}
                            placeholder="Số điện thoại"
                            label="Số điện thoại:"
                            labelCol={{ span: 24 }}
                       />
                     </Col>
                  </Row>
               </Col>
                     
            </Row>
         </form>
        </FormModal>
    )
}
export default FormEditProfile