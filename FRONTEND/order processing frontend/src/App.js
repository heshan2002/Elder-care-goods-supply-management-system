import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import mobilityItems_banner from './Component/Assets/banner_mobilityItems.jpg';
import mesurementMachines_banner from './Component/Assets/banner_mesurementMachines.jpg';
import dryFoods_banner from './Component/Assets/banner_dryFoods.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mobilityItems' element={<ShopCategory banner={mobilityItems_banner} category="Mobility Items"/>}/>
        <Route path='/mesurementMachines' element={<ShopCategory banner={mesurementMachines_banner} category="Mesurement Machines"/>}/>
        <Route path='/dryFoods' element={<ShopCategory banner={dryFoods_banner} category="Dry Food"/>}/>
          
        <Route path="/Products" element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>

        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
