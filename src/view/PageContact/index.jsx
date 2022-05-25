import { Col, Row } from 'antd';
import React from 'react'
import Header from '../header';
import FormContact from './component/FormContact';
import img from '../../images/img-contact.png'
function PageContact(){
   return(
      <>
         <Header/>
         <Row className='page_contact'>
            <Col className='page_contact-left' span={15}>
               <h3>Contact Us</h3>
               <p>Để liên hệ và nhận các thông tin về các dự án bất động sản mới nhất vui lòng nhập đầy đủ thông tin dưới đây để chúng tôi có thể hỗ trợ bạn tốt nhất.</p>
            </Col>
            <Col span={8}><FormContact/></Col>
         </Row>
      </>
      
   )
}
export default PageContact;