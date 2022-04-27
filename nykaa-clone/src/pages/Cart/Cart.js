import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, delCart } from "../../Redux/Cart/action";
import Navbaar from "../../Components/Navbaar/Navbaar"
import Navbaar2 from "../../Components/Navbaar/Navbaar2"
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const DIV1 = styled("div")({
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  width:"90%",
  margin:"10px auto",
  padding:"20px",
  backgroundColor:"skyblue",
 })

  const DIV2 = styled("div")({
      display:"flex",
      alignItems:"center",
      flexWrap:"wrap",
      gap:"4px",
      justifyContent:"space-between",
      width:"20%"
   
  })

  const DIV3 = styled("div")({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between",
 
})

  const Pstyle = styled("p")({
   fontFamily:"inherit",
   fontSize:"15px",
   marginTop:"5px"
   })

   const newP = styled("p")({
    fontFamily:"inherit",
    fontSize:"15px",
    marginTop:"5px"

    })




const Cart = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(null);

  const data1 = useSelector((state) => state.cart);

  const delProd = (product) => {
    dispatch(delCart(product));
  };

  const incProd = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const tAmount = data1.reduce((a, c) => {
      return a + Number(c.totalAmount);
    }, 0);
    setAmount(tAmount);
  }, [data1]);

  return (
    <>
    <Navbaar/>
    <Navbaar2/>
    <Box sx={{display:{xs:"none", sm:"block"}}}><h1 style={{marginTop:"135px", textAlign:"center",fontFamily:"sarif"}}>CART: {data1.length}</h1></Box>
      <Box sx={{display:{xs:"block", sm:"none"}}}><h1 style={{marginTop:"40px", textAlign:"center",fontFamily:"sarif"}}>CART: {data1.length}</h1></Box>
      <div>
        {data1.map((d) => {
          return (
            <DIV1>

            <Box sx={{display:{xs:"none", sm:"block"}}}> <img width={"50%"} src={d.image} alt={d.desc} /></Box>
            <Box sx={{display:{xs:"block", sm:"none"}}}> <img width={"55%"} src={d.image} alt={d.desc} /></Box>
              
               
              
              <div>
                <Pstyle>{d.title}</Pstyle>
                <Pstyle><b>Quantity:</b>  {d.quantity}</Pstyle>
                <Pstyle><b>MRP:</b> {d.mrp}₹</Pstyle>
                <Pstyle><b>Total Amount:</b> {d.totalAmount}₹</Pstyle>
              </div>

              <DIV2>
                <Button color="secondary" className="minus_btn" variant="contained" onClick={() => delProd(d)}> - </Button>
                <Button color="secondary" variant="contained" onClick={() => incProd(d)}>+</Button>
              </DIV2>
                
              
            </DIV1>
          );
        })}
      
        <DIV3>
        <h1 style={{marginTop:"100px", textAlign:"center",fontFamily:"sarif"}}>Payment Details</h1>
          <newP >TOTAL: {amount}₹</newP>
        {data1.length>0?<Button size="large" color="secondary" variant="contained">Check Out</Button>:<newP className="net">Cart is Empty</newP>}
        </DIV3>

     
      </div>
    </>
  );
};

export default Cart;

