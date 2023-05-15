import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter,Routes,Route,Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Router>
      <div>
        <Navbar />
     
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            
          </Route>
     
      </div>
    </Router>
      


      
  </Routes>

        
  </BrowserRouter>
  );
 
}
export default App; 

