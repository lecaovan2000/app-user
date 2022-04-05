import {React } from 'react'
import{Form, Input} from 'antd'
import {Controller} from 'react-hook-form'
import PropTypes from 'prop-types'
InputField.prototype={
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   labelCol: PropTypes.object,
   rules: PropTypes.array,
   className: PropTypes.string,
   disabled: PropTypes.bool,
   maxLength: PropTypes.number
}
function InputField(props){
   const {form, label, labelCol,width, name, rules, disabled, className,size,maxLength,style, ...restProps}= props;
   const { control } = form;
   
   
   return(
      <Form.Item
         label={label}
         labelCol={labelCol}
         name={name}
         rules={rules}
         className={className || ''}
         colon={false}
      >
         <Controller 
            name={name}
            control={control}
            render={({field,fieldState:{invalid,error}})=>{
               return(
                  <div className='input-item'>
                     <Input 
                        {...field}
                        {...restProps}
                        disabled={disabled}
                     />
                     <div>{error?.message || ''}</div>
                  </div>
               )
            }}
         />
      </Form.Item>
   )
}
export default InputField