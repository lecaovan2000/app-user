import StorageKeys from "../constants/storage-keys"

const createFormDataPayload = data => {
   const formData = new FormData()
   if (Object.keys(data).length > 0) {
      Object.keys(data).forEach(key => {
         if (data[key] !== null && data[key] !== undefined) {
            formData.append(key, data[key])
         }
      })
   }
   return formData
}


const createFormDataImg = data => {
   const formData = new FormData()
   
   if (Object.keys(data).length > 0) {
      
      Object.keys(data).forEach(key => {
         if (data[key] !== null && data[key] !== undefined) {
            formData.append(key, data[key])
         }
      })

      // const newData =  Object.keys(data).slice(0,Object.keys(data).length -1)
      // console.log('data[key]',newData)
      // const ojectImg =[]
      // console.log("ojectImg",ojectImg)
      // data['imgs'].forEach((img)=>{
      //    ojectImg.push(img)
      // })
      // const ojectItem =[]
      // console.log("ojectImg",ojectItem)
      // newData.forEach(key => {
      //    ojectItem.push(key)
         
      // })
   }
   console.log("ojectImg",formData)
   return formData
}
const removeBearerToken = () => {
   localStorage.removeItem(StorageKeys.ACCESS_TOKEN)
   localStorage.removeItem(StorageKeys.USER)
}

const removeCurrentUser = () => {
   localStorage.removeItem(StorageKeys.USER)
}
const formatPrice = (data)=>{
   return (data).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}
function getBase64(file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
   })
}
const checkEmptyObject = obj => {
   for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false
   }
   return true
}
const convertSorter = sorter => {
   const arr = []
   Object.entries(sorter).forEach(([k, v]) => {
      if (v === 'ASC') {
         arr.push(k)
      } else if (v === 'DESC') {
         arr.push(`-${k}`)
      }
   })
   return arr.join(',')
}

export const common = {
   createFormDataPayload,
   removeBearerToken,
   removeCurrentUser,
   formatPrice,
   getBase64,
   checkEmptyObject,
   convertSorter,
   createFormDataImg
}
