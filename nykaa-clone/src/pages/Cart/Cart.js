import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
    const data1 = useSelector((state)=> state.cart)
    console.log("data 1 is :", data1.length);
  return (
    <div>
        {data1.map((item)=>(
            <div>
            <img src={item.image} alt="" />
            <p>MRP: {item.mrp}</p>
            </div>
            
        ))}
        <h1>hello</h1>
    </div>
  )
}

export default Cart