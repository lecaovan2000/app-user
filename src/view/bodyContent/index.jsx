import React from 'react'
import { Route, Switch, withRouter,useRouteMatch } from 'react-router'
import { paths } from '../../constants/paths';
import Login from '../auth/login';
import Register from '../auth/register'
import BodyPage from '../bodyPage';
import DetailNewsPage from '../news/component/detailNews';
import UserProfile from '../userProfile';
import EditProject from '../userProfile/projectUser/editProject';
import FormEditProject from '../userProfile/component/formEditProject';
function BodyContent(){
   const match = useRouteMatch()
   return(
      <Switch>
          <Route exact path={paths.root} component={BodyPage} />
         <Route path={paths.register} component={Register} />
         <Route path={paths.userprofile} component={UserProfile} />
         <Route path={paths.login} component={Login} />
         <Route path={'/edit/:newsUid'} component={EditProject} />
         <Route path='/:newsUid' component={DetailNewsPage}/>

      </Switch>
   )
}
export default BodyContent