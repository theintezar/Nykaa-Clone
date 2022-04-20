import { STORE_DATA, IS_LOADING, IS_ERROR } from "./actionTypes"

const storeData = (payload)=>({
    type: STORE_DATA,
    payload: payload
})

const handleLoading = ()=>({
    type: IS_LOADING,
  
})

const handleError = ()=>({
    type: IS_ERROR,
    
})

export {storeData, handleError, handleLoading}