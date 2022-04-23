
import Data from "./Components/Data/Data";
import Home from "./Components/HomePage/Home";
import Navbaar from "./Components/Navbaar/Navbaar";
import Navbaar2 from "./Components/Navbaar/Navbaar2";
import MenProduct from "./pages/Products/MenProduct";
import Cart from "./pages/Cart/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Authentication/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
// import Cart from "./pages/Cart/Cart";





function App() {
  return (
    <div>
  <Router>
      <Routes>
      
      <Route path="/" element={ <Home/>}/>
      <Route path="/product" element={ <MenProduct/>}/>
      <Route path="/product/:id" element={ <ProductDetails/>}/>
      <Route path="/product/cart" element={ <Cart/>}/>

      </Routes>


  </Router>
    
    </div>
  );
}

export default App;
