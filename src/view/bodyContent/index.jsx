import React from 'react'
import { Route, Switch, withRouter,useRouteMatch } from 'react-router'
import { paths } from '../../constants/paths';
import Login from '../auth/login';
import Register from '../auth/register'
import BodyPage from '../bodyPage';
import DetailNewsPage from '../news/component/detailNews';

function BodyContent(){
   return(
      <Switch>
         <Route exact path={paths.root} component={BodyPage} />
         <Route path={paths.register} component={Register} />
         <Route path={paths.login} component={Login} />
         <Route path={paths.detail} component={DetailNewsPage}/>
      </Switch>
   )
}
export default withRouter(BodyContent);