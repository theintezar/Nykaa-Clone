import React from 'react'
import MiddleContent from '../HomeMiddle/MiddleContent'
import Slider from '../Slider/Slider'
import dataSlider from '../Slider/dataSlider'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState(dataSlider);
  return (
    <>
       
        <Slider data={data} num={7}/>
        <MiddleContent/>
       
       
    </>
  )
}
