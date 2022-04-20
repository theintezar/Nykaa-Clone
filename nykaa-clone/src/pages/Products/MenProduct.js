import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/Posts/action';
import { useEffect , useState} from 'react';
import { Pagination, Typography } from '@mui/material';
function MenProduct() {
     const [page, setPage] = useState(1);
     const dispatch = useDispatch()
     useEffect(() => {
         dispatch(getData())
      },[]);
      const data2 = useSelector((state)=> state.post.data)
      console.log(data2)
      
      const handleChange = (event, value) => {
        setPage(value);
      };
      console.log(page)

  return (
    <div>
   
    {data2.map((item)=>(
        <img src={item.image} alt="No" />
    ))}
    <Typography>Page: {page}</Typography>

    <Pagination count={Math.round(data2.length/9)} variant="outlined" page={page} onChange={handleChange} />
    </div>
  )
}

export default MenProduct