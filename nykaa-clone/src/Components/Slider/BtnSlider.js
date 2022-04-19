import React from "react";
import "./slider.css";


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? "https://raw.githubusercontent.com/Ziratsu/slider-react/a44cc92f02b0e4995cc661e04c32724fc946ac59/src/Components/Slider/icons/right-arrow.svg" : "https://raw.githubusercontent.com/Ziratsu/slider-react/a44cc92f02b0e4995cc661e04c32724fc946ac59/src/Components/Slider/icons/left-arrow.svg"} />
    </button>
  );
}