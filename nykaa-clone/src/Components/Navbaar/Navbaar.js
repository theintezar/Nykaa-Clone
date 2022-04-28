import React from 'react';
import {AppBar, InputBase, styled, Toolbar, Typography, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StyledBadge from "@mui/material/Badge";
import { useSelector } from 'react-redux';
import {useState} from "react";
import {Link,NavLink} from "react-router-dom";
import VerifiedIcon from '@mui/icons-material/Verified';
import { useAuth } from '../../pages/Auth/firebase';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    boxSizing:"border-box",
    
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
  const data1 = useSelector((state)=> state.cart)
  const user = useAuth();
  
  //console.log(data1);
  
    return (
    <>
      <AppBar sx={{display:{xs:"none", sm:"block"}}} color="primary" position="fixed">
        <StyledToolbar>

          <StyledToolbar sx={{width:"50%"}}>

          <Typography variant="div">
              <NavLink to="/" style={{textDecoration:"none"}}><img width={"100px"} src="https://cdn.worldvectorlogo.com/logos/nykaa-1.svg" alt="" /></NavLink>
          </Typography>

          <Typography variant="span" sx={{display:{xs:"none", sm:"block"}}}>
          <StyledToolbar sx={{width:"120%", fontSize:"15px",}}>
             <p style={{padding:"3px", fontSize:"14px"}}><b> Categories</b></p>
             <p style={{padding:"3px", fontSize:"14px"}}><b> Brands</b></p>
             <p style={{padding:"3px", fontSize:"14px"}}><b>Nykaa Fashion</b> </p>
             <p style={{padding:"3px", fontSize:"14px"}}><b> Beauty Advice</b></p>
             <p style={{padding:"3px", fontSize:"14px"}}><b> Nykaa Network</b></p>
          </StyledToolbar>
          </Typography>
          </StyledToolbar>

          <Search ><SearchIcon/><InputBase placeholder='Search...'/></Search>
             

          <StyledToolbar sx={{width:"16%"}}>
          <NavLink style={{textDecoration:"none"}} to="/register"><Button sx={{color:"black", fontFamily:"san-serif"}} startIcon={user?<VerifiedIcon/>:<PersonIcon/>} variant="text">Account</Button></NavLink>
        
            <IconButton aria-label="cart">
             <Link to = "/product/cart"> <StyledBadge badgeContent={data1.length} color="neutral">
              <LocalMallIcon color='otherColor' />
              </StyledBadge>
              </Link>
            </IconButton>
          </StyledToolbar>
          
        </StyledToolbar>
        
      </AppBar>



      {/* Responsive navbaar */}

      <AppBar sx={{display:{xs:"block", sm:"none"}, maxWidth:"100%"}} color="primary" position="fixed">
        <StyledToolbar>

          <Typography variant="div" >
               <img width={"40px"}  src="https://image.winudf.com/v2/image1/Y29tLmZzbi5uZHNfaWNvbl8xNjQwMzAwMTQ1XzA0OQ/icon.png?w=&fakeurl=1" alt="" />
          </Typography>


          <StyledToolbar sx={{width:"55%"}}>
          <SearchIcon/>
          <Button sx={{color:"black", fontFamily:"san-serif"}} startIcon={<PersonIcon/>} variant="text">.</Button>

            <IconButton aria-label="cart">
             <Link to = "/product/cart"> <StyledBadge badgeContent={data1.length} color="neutral">
              <LocalMallIcon color='otherColor' />
              </StyledBadge>
              </Link>
            </IconButton>
          </StyledToolbar>
          
        </StyledToolbar>
        
      </AppBar>
    
    </>
   
            
        
    );
}

export default Navbaar;
