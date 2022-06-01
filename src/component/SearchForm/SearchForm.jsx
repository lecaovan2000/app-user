import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Row } from 'antd'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../form-controls/InputField'
import { yupResolver } from '@hookform/resolvers/yup'
import SelectField from '../form-controls/SelectField'

SearchForm.propTypes = {
   onSubmit: PropTypes.func.isRequired
}

function SearchForm({ onSubmit }) {
   const schema = yup.object().shape({
   })
   const form = useForm({
      resolver: yupResolver(schema)
   })
   const {
      formState: { isSubmitting }
   } = form

   const handleSubmit = async _data => {
      if (onSubmit) await onSubmit(_data)
   }

   return (
      <form onSubmit={form.handleSubmit(handleSubmit)}>
         <Row justify="start" gutter={[24, 0]}>
            <Col span={4}>
               <SelectField
                     size="middle"
                     name="status"
                     form={form}
                     label="Trạng thái"
                     labelCol={{ span:10 }}
                     options={[
                        {
                           label:"All",
                           value:'all'
                        },
                        {
                           label:"Đang bán",
                           value:true
                        },
                        {
                           label:"Đã bán",
                           value:false
                        },
                     ]}
                  />
            </Col>
            {/* <Col span={10}>
               
               <InputField
                  size="large"
                  name="search"
                  form={form}
                  placeholder="Search "
                  label=""
                  labelCol={{ span: 0 }}
               />
            </Col> */}
            <Button htmlType="submit" type="primary" size="middle" loading={isSubmitting}>
               Filter
            </Button>
         </Row>
      </form>
   )
}

export default SearchForm
