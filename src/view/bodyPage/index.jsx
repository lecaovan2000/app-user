import React from 'react'
import News from '../news';
import Banner from '../banner';
import UserProfile from '../userProfile';
function BodyPage(){
   return(
      <>
         <Banner/>
         <News/>
         <UserProfile/>
      </>
   )
}
export default BodyPage;