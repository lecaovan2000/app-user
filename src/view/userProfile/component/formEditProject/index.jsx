import {React, useState, useEffect} from 'react'
import FormModal from '../../../../component/CustomModal/FormModal'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Col, Row } from 'antd'
import InputField from '../../../../component/form-controls/InputField'
import SelectField from '../../../../component/form-controls/SelectField'
import NumberField from '../../../../component/form-controls/NumberField'
import FileUploadField from '../../../../component/form-controls/FileUploadField'
import { utilsToken } from '../../../../utils/token'

function FormEditProject(props){
    const {isOpen,toggle,onSave,dataNews,title} = props
    const tokenUser = utilsToken.getAccessToken()
    console.log("đây là dât",dataNews)
    const schema = yup.object().shape({
       
     })
     const form = useForm({
        // title:'',
        // type:'',
        // city:'',
        // district:'',
        // street:'',
        // price:'',
        // acreage:'',
        // bedroom_no:'',
        // bathroom_no:'',
        // token:tokenUser,
        // imgs:[],
        resolver: yupResolver(schema),
     })
     const {
      reset,
      formState: { isSubmitting }
   } = form
   useEffect(()=>{
      reset({
         title: dataNews.title || '',
         type: dataNews.type||'',
         token:tokenUser,
         city:dataNews.address.city||'',
         district:dataNews.address.district ||'',
         street:dataNews.address.street ||'',
         price:dataNews.price||'',
         acreage:dataNews.acreage ||'',
         bedroom_no:dataNews.bedroom_no||'',
         bathroom_no:dataNews.bathroom_no||'',
         uid:dataNews.uid
        //  imgs:data.img_info[0]
      })
   },[dataNews])
   

   const handleSubmit = async data => {
      console.log(isSubmitting)
      if (onSave) {
         await onSave(data)
      }
   }

    return(
       <FormModal
         title={title}
         width={900}
         footerTexts={['Cancel', 'Save']}
         isOpen={isOpen}
         toggle={toggle}
         form={form}
         onPrimarySubmit={form.handleSubmit(handleSubmit)}
       >
          <form>
                <Row gutter={[24,0]}>
                    <Col span ={18}>
                        <InputField
                            size="large"
                            name="title"
                            form={form}
                            placeholder="Tên dự án"
                            label="Tên dự án"
                            labelCol={{ span: 24 }}
                        />
                    </Col>
                    <Col span={6}>
                        <SelectField
                            size="large"
                            name="type"
                            form={form}
                            label="Kiểu dự án"
                            labelCol={{ span: 24 }}
                            options={[
                                {
                                    label:"Biệt Thự",
                                    value:"BIET_THU"
                                 },
                                 {
                                    label:"Nhà Vườn",
                                    value:"NHA_VUON"
                                 },
                                 {
                                    label:"Nhà Phố",
                                    value:"NHA_PHO"
                                 },
                                 {
                                    label:"Chung Cư",
                                    value:"CHUNG_CU"
                                 },
                                 {
                                    label:"Căn Hộ",
                                    value:"CAN_HO"
                                 }
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
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
                    <Col span={6}>
                        <InputField
                            size="large"
                            name="uid"
                            form={form}
                            placeholder="Uid "
                            label="Uid"
                            labelCol={{ span: 24 }}
                            disabled={true}
                        />
                    </Col>
                </Row>
                <Row  gutter={[24,0]}>
                    <Col span={6}>
                        <InputField
                            size="large"
                            name="city"
                            form={form}
                            placeholder="Thành phố"
                            label="Thành phố"
                            labelCol={{ span: 24 }}
                        />
                    </Col>
                    <Col span={6}>
                        <InputField
                            size="large"
                            name="district"
                            form={form}
                            placeholder="Quận/Huyện"
                            label="Quận/Huyện"
                            labelCol={{ span: 24 }}
                        />
                    </Col>
                    <Col span={12}>
                        <InputField
                            size="large"
                            name="street"
                            form={form}
                            placeholder="Địa chỉ..."
                            label="Địa chỉ cụ thể"
                            labelCol={{ span: 24 }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <NumberField
                            size="large"
                            name="price"
                            form={form}
                            placeholder="Giá"
                            label="Giá(VND)"
                            labelCol={{ span: 24 }}
                        />
                    </Col>
                    <Col span={12}>
                        <NumberField
                            size="large"
                            name="acreage"
                            form={form}
                            placeholder="Diện tích"
                            label="Diện tích(m2)"
                            labelCol={{ span: 24 }}
                        />
                    </Col>
                </Row>

                <Row  gutter={[24,0]}>
                    <Col span={8}>
                        <NumberField
                            size="large"
                            name="bedroom_no"
                            form={form}
                            placeholder="Phòng ngủ"
                            label="Phòng ngủ"
                            labelCol={{ span: 24 }}
                        />
                    </Col>
                    <Col span={8}>
                        <NumberField
                            size="large"
                            name="bathroom_no"
                            form={form}
                            placeholder="Phòng tắm"
                            label="Phòng tắm"
                            labelCol={{ span: 24 }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                            <FileUploadField
                                 name="imgs"
                                 form={form}
                                 maxItem={8}
                                 labelCol={{ span: 24 }}
                                 label="Hình ảnh"  
                            />
                    </Col>
                </Row>
            </form>
       </FormModal>
    )
}
export default FormEditProject