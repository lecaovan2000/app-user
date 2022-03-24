import {React, useState} from 'react'
import SideBar from '../../../component/SideBar';
import { Route, Switch, withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { paths } from '../../../constants/paths';
import Update from '../update';
import Project from '../project';
function FormProfile(){

   const [collapseSidebar, SetCollapseSidebar] = useState(false)
   const currentUser = useSelector(state => state.user).current

   const handleOnCollapseClick = () => {
      SetCollapseSidebar(!collapseSidebar)
   }

   return(
      <div className={`main-page ${collapseSidebar ? 'close-menu' : ''}`}>
         <SideBar
            isCollapsed={collapseSidebar}
            onCollapseClick={handleOnCollapseClick}
            currentUser={currentUser}
         />
         <div className="content-container showed-page">
            <Switch>
               <Route exact path={paths.update} component={Update} />
               <Route exact path={paths.userprofile} component={Project} />
            </Switch>
         </div>
      </div>
   )
}
export default withRouter(FormProfile);