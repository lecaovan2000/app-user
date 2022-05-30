import { CircularProgress } from "@mui/material";
import { Button, Col, Form, Input, Row } from "antd";
import React,{useState} from "react";
import { withSnackbar } from 'notistack';
function FormContact(props){
   const [loading, setLoading] = useState(false);
   const checkIsFilledAllFields = (elements) => {
      if (elements.name.value &&
         elements.email.value &&
         elements.phone.value &&
         elements.message.value) {

         return true;
      }
      return false;
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      if (!checkIsFilledAllFields(e.target.elements)) {
         setLoading(false);
         props.enqueueSnackbar('Thông tin không được để trống', {
            variant: "warning"
         })
         return
      }

      const formData = {
         name: e.target.elements.name.value,
         email: e.target.elements.email.value,
         phone: e.target.elements.phone.value,
         message: e.target.elements.message.value,
         _template: "table",
         _captcha: "false",
         _honey: ''
      };

      fetch("https://formsubmit.co/lecaovan2000@gmail.com", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((data) => {
            // console.log(data);

            props.enqueueSnackbar('Gửi email thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', {
               variant: "success"
            })
            e.target.reset();
            setLoading(false);
         })
         .catch((error) => {
            props.enqueueSnackbar('Gửi email lỗi! Try again later.', {
               variant: "error"
            })
            // console.log(error);
            setLoading(false);
         });
   };

   return(
      <form
         noValidate
         autoComplete="off"
         onSubmit={handleSubmit}
      >
         <Row gutter={[24, 0]}>
            <Col className="col-form" span={12}>
               <label className="label-form">Name*</label>
               <Input
                  name="name"
                  className="input-form"
                  size='large'
                  variant="outlined"
                  placeholder="Name"
                  type="text"
                  required
                     />
            </Col>
            <Col className="col-form" span={12}>
               <label className="label-form">Số Phone*</label>
               <Input
                  name="phone"
                  className="input-form"
                  size='large'
                  variant="outlined"
                  placeholder="Phone"
                  type="number"
                  required
                  />
            </Col>
         </Row>
         <Row>
            <Col span={24} className="col-form">
               <label className="label-form">Email*</label>
               <Input
                  name="email"
                  className="input-form"
                  variant="outlined"
                  size='large'
                  placeholder="Email"
                  type="text"
                  required
                  />
            </Col>
            
         </Row>
         <Row>
            <Col span={24} className="col-form" >
               <label className="label-form">Message</label>
               <Input.TextArea
                  name='message' 
                  className="input-form"
                  variant="outlined"
                  size='large'
                  placeholder="Message"
                  type="text"
               />
            </Col>
            
         </Row>
                  
         <button className="contact-btn"  type="submit" disabled={loading}>Send mesage {loading && <CircularProgress size={20}  />}</button>
      </form>
   )

}export default withSnackbar(FormContact);