import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';


const StyleBox = styled(Box)({
    width:"100vw",
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    gap:"40px",
    backgroundImage:"url(https://www.teahub.io/photos/full/265-2650242_purple-flowers-white-background-white-background-with-purple.jpg)",
    backgroundSize:"100%",
    })

function Payment() {
    const data1 = useSelector((state) => state.cart);
  return (<>
      { data1.map ((d)=>(
        <StyleBox>{d.totalAmount}₹ is successful </StyleBox>
      ))}
      </>
  )
}

export default Payment