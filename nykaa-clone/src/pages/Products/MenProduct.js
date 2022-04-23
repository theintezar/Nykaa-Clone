import Slider from '../../Components/Slider/Slider';
import dataSlider from './SliderData';
import AllProd from './AllProd';
import styled from '@emotion/styled';
import FilterSection from './FilterSection';
import Navbaar from '../../Components/Navbaar/Navbaar';
import Navbaar2 from '../../Components/Navbaar/Navbaar2';



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
    <Navbaar/>
    <Navbaar2/>
    <Slider data={dataSlider} num={2} />

    <DIV>
      <FilterSection/>
      <AllProd/>
    </DIV>
     

</div>
  )
}

export default MenProduct




