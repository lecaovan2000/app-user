import {React} from 'react'
import FormModal from '../../../../component/CustomModal/FormModal'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Col, Row, Modal } from 'antd'
import InputField from '../../../../component/form-controls/InputField'
import SelectField from '../../../../component/form-controls/SelectField'
import NumberField from '../../../../component/form-controls/NumberField'
import FileUploadField from '../../../../component/form-controls/FileUploadField'
import TextAreaFiled from '../../../../component/form-controls/TextAreaField'
import { utilsToken } from '../../../../utils/token'

function AddProjectModal(props){
    const {isOpen,toggle,onSubmit,handleChange} = props
    const tokenUser = utilsToken.getAccessToken()
    const schema = yup.object().shape({
        title:yup.string().required('Tên dự án không được để trống'),
        type:yup.string().required('Chọn kiểu dự án'),
        city:yup.string(),
        district:yup.string(),
        price:yup.number(),
        acreage:yup.number(),
        bedroom_no:yup.number(),
        bathroom_no:yup.number(),
     })
     const form = useForm({
        defaultValues: {
            title:'',
            type:'',
            city:'',
            district:'',
            street:'',
            price:'',
            acreage:'',
            bedroom_no:'',
            bathroom_no:'',
            token:tokenUser,
            note:'',
            imgs:[],

        },
        resolver: yupResolver(schema),
     })

     const handleSubmit = async values => {
        Modal.confirm({
           title: `Are you sure to do add this project?`,
        //    icon: <ExclamationCircleOutlined />,
           onOk: async () => {
              if (onSubmit) {
                 const response = await onSubmit(values)
                 if (response) {
                    form.reset()
                 }
              }
           },
           onCancel() {
              return
           }
        })
     }
    
    return(
        <FormModal
            title="Add project"
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
                    <Col  span={24}>
                            <TextAreaFiled
                                size="large"
                                name="note"
                                form={form}
                                placeholder="Nội dung"
                                label="Nội dung"
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
export default AddProjectModal