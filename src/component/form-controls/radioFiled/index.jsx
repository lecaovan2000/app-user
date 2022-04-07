import {React} from 'react'
import{Form, Input, Radio} from 'antd'
import {Controller} from 'react-hook-form'
import PropTypes from 'prop-types'

   RadioFiled.prototype={
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   labelCol: PropTypes.object,
   rules: PropTypes.array,
   className: PropTypes.string,
   disabled: PropTypes.bool,
   maxLength: PropTypes.number,
   options:PropTypes.array,
   onChange:PropTypes.func,
   value:PropTypes.any,
   optionType:PropTypes.array,
   buttonStyle:PropTypes.outline,

}
function RadioFiled(props){
   const {form, label, labelCol, name, disabled, className,options,onChange,defaultValue, ...restProps}= props;
   const { control } = form;
   return(
      <Form.Item
         label={label}
         labelCol={labelCol}
         name={name}
         className={className || ''}
         colon={false}
      >
         <Controller 
            name={name}
            control={control}
            render={({field,fieldState:{invalid,error}})=>{
               return(
                  <div className='input-item'>
                     <Radio.Group
                        {...field}
                        defaultValue={field.value}
                        options={options}
                        disabled={disabled}
                        {...restProps}
                     />
                     <div>{error?.message || ''}</div>
                  </div>
               )
            }}
         />
      </Form.Item>
   )
}
export default RadioFiled