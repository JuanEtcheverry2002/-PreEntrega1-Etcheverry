import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { AcercaDeNosotros } from './Components/AcercaDeNosotros/AcercaDeNosotros';

import {Carrito} from './Components/Carrito/Carrito'

import Contacto from './Components/Contacto/Contacto';







function App() {
  return (
  
  <BrowserRouter>
  <Navbar />
  
  <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer selected={true}/>} />
    <Route path="/category/1" element={<AcercaDeNosotros/>}/>
    <Route path="/category/2" element={<Contacto/>}/>
    <Route path='/cart' element={Carrito}></Route>

   
  </Routes>
  </BrowserRouter>
  );
  }
export default App; 

