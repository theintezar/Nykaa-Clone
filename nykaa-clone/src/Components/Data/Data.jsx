import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeData } from '../../Redux/Comments/action';
import { handleLoading} from '../../Redux/Posts/action';
import { handleError } from '../../Redux/Posts/action';

const Data = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(handleLoading())
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>dispatch(storeData(data)))
        .catch((err)=>dispatch(handleError()))
    },[])

    const data1 = useSelector((state)=> state.comment.data) //data access from action 
    const loading = useSelector((state)=> state.post.isLoading)
    console.log(data1);

    if(loading){
      return <h1>loding....</h1>
    }

  
  return (
    <div>Here Goes the Data</div>
  )
}

export default Data