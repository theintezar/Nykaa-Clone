import Slider from '../../Components/Slider/Slider';
import dataSlider from './SliderData';
import AllProd from './AllProd';
import styled from '@emotion/styled';
import FilterSection from './FilterSection';
import Navbaar from '../../Components/Navbaar/Navbaar';
import Navbaar2 from '../../Components/Navbaar/Navbaar2';
import { Box } from '@mui/system';



const DIV = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: "#ffffff",
});

const DIV2 = styled(Box)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  backgroundColor: "#ffffff",
  marginLeft:"20px"
 
});

function MenProduct() {
  
  return (
<div>
    <Navbaar/>
    <Navbaar2/>
    <Slider data={dataSlider} num={2} />

  <Box sx={{display:{xs:"none", sm:"block"}}}>
    <DIV>
      <FilterSection/>
      <AllProd/>
    </DIV>
  </Box>

  <Box sx={{display:{xs:"block", sm:"none"}}}>
    <DIV2>
      <FilterSection/>
      <AllProd/>
    </DIV2>
  </Box>
     

</div>
  )
}

export default MenProduct




