import Slider from '../../Components/Slider/Slider';
import dataSlider from './SliderData';
import AllProd from './AllProd';
import styled from '@emotion/styled';
import FilterSection from './FilterSection';



const DIV = styled("div")({
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: "#ffffff",
    margin:"auto",
    marginTop:"50px",
  });

function MenProduct() {
  
  return (
<div>
    <Slider data={dataSlider} num={2} />

    <DIV>
      <FilterSection/>
      <AllProd/>
    </DIV>
     

</div>
  )
}

export default MenProduct




