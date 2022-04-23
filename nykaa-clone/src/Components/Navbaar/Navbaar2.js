import {AppBar, styled, Toolbar} from "@mui/material";
import { Link, NavLink } from 'react-router-dom';








const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    boxSizing:"border-box",
    height:"30px"
  });





const Navbaar2 = () => {
  return (

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
           <Link to='/product'> <p>Men</p></Link>
            <p>Fragrance</p>
            <p>LUXE</p>
            <p><img width={"70px"} src="https://www.kindpng.com/picc/m/112-1127467_logo-brand-font-product-transparent-sale-clip-art.png" alt="" /></p>
         
        </StyledToolbar>
       </AppBar>
    
   );
}

export default Navbaar2;