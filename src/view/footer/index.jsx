import React from 'react'
import IconFacebook from '../../assets/icons/IconFacebook';
import IconTwitter from '../../assets/icons/IconTwitter';
function Footer(){
   return(
      <div>
         <footer className='footer'>
            <div className='footer-root'>
               <div className='footer-left'>
                  <div className='footer-left_we'>
                     <div ><h4 className='footer-left_we-h4'>Về chúng tôi</h4></div>
                     <div><p className='footer-left_we-p'>Trang web này là sản phẩm của Lê Cao Văn và Võ Đắc Vương sinh viên trường Đại Học Công Nghiệp TP. Hồ Chí Minh (IUH). Tìm tin bán nhà đất hoặc cho thuê nhà đất mới nhất bằng cách sử dụng công cụ tìm kiếm hoặc các đường link ngay trên trang chủ.</p></div>
                  </div>

                  <div className='footer-left_chinhSach'>
                     <div><h4 className='footer-left_we-h4'>Chính sách</h4></div>
                     <div>
                        <ul className='list-menu'>
                           <li><a className="list-menu_li" href="/">Trang chủ</a></li>
                           <li><a className="list-menu_li" href="/collections">Rao tin</a></li>
                           <li><a className="list-menu_li" href="/news">Tin tức</a></li>
                           <li><a className="list-menu_li" href="/introduce">Giới thiệu</a></li>
                           <li><a className="list-menu_li" href="/contact">Liên hệ</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className='footer-right'>
                  <div className='footer-right_connect'>
                     <h4 className='footer-left_we-h4'>LIÊN HỆ</h4>
                     <div >
                        <div className='footer-right_support'>
                              <div >
                                 <div className="fright">
                                    <p className='footer-right_support-p'>Bạn cần hỗ trợ ?</p>
                                    <a className='footer-right_support-phone' href="tel:0355374753">0355374753</a>
                                 </div>
                                 <div >
                                    <div >
                                       <span className='footer-left_we-p'>Gò Vấp, TP. Hồ Chí Minh, Vietnam</span>
                                    </div>
                                 </div>
                                 <div >
                                    <div >
                                       <a className='footer-right_support-p' href="mailto:acc.deviuh@gmail.com">acc.deviuh@gmail.com</a>
                                    </div>
                                 </div>
                              </div>

                        </div>
                        <div >
                           <ul className="follow_options">	
                              <li className="follow_options-li">
                                 <a className="follow_options-li_a" href="#" title="Theo dõi Facebook"><IconFacebook/></a>
                              </li>
                              <li className="follow_options-li">
                                 <a className="follow_options-li_a" href="#" title="Theo dõi Twitter"><IconTwitter/></a>
                              </li>
                              <li className="follow_options-li">
                                  <a className="follow_options-li_a"  href="#" title="Theo dõi zalo">Zalo</a>
                              </li>
                              {/* <li className="follow_options-li">
                                 <a href="#" title="Theo dõi Instagam Delta Platinum">a</a>
                              </li> */}
                                 
                           </ul>
                        </div>

                     </div>
                  </div>
                  <div className='footer-right_huongdan'>
                     <h4 >
                        <a role="button" className='footer-left_we-h4'  >
                           Hướng dẫn <i className="fa fa-plus" aria-hidden="true"></i>
                        </a>
                     </h4>
                     <div className="collapse time_work" id="collapseListMenu04">
                        <ul className="list-menu">
                           <li ><a className="list-menu_li" href="/">Trang chủ</a></li>
                           <li ><a className="list-menu_li" href="/collections">Rao tin</a></li>
                           <li ><a className="list-menu_li" href="/news">Tin tức</a></li>
                           <li ><a className="list-menu_li" href="/introduce">Giới thiệu</a></li>
                           <li ><a className="list-menu_li" href="/contact">Liên hệ</a></li>
                        </ul>
                      </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
      
   )
}
export default Footer;