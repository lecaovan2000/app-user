import { Avatar, Badge, Popover, Tooltip } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation, withRouter,useHistory } from 'react-router-dom'
import IconMenuCollapse from '../../assets/icons/IconMenuCollapse'
import IconMenuExpand from '../../assets/icons/IconMenuExpand'
import { paths } from '../../constants/paths'
import IconUser from '../../assets/icons/iconUser'
import IconUserActive from '../../assets/icons/iconUserActive' ;
import {logout} from'../../view/auth/userSlice'
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { utilsToken } from '../../utils/token'
import userApi from '../../api/userApi'


SideBar.propTypes = {}

function SideBar(props) {
   const { isCollapsed, onCollapseClick, } = props
   const location = useLocation()
   const history = useHistory()
   const dispatch = useDispatch()
   const inforUser = utilsToken.getAccessUser()
   const newInfoUser = JSON.parse(inforUser)
   const [infoUser, setInfoUser]=useState({})
   const tokenUser = utilsToken.getAccessToken()
   console.log(tokenUser)
   const getInfoUser = async()=>{
      try {
         const response = await userApi.getProfileUserName(newInfoUser.uid)
         console.log("sibar user", response)
         setInfoUser(response.data)
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(()=>{
      getInfoUser()
   },[])

   const comparePath = (pathname, routeLink) => {
      return pathname.split('/userProfile')[0] === routeLink.substring(0)
   }
   const sidebarItems = useMemo(() => {
      return [
         {
            routeLink: paths.userprofile,
            label: 'Thông tin',
            icon: <IconUser />,
            iconActive: <IconUserActive/>
         },
         {
            routeLink: paths.userProject,
            label: 'Dự án',
            icon: <IconUser />,
            iconActive: <IconUserActive />
         },

      ]
   }, [])

   const renderSideBarItems = () => {
      return sidebarItems.map(sidebarItem =>
         isCollapsed ? (
            <Tooltip
               placement="right"
               title={sidebarItem.label}
               mouseEnterDelay={0}
               mouseLeaveDelay={0}
               key={sidebarItem.routeLink}
            >
               <div className={`sidebar__menu-item`}>
                  <NavLink exact to={sidebarItem.routeLink} className="menu-item__link">
                     <Badge
                        className="menu-item__icon"
                        size="small"
                        overflowCount={99}
                     >
                        {comparePath(location.pathname, sidebarItem.routeLink)
                           ? sidebarItem.iconActive
                           : sidebarItem.icon}
                     </Badge>
                     {sidebarItem.label}
                  </NavLink>
               </div>
            </Tooltip>
         ) : (
            <div className={`sidebar__menu-item`} key={sidebarItem.routeLink}>
               <NavLink exact to={sidebarItem.routeLink} className="menu-item__link">
                  <Badge
                     className="menu-item__icon"
                     size="small"
                     overflowCount={99}
                     // count={sidebarItem.notiCount || 0}
                  >
                     {comparePath(location.pathname, sidebarItem.routeLink)
                        ? sidebarItem.iconActive
                        : sidebarItem.icon}
                  </Badge>
                  {sidebarItem.label}
               </NavLink>
            </div>
         )
      )
   }

   const handleCollapseSideBar = () => {
      if (onCollapseClick) {
         onCollapseClick()
      }
   }
   const callBack=()=>{
      history.push(paths.root)
   }

   return (
      <div className={`sidebar__container ${isCollapsed ? 'sidebar--collapsed' : ''}`}>
         <div className="sidebar__nav">
            <button onClick={callBack}>Quay lại</button>
            <div className="sidebar__header">
               <div className="sidebar__header-icon" onClick={handleCollapseSideBar}>
                  {isCollapsed ? <IconMenuCollapse /> : <IconMenuExpand />}
               </div>
               <div className={`sidebar__header-logo ${isCollapsed ? 'd-none' : 'fade-in'}`}>
               <Popover
                  className='header-login__access-avatar'
                  style={{paddingLeft:10}}
                  content={
                     <div>
                        <button onClick={ async()=>{
                           const userLogout = await dispatch(logout())
                           unwrapResult(userLogout)
                           history.push(paths.root)
                        }} >Đăng Xuất</button>
                     </div>
                     
                  }
                  >
                     <div>
                        <Avatar
                           size={50}
                           src={infoUser.avatar||'https://joeschmoe.io/api/v1/random'}
                           shape="square"
                           style={{
                              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                           }}
                        />
                     </div>
                  </Popover>
               </div>
               
              
            </div>
            <div className="sidebar__menu">{renderSideBarItems()}</div>
         </div>
      </div>
   )
}

export default withRouter(SideBar)
