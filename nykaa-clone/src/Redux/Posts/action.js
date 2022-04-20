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

const getData = () => (dispatch)=>{
    dispatch(handleLoading())
    fetch("http://localhost:3002/menData")
    .then((res)=>res.json())
    .then((data)=>dispatch(storeData(data)))
    .catch((err)=>dispatch(handleError()))
}

export {storeData, handleError, handleLoading, getData}