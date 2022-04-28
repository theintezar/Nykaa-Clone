import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";
import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React from 'react';
import { InputBase } from '@mui/material';
import Bar from "./Bar";

const StyleBox = styled(Box)({
    width:"100vw",
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    gap:"40px",
    backgroundImage:"url(https://wallpaperaccess.com/full/1900851.png)",
    backgroundSize:"500%",
    

})
const Search = styled("div")(({theme})=>({
    backgroundColor: "#bdbdbd",
    padding:"5px 10px",
    borderRadius: theme.shape.borderRadius,
    minWidth:"250px"
  
  }));

function Signin() {

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  console.log(currentUser)
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  console.log(currentUser)

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(email, password);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
        setLoading(true);
        try {
          await logout();
        } catch {
          alert("Error!");
        }
        setLoading(false);
      }
  return (
    <>
   { !currentUser?<StyleBox>
      <Bar/>
      <p style={{fontFamily:"sarif", fontSize:"25px", color:"whitesmoke"}}>---Register---</p>
      <Search ><InputBase type="email" onChange={(event)=>{setEmail(event.target.value)}} placeholder='Email'/></Search>
      <Search ><InputBase type= "password" onChange={(event)=>{setPassword(event.target.value)}} placeholder='Password'/></Search>
      <Search ><InputBase type="password" placeholder='Confirm Password'/></Search>
      <Button disabled={ loading || currentUser } onClick={handleSignup} variant="contained" sx={{backgroundColor:"#2196f3"}}>Sign Up</Button>
      
      </StyleBox> : <h1>You are currently login: {currentUser.email}</h1> } 
      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
    </>
  )
}

export default Signin