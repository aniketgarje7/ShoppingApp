import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavbarComponent from "./Component/NavbarComponent";
import Home from './Component/Home/Home'
import CartComponent from './Component/CartComponent/CartComponent';




function App() {
  return (
   <BrowserRouter>
      <NavbarComponent />
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/ShoppingApp' element={<Home/>}/>
      <Route  path='/home' element={<Home/>}/>
      <Route path='/cart' element={<CartComponent/>}/>
      </Routes>
   </BrowserRouter>
   
  
  );
}

export default App;
