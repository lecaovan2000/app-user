import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import NewsLatest from './newsLatest';

function News(){
   const pathUrl =useRouteMatch()
   return(
      <Switch>
         <Route path={pathUrl.url} exact component={NewsLatest}  />
      </Switch>
   )
}
export default News;