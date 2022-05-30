import StorageKeys from '../constants/storage-keys'
import { common } from './common';
import { paths } from '../constants/paths';

const getAccessToken = () => {
   return localStorage.getItem(StorageKeys.ACCESS_TOKEN);
}
const getAccessUser = () => {
   return localStorage.getItem(StorageKeys.USER);
}

const setAccessToken = (token) => {
   return localStorage.setItem(StorageKeys.ACCESS_TOKEN, token);
}

const setDeviceToken = (token) => {
   return localStorage.setItem(StorageKeys.DEVICE_TOKEN, token);
}
const checkExpiredToken = async  (responseData) => {
   if (responseData.error_code === 400 && responseData.message === "Vui lòng đăng nhập, hoặc token đã hết hạn !") {
      common.removeBearerToken()
      await (window.location.hash = paths.root);
   }
}
const checkAccessToken =async (responseData)=>{
   if (responseData.error_code === 400 && responseData.message === "Vui lòng đăng nhập, hoặc token đã hết hạn !") {
      common.removeBearerToken()
      window.location.hash = paths.root;
   }
}

export const utilsToken = {
   getAccessToken,
   setAccessToken,
   setDeviceToken,
   checkExpiredToken,
   getAccessUser,
   checkAccessToken
}