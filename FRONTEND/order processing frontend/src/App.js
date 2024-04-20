import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import mobilityItems_banner from './Component/Assets/banner_mobilityItems.png';
import mesurementMachines_banner from './Component/Assets/banner_mesurementMachines.png';
import dryFoods_banner from './Component/Assets/banner_dryFoods.png';



function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mobilityItems' element={<ShopCategory banner={mobilityItems_banner} category="Mobility items"/>}/>
        <Route path='/mesurementMachines' element={<ShopCategory banner={mesurementMachines_banner} category="Measurement Machines"/>}/>
        <Route path='/dryFoods' element={<ShopCategory banner={dryFoods_banner} category="Dry food"/>}/>
          
        <Route path="/Products" element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>

        <Route path='/Cart' element={<Cart/>}/>
        <Route path="/login" component={<LoginSignup/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
