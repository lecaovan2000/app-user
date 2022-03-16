import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { path } from '../../constants/path';
import Banner from '../banner/index.jsx';
import Login from '../auth/login';
import Register from '../auth/register'
import BodyPage from '../bodyPage';
function BodyContent(){
   return(
      <Switch>
         <Route exact path={path.root} component={BodyPage} />
         <Route path={path.register} component={Register} />
         <Route path={path.login} component={Login} />
      </Switch>
   )
}
export default withRouter(BodyContent);