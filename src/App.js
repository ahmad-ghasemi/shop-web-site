import './App.css';
import {  Routes , Route } from 'react-router-dom';
import Home from './component/Home';
import Shop from './component/Shop.js';
import Login from './component/log/Login';
import About from './component/About';
import Navbar from './component/home/Navbar';
import SignUp from './component/log/SignUp';
import { Provider } from 'react-redux';
import Store from './component/redux/Store';
import CartDetail from './component/shop/CartDetail';
import CartShops from './component/shop/CartShops';
import CheckOut from './component/shop/CheckOut';
import Shiping from './component/shop/Shiping';

function App() {
  return (
    
     <Provider store={Store} >
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/shop/:id' element={<CartDetail/>}></Route>
        <Route path='/buy' element={<CartShops />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/shiping' element={<Shiping />}></Route>
      </Routes>
      
    </Provider>

  );
}

export default App;
