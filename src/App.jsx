import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';

import Navbar from './Components/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';






function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer selected={true}/>} />
   
  </Routes>
  </BrowserRouter>
  );
  }
export default App; 

