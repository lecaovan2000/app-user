import React from 'react'
import News from '../news';
import Banner from '../banner';
import Login from '../auth/login';
function BodyPage(){
   return(
      <>
         <div><Banner/></div>
         <div><News/></div>
      </>
   )
}
export default BodyPage;