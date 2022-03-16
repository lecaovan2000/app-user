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
const removeBearerToken = () => {
   localStorage.removeItem(StorageKeys.ACCESS_TOKEN)
}

const removeCurrentUser = () => {
   localStorage.removeItem(StorageKeys.USER)
}


export const common = {
   createFormDataPayload,
   removeBearerToken,
   removeCurrentUser
}
