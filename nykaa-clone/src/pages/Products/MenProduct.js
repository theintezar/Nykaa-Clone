import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/Posts/action';
import { useEffect , useState} from 'react';
import { Pagination } from '@mui/material';
function MenProduct() {
  
  const [page, setPage] = useState(1);
  
 let url =  `http://localhost:3002/menData?_page=${page}&_limit=5`;
  const dispatch = useDispatch()
     useEffect(() => {
         dispatch(getData(url))
      },url);
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

    <Pagination count={data2.length-1} variant="outlined" page={page} onChange={handleChange} />
    </div>
  )
}

export default MenProduct