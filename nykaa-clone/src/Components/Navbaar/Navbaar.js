import React from 'react';
import {AppBar, InputBase, styled, Toolbar, Typography, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StyledBadge from "@mui/material/Badge";
import { useSelector } from 'react-redux';
import {useState} from "react"






const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    boxSizing:"border-box"
  });



const Search = styled("div")(({theme})=>({
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center",
  backgroundColor: "#f4f4f4",
  padding:"5px 10px",
  borderRadius: theme.shape.borderRadius,
  width:"20%"

}));

const Navbaar = () => {
  const data1 = useSelector((state)=> state.cart.data)
  const [data, setData] = useState([data1])
  //console.log(data1);
  
    return (
    <>
      <AppBar sx={{zIndex:"999"}} color="primary" position="fixed">
        <StyledToolbar>

          <Typography variant="h6" sx={{display:{xs:"block", sm:"none"}}}>
               <img width={"40px"} border-radius={"50%"} src="https://image.winudf.com/v2/image1/Y29tLmZzbi5uZHNfaWNvbl8xNjQwMzAwMTQ1XzA0OQ/icon.png?w=&fakeurl=1" alt="" />
          </Typography>

          <StyledToolbar sx={{width:"50%"}}>

          <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
              <img width={"100px"} src="https://cdn.worldvectorlogo.com/logos/nykaa-1.svg" alt="" />
          </Typography>

          <Typography variant="span" sx={{display:{xs:"none", sm:"block"}}}>
          <StyledToolbar sx={{width:"120%", fontSize:"15px",}}>
             <p><b> Categories</b></p>
             <p><b> Brands</b></p>
             <p><b>Nykaa Fashion</b> </p>
             <p><b> Beauty Advice</b></p>
             <p><b> Nykaa Network</b></p>
          </StyledToolbar>
          </Typography>
          </StyledToolbar>

          <Search ><SearchIcon/><InputBase placeholder='Search...'/></Search>
             

          <StyledToolbar sx={{width:"15%"}}>
          <Button sx={{color:"black", fontFamily:"san-serif"}} startIcon={<PersonIcon/>} variant="text">Account</Button>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={data.length} color="neutral">
              <LocalMallIcon color='otherColor' />
              </StyledBadge>
            </IconButton>
          </StyledToolbar>
          
        </StyledToolbar>
        
      </AppBar>
      <AppBar sx={{marginTop:"65px"}} color="primary">
        <StyledToolbar>
            <p>Makeup</p>
            <p>Skin</p>
            <p>Hair</p>
            <p>Appliances</p>
            <p>Personal Care</p>
            <p>Natural</p>
            <p>Mom & Baby</p>
            <p>Health & Wellness</p>
            <p>Men</p>
            <p>Fragrance</p>
            <p>LUXE</p>
            <p><img width={"70px"} src="https://www.kindpng.com/picc/m/112-1127467_logo-brand-font-product-transparent-sale-clip-art.png" alt="" /></p>
         
        </StyledToolbar>
      </AppBar>
    </>
   
            
        
    );
}

export default Navbaar;
