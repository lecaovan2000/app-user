import React from 'react'
import Header from '../header';
import {PageHeader} from 'antd'
import {useHistory} from 'react-router-dom'
function PageIntroduce(){
   const history = useHistory()
   return(
      <>
         <Header/>
         <div className='root_introduce'>
         <div>
            <PageHeader
               // className='details__pageHeader'
               onBack={() => history.go(-1)}
               title='Home'
               subTitle='Giới thiệu'
            />
         </div>
         <h1 className='title_introduce'>Giới thiệu</h1>
         <div>
            <p className='text_introduce'>Trong cuộc sống hiện đại ngày nay, quá trình toàn cầu hóa đã và đang diễn ra mạnh mẽ trên thế giới nói chung và tại Việt Nam nói riêng. 
               Trước sự phát triển mạnh mẽ vượt bậc đó, thị trường bất động sản ở Việt Nam ra đời nhằm đáp ứng nhu cầu hội nhập kinh tế quốc tế. 
               Cũng chính vì lý do đó, Công Ty Cổ Phần Đầu Tư Delta Platinum đã ra đời dựa trên tầm nhìn và chiến lược phát triển của thị trường Bất động sản Việt Nam.</p>
         </div>
         <div>
            <p className='text_introduce'>Với sự dẫn dắt đầy tận tâm của ban Lãnh đạo dày dạn kinh nghiệm trong ngành cùng với đội ngũ nhân viên trẻ, 
               đầy nhiệt huyết và năng động, chịu khó ham học hỏi Công ty Cổ phần Đầu tư Delta Platinum đã dần tạo được vị thế của mình trên thương trường cũng như trên thị trường Bất động sản Việt Nam. Chúng tôi tự hào khi mang đến cho khách hàng những dự án, 
               sản phẩm với chất lượng tốt nhất để lại ấn tượng sâu sắc trong lòng khách hàng.</p>
         </div>
         <div>
            <p className='text_introduce'>Công ty Cổ phần đầu tư Delta Platinum luôn tâm niệm rằng niềm tin của khách hàng chính là đích đến của sự thành công. 
               Ngoài ra góp phần vào sự thành công đó chính là chất lượng sản phẩm, dịch vụ và đạo đức kinh doanh. 
               Tất cả những điều đó đều được xem là nền tảng vững chắc để công ty bất động sản Delta Platinum phát triển lâu dài, 
               tạo dựng niềm tin tuyệt đối đối với quý khách hàng và đối tác.</p>
         </div>
         <div>
            <p className='text_introduce'>Công ty CP Đầu tư Delta Platinum sở hữu một đội ngũ quản lý và nhân viên giàu kinh nghiệm, phong cách làm việc chuyên nghiệp, 
               có đạo đức và uy tín trong nghề nghiệp. 
               Mỗi nhân viên đều mang trong mình một sứ mệnh đó sẵn sàng đáp ứng mọi nhu cầu của khách hàng bất cứ lúc nào và ở bất cứ nơi đâu một cách trọn vẹn nhất.</p>
         </div>
         <div>
            <p className='text_introduce'>Địa ốc Việt Hưng Phát đã và đang xây dựng phát triển thành công nhiều dự án bất động sản với quy mô rộng lớn, 
               dịch vụ đẳng cấp từ Đất nền đến Căn hộ, từ dòng sản phẩm trung cấp đến cao cấp , điển hình như:Khu Đô thị Thương mại Dịch vụ Spring Town, Khu đô thị Thương mai Dịch vụ Diamond City, Khu Đô thị Thương mại The Sun City,…</p>
         </div>
         <div>
            <p className='text_introduce'>Bên cạnh đó, Bất động sản Delta Platinum luôn coi trọng ý thức trách nhiệm của doanh nghiệp đối với cộng đồng và môi trường, 
               phát triển các sản phẩm và hoạt động kinh doanh trên tiêu chí hài hòa lợi ích doanh nghiệp với cộng đồng xã hội, 
               thân thiện môi trường thiên nhiên. Công ty CP Đầu tư Delta Platinum luôn tích cực triển khai và tham gia các hoạt động thiện nguyện, 
               không chỉ làm giàu cho đất nước mà còn góp một phần nhỏ bé xoa dịu nỗi đau của những con người bất hạnh đóng góp cho sự phát triển của xã hội và cộng đồng.</p>
         </div>
         <div>
            <p className='text_introduce'>Bất động sản Delta Platinum luôn phấn đấu để trở thành một trong những công ty uy tín hàng đầu trong lĩnh vực đầu tư các dự án bất động sản đất nền. 
               Công ty Bất động sản Delta Platinum luôn không ngừng nâng cao năng lực đội ngũ cán bộ nhân viên công ty và chất lượng của những dự án mà Địa ốc Delta Platinum trực tiếp phân phối cũng như đầu tư đáp ứng nhu cầu đa dạng của mọi đối tượng quý khách hàng.</p>
         </div>
         

         </div>
      </>
      
   )
}
export default PageIntroduce;