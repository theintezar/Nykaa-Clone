import {AppBar, styled, Toolbar} from "@mui/material";
import { NavLink } from 'react-router-dom';
import { useState } from "react";



const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    boxSizing:"border-box",
    height:"30px",
    width:"100%",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  });


  const StyledToolbar2 = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    boxSizing:"border-box",
    height:"30px",
    width:"100%",
    "::-webkit-scrollbar" :{
      display: "none"
  }

  });

 const StyleAppbar = styled("AppBar")({
    width:"100%",
    overflow:"scroll"
 })





const Navbaar2 = () => {

  
  return (
    <>
          
      <AppBar sx={{marginTop:"65px",display:{xs:"none", sm:"block"}}} color="primary" >
        <StyledToolbar>
        <p style={{padding:"10px"}}>Makeup</p>
            <p style={{padding:"10px"}}>Skin</p>
            <p style={{padding:"10px"}}>Hair</p>
            <p style={{padding:"10px"}}>Appliances</p>
            <p style={{padding:"10px"}}>Personal</p>
            <p style={{padding:"10px"}}>Natural</p>
            <p style={{padding:"10px"}}>Mom</p>
            <p style={{padding:"10px"}}>Wellness</p>
            <NavLink style={({isActive})=>{
              return {textDecoration: isActive? "underline" : ''}}} to='/product'> <p style={{padding:"10px", color:"black"}}>Men</p></NavLink>
            <p style={{padding:"10px"}}>Fragrance</p>
            <p style={{padding:"10px"}}>LUXE</p>
            <p style={{padding:"10px"}}><img width={"70px"} src="https://www.kindpng.com/picc/m/112-1127467_logo-brand-font-product-transparent-sale-clip-art.png" alt="" /></p>
         
        </StyledToolbar>
       </AppBar>

       <StyleAppbar sx={{marginTop:"65px",display:{xs:"block", sm:"none"}}} color="primary" >
        <StyledToolbar2 >
            <p style={{padding:"10px"}}>Makeup</p>
            <p style={{padding:"10px"}}>Skin</p>
            <p style={{padding:"10px"}}>Hair</p>
            <p style={{padding:"10px"}}>Appliances</p>
            <p style={{padding:"10px"}}>Personal</p>
            <p style={{padding:"10px"}}>Natural</p>
            <p style={{padding:"10px"}}>Mom</p>
            <p style={{padding:"10px"}}>Wellness</p>
            <NavLink style={({isActive})=>{
              return {textDecoration: isActive? "underline" : ''}}} to='/product'> <p style={{padding:"10px", color:"black"}}>Men</p></NavLink>
            <p style={{padding:"10px"}}>Fragrance</p>
            <p style={{padding:"10px"}}>LUXE</p>
            <p style={{padding:"10px"}}><img width={"70px"} src="https://www.kindpng.com/picc/m/112-1127467_logo-brand-font-product-transparent-sale-clip-art.png" alt="" /></p>

            
         
        </StyledToolbar2>
       </StyleAppbar>

       
    </>
   );
}

 export default Navbaar2;

