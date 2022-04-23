import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from "react";
import { getData } from '../../Redux/Posts/action';
import styled from '@emotion/styled';
import { addToCart } from '../../Redux/Cart/action';

const DIV3 = styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    flexBasis:"31%",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius:"5px",
    overflow:"hidden",
    width:"30%",
    
     margin:"150px auto"
   
  })
  const DIV4 = styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
    "&:hover":{
      backgroundColor: "#fc2779",
    }
   
  })

function ProductDetails() {
    const { id } = useParams();

    let url =  `http://localhost:3002/menData/${id}`;
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
   <div>
       
        <DIV3 className='hoverStyle'>
           <p style={{color:"red",textAlign:"justify",padding:"20px", fontSize:"14px"}}> FEATURED : <span style={{color:"#85dda3"}}>{data.featured}</span></p>
           <img width={"80%"} src={data.image} alt="No" key={data.id}/>
            <p style={{ textAlign:'center',padding:"20px", fontWeight:"700", fontFamily:"serif"}}>{data.desc}</p>
            <p style={{ textAlign:'center',padding:"10px", fontWeight:"700", fontFamily:"serif",display:"flex"}}>MRP: {data.mrp}</p>
            <p style={{ textAlign:'center',padding:"10px", fontWeight:"700", fontFamily:"serif"}}>
            <img width={"30%"} src="https://www.pngkit.com/png/detail/39-399026_4-1-2-stars-logo-4-stars.png" alt="" />
            <p>({data.review})</p> 
            </p>

            <DIV4>
               <div style={{width:"20%"}}><img src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik01Ni4zMywzMC45NmMtMjEuNTI2ODcsMCAtMzkuMTMsMTcuMzg4MTMgLTM5LjEzLDM4LjgwNzVjMCw0My45MjcxOSA0OS44Mzk2OSw2Ni45MzIxOSA2Ni42NSw4MC44NGwyLjE1LDEuODI3NWwyLjE1LC0xLjgyNzVjMTYuODEwMzEsLTEzLjkwNzgxIDY2LjY1LC0zNi45MTI4MSA2Ni42NSwtODAuODRjMCwtMjEuNDE5MzcgLTE3LjYwMzEyLC0zOC44MDc1IC0zOS4xMywtMzguODA3NWMtMTEuOTU5MzcsMCAtMjIuNDk0MzcsNS41NDk2OSAtMjkuNjcsMTMuOTc1Yy03LjE3NTYyLC04LjQyNTMxIC0xNy43MTA2MiwtMTMuOTc1IC0yOS42NywtMTMuOTc1ek01Ni4zMywzNy44NGMxMS4yMzM3NSwwIDIxLjAwMjgxLDUuNjg0MDYgMjYuNzY3NSwxNC4yOTc1bDIuOTAyNSw0LjNsMi45MDI1LC00LjNjNS43NjQ2OSwtOC42MTM0NCAxNS41MzM3NSwtMTQuMjk3NSAyNi43Njc1LC0xNC4yOTc1YzE3LjgzMTU2LDAgMzIuMjUsMTQuMjU3MTkgMzIuMjUsMzEuOTI3NWMwLDM3LjQ5MDYzIC00Mi4xODAzMSw1OC41MDY4OCAtNjEuOTIsNzMuOTZjLTE5LjczOTY5LC0xNS40NTMxMiAtNjEuOTIsLTM2LjQ2OTM3IC02MS45MiwtNzMuOTZjMCwtMTcuNjcwMzEgMTQuNDA1LC0zMS45Mjc1IDMyLjI1LC0zMS45Mjc1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'></img> </div>
               <div onClick={() => addCart(data)} style={{width:"80%", textAlign:"center", fontSize:"20px", fontWeight:"700", color:"white"}}>ADD TO BAG</div>
            </DIV4>  
           </DIV3>
       
   </div>
  )
}

export default ProductDetails