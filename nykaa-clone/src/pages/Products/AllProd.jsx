import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/Posts/action';
import { useEffect , useState} from 'react';
import { Pagination } from '@mui/material';
import styled from '@emotion/styled';
import {Link} from "react-router-dom";
import { addToCart } from '../../Redux/Cart/action';
import { border, padding } from '@mui/system';
import { Box } from '@mui/material';




const DIV1= styled("div")({
  display:"flex",
  justifyContent:"center",
  width:"70%",
  alignItems:"center",
  flexDirection:"column",
  marginTop:"20px"

  
})

const DIV2 = styled("div")({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  backgroundColor: "#ffffff",
  flexWrap:"wrap",
  gap:"20px",
 
})

const DIV3 = styled("div")({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  width:"260px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  borderRadius:"5px",
  overflow:"hidden"
 
})
const DIV4 = styled("div")({
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  width:"100%",
  // "&:hover":{
  //   backgroundColor: "#fc2779",
  // }
  backgroundColor: "#fc2779",
})

const P = styled("p")({
  textAlign:'center',
  padding:"20px", 
  fontWeight:"700", 
  fontFamily:"serif"
})



function AllProd() {
    const [page, setPage] = useState(1);
    

    let url =  `https://nykaalone.herokuapp.com/menData?_page=${page}&_limit=9`;
    const dispatch = useDispatch()
       useEffect(() => {
           dispatch(getData(url))
        }, url);
  
        const data2 = useSelector((state)=> state.post.data)
        //console.log(data2)

        const handleChange = (event, value) => {
            setPage(value);
          };
        
          function addCart(data){
            dispatch(addToCart(data))
          }
      
       
        
  return (
    <DIV1>
      <DIV2>
        {data2.map((item)=>(
         
           <DIV3 className='hoverStyle'>
           <p style={{color:"red",padding:"20px", fontSize:"13px"}}> FEATURED : <span style={{color:"#85dda3"}}>{item.featured}</span></p>
           <Link to={`/product/${item.id}`}> <img width={"80%"} src={item.image} alt="No" key={item.id}/></Link>
            <P>{item.desc}</P>
            <P>MRP: ₹{item.mrp}</P>
            <P>
            <img width={"30%"} src="https://www.pngkit.com/png/detail/39-399026_4-1-2-stars-logo-4-stars.png" alt="" />
            <p>({item.review})</p> 
            </P>

            <DIV4>
               <div style={{width:"20%"}}><img src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik01Ni4zMywzMC45NmMtMjEuNTI2ODcsMCAtMzkuMTMsMTcuMzg4MTMgLTM5LjEzLDM4LjgwNzVjMCw0My45MjcxOSA0OS44Mzk2OSw2Ni45MzIxOSA2Ni42NSw4MC44NGwyLjE1LDEuODI3NWwyLjE1LC0xLjgyNzVjMTYuODEwMzEsLTEzLjkwNzgxIDY2LjY1LC0zNi45MTI4MSA2Ni42NSwtODAuODRjMCwtMjEuNDE5MzcgLTE3LjYwMzEyLC0zOC44MDc1IC0zOS4xMywtMzguODA3NWMtMTEuOTU5MzcsMCAtMjIuNDk0MzcsNS41NDk2OSAtMjkuNjcsMTMuOTc1Yy03LjE3NTYyLC04LjQyNTMxIC0xNy43MTA2MiwtMTMuOTc1IC0yOS42NywtMTMuOTc1ek01Ni4zMywzNy44NGMxMS4yMzM3NSwwIDIxLjAwMjgxLDUuNjg0MDYgMjYuNzY3NSwxNC4yOTc1bDIuOTAyNSw0LjNsMi45MDI1LC00LjNjNS43NjQ2OSwtOC42MTM0NCAxNS41MzM3NSwtMTQuMjk3NSAyNi43Njc1LC0xNC4yOTc1YzE3LjgzMTU2LDAgMzIuMjUsMTQuMjU3MTkgMzIuMjUsMzEuOTI3NWMwLDM3LjQ5MDYzIC00Mi4xODAzMSw1OC41MDY4OCAtNjEuOTIsNzMuOTZjLTE5LjczOTY5LC0xNS40NTMxMiAtNjEuOTIsLTM2LjQ2OTM3IC02MS45MiwtNzMuOTZjMCwtMTcuNjcwMzEgMTQuNDA1LC0zMS45Mjc1IDMyLjI1LC0zMS45Mjc1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'></img> </div>
               <div onClick={() => addCart(item)} style={{width:"80%", textAlign:"center", fontSize:"20px", fontWeight:"700", color:"white"}}>ADD TO BAG</div>
            </DIV4>  
           </DIV3>
           

           
            
        ))}
      </DIV2>
        <Box sx={{marginTop:"30px", display:"flex", alignItems:"center", justifyContent:"center", display:{xs:"none", sm:"block"}} }>
        <Pagination sx={{boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", padding:"20px"}} count={5} size="large" variant="outlined" color='newColor' page={page} onChange={handleChange} />
        </Box>

        <Box sx={{width:"93%", margin:"20px 0 0", display:"flex", alignItems:"center", justifyContent:"center", display:{xs:"block", sm:"none"}}}>
        <Pagination sx={{boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", padding:"10px"}} count={5} size="small" variant="outlined" color='newColor' page={page} onChange={handleChange} />
        </Box>
        
      
    </DIV1>
  )
}

export default AllProd