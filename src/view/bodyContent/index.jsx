import React from 'react'
import { Route, Switch } from 'react-router'
import { paths } from '../../constants/paths';
import Login from '../auth/login';
import Register from '../auth/register'
import BodyPage from '../bodyPage';
import DetailNewsPage from '../news/component/detailNews';
import UserProfile from '../userProfile';
import EditProject from '../userProfile/projectUser/editProject';
import RaoTin from '../PageRaoTin';
import PageNews from '../PageNews';
import PageIntroduce from '../PageIntroduce';
function BodyContent(){
   return(
      <Switch>
         <Route exact path={paths.root} component={BodyPage} />
         <Route path={paths.raotin} component={RaoTin} />
         <Route path={paths.pagenews} component={PageNews} />
         <Route path={paths.gioithieu} component={PageIntroduce} />
         <Route path={paths.register} component={Register} />
         <Route path={paths.userprofile} component={UserProfile} />
         <Route path={paths.login} component={Login} />
         <Route path={'/edit/:newsUid'} component={EditProject} />
         <Route path='/:newsUid' component={DetailNewsPage}/>

      </Switch>
   )
}
export default BodyContent