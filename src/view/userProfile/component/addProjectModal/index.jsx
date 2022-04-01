import {React} from 'react'
import FormModal from '../../../../component/CustomModal/FormModal'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

function AddProjectModal(props){
    const {isOpen,toggle} = props
    const schema = yup.object().shape({
        
     })
     const form = useForm({
        defaultValues: {
          
        },
        resolver: yupResolver(schema),
     })
    return(
        <FormModal
            title="Add project"
            width={900}
            isOpen={isOpen}
            toggle={toggle}
            form={form}
        >
            <form>
                <h1>Đang được update...</h1>
            </form>
        </FormModal>
    )
}
export default AddProjectModal