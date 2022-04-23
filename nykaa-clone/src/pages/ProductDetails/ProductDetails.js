import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from "react";
import { getData } from '../../Redux/Posts/action';
import styled from '@emotion/styled';
import { addToCart } from '../../Redux/Cart/action';
import Navbaar from "../../Components/Navbaar/Navbaar";
import Navbaar2 from "../../Components/Navbaar/Navbaar2"

const DIV1 = styled("div")({
  display:"flex",
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  width:"85%",
  margin:"150px auto",
  gap:"1px"
 })

const DIV3 = styled("div")({
    // display:"flex",
    // alignItems:"center",
    // justifyContent:"center",
    // flexDirection:"column",
    width:"39.5%",
    borderRight:"2px solid grey",
    padding:"30px",
   
  })
  const DIV4 = styled("div")({
       padding:"30px",
       width:"59.5%",
   
  })

  const DIV = styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"65%",
    
  })

function ProductDetails() {
    const { id } = useParams();

    let url =  `https://nykaalone.herokuapp.com/menData/${id}`;
    const dispatch = useDispatch()
       useEffect(() => {
           dispatch(getData(url))
        },url);
        const data = useSelector((state)=> state.post.data)
        

        function addCart(data){
            dispatch(addToCart(data))
        }
        const data1 = useSelector((state)=> state.cart.data)
        //console.log(data1)
  return (
    <>
    <Navbaar/>
    <Navbaar2/>
   <DIV1>
       
        <DIV3 className='hoverStyle'>
           <p style={{color:"red",textAlign:"justify",padding:"20px", fontSize:"14px"}}> FEATURED : <span style={{color:"#85dda3"}}>{data.featured}</span></p>
           <img width={"90%"} src={data.image} alt="No" key={data.id}/>
        </DIV3>
        <DIV4>
            <p style={{ fontWeight:"500", fontFamily:"serif", fontSize:"30px"}}>{data.desc}</p>
            <p>(100ml)</p>
             <br />
          <DIV>
             <img width={"18%"} src="https://www.pngkit.com/png/detail/39-399026_4-1-2-stars-logo-4-stars.png" alt="" />
             <p>4/5</p>
             <p>{data.review} ratings & 84 reviews</p> 
             <p>64 Q&As</p>
          </DIV>
          <br />

            <p style={{ fontWeight:"500", fontFamily:"serif",color:"grey"}}>
            MRP: <strike style={{color:"grey"}}>₹3000</strike> 
            <span style={{fontSize:"20px",color:"black"}}> ₹{data.mrp} </span>
            <span style={{color:"#85dda3"}}>{data.off} Off</span> 
            </p>
           <br />
           <p style={{width:"90%", backgroundColor:"#eceef0", padding:"10px", marginTop:"30px"}}>Shop worth INR 1200 and above and get a free Nykaa Cosmetics Nail Paint. Terms & conditions apply. Offer valid until stock lasts.</p> 
           
           <br />

           <div onClick={() => addCart(data)} style={{width:"40%", textAlign:"center", fontSize:"20px", fontWeight:"700", color:"white", backgroundColor:"#fc2779", padding:"20px", margin:"auto", marginTop:"30px"}}>ADD TO BAG</div>

           <div style={{display:"flex", width:"100%",height:"60px", justifyContent:"space-between", alignItems:"center", backgroundColor:"#eceef0", marginTop:"50px"}}>
             <div>100% Genuine Products</div>
             <div>Easy Return Policy</div>
             <div>Sold by :NYKAA E RETAIL P...</div>
           </div>
        </DIV4>  
           
       
   </DIV1>
   </>
  )
}

export default ProductDetails