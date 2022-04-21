import React, { useEffect,useState } from 'react';
import {UserOutlined,UnorderedListOutlined} from '@ant-design/icons';
import { Link, NavLink, useHistory } from 'react-router-dom'
import { utilsToken } from '../../utils/token';
import { Popover,Menu, Dropdown } from 'antd';
import { logout } from '../auth/userSlice';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import {paths} from '../../constants/paths'
import userApi from '../../api/userApi';
import { width } from '@mui/system';
import { boolean } from 'yup';


function Header(){
   const Token = utilsToken.getAccessToken()
   const InfoUser = utilsToken.getAccessUser()
   const [profileUser, setProfileUser]=useState({})
   const NewInfoUser = JSON.parse(InfoUser)
   const dispatch = useDispatch()
   const history = useHistory()
   const [visible, SetVisible]=useState()
   const getProfile=async()=>{
      await history.push(paths.profileUser)
   }
   const getProfileUser = async()=>{
      try {
         const response = await userApi.getProfileUserName(NewInfoUser.uid)
         setProfileUser(response.data)
      } catch (error) {
         console.log(error)
      }
   }
   
   useEffect(()=>{
      getProfileUser()
   })
   const menu = (
      <Menu style={{display:'inline-grid', width:250, backgroundColor:'transparent'}} >
        <NavLink className='menu-response'  to='/login'>Trang chủ</NavLink>
        <NavLink className='menu-response'  to='/login'>Rao tin</NavLink>
        <NavLink className='menu-response'  to='/login'>Tin tức</NavLink>
        <NavLink className='menu-response'  to='/login'>Giới thiệu</NavLink>
        <NavLink className='menu-response'  to='/login'>Liên hệ</NavLink>
      </Menu>
    );
   return(
      <div className='header'>
         <div className='header-left'>
         <div className='header-left-menu-sx'>
               <Dropdown 
                  overlay={menu} trigger={['click']}>
                  <button  onClick={e => e.preventDefault()}>
                     <UnorderedListOutlined />
                  </button>
               </Dropdown>
         </div>
               <div><NavLink to='/' className='header-left-logo'>logo</NavLink></div>  
         </div>
         
         <div className='header-menu'>
            <ul className='header-menu-item'>
               <NavLink to ={paths.root} className='header-menu-item-btn'>Trang chủ</NavLink>
               <NavLink to = 'collections' className='header-menu-item-btn'>Rao tin</NavLink>
               <NavLink to = 'news' className='header-menu-item-btn'>Tin tức</NavLink>
               <NavLink to = 'introduce' className='header-menu-item-btn'>Giới thiệu</NavLink>
               <NavLink to = 'contact' className='header-menu-item-btn'>Liên hệ</NavLink>
            </ul>
         </div>
         <div className='header-login'>
            {Token ? 
            (<div className='header-login__access'>
               <div>
                  <Popover
                  className='header-login__access-avatar'
                  style={{paddingLeft:10}}
                  content={
                     <div>
                        <button  onClick={getProfile}>Tài Khoản</button>
                        <button onClick={ async()=>{
                           const userLogout = await dispatch(logout())
                           unwrapResult(userLogout)
                           history.go(0)
                        }} >Đăng Xuất</button>
                     </div>
                     
                  }
                  >
                     <div>
                        <Avatar
                           size={{xxl:50,xl:50,md:40,sm:30}}
                           src={profileUser.avatar||'https://joeschmoe.io/api/v1/random'}
                           style={{
                              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                              cursor: 'pointer'
                           }}
                        />
                     </div>
                  </Popover>
               </div>
               
               </div>)
            : 
            (<NavLink to='login'>
               <UserOutlined style={{ color:'white'}} className='header-login-icon' />
                <span className='header-login-text'>Đăng nhập</span>
            </NavLink>) }
         </div>
      </div>
   )
}
export default Header;