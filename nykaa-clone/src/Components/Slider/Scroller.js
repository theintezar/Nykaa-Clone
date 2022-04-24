import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/Posts/action';
import { useEffect } from 'react';

const DIV = styled("div")({
    marginTop:"50px",
    padding:"20px"
       

})

const DIV1 = styled("div")({
    width: "100%",
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    gap:"20px"
})

const IMG = styled("img")({
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    border:"2px solid grey",
    padding:"10px",
    marginTop:"50px"
})


export default function Scroller() {
    let url =  'https://nykaalone.herokuapp.com/menData?featured=BESTSELLER';
    const dispatch = useDispatch()
       useEffect(() => {
           dispatch(getData(url))
        }, url);
  
        const data2 = useSelector((state)=> state.post.data)
        console.log("data:=>", data2);
  return (
    <DIV >
    <h2 style={{textAlign:"center", }}>BESTSELLER</h2>
     <DIV1>
      {data2.map((item) => (
       <>
          <IMG
            width={"100%"}
            src={item.image}
            loading="lazy"
            key={item.id}
          />
       </>
      
      ))}
      </DIV1>
    </DIV>
  );
}

const itemData = [
  {
    img: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/6/d6eba80nyloprof00001_0.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/3/e3ea6e64987176029799.jpg',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];