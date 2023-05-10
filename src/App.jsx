import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
      


      
  </Routes>

        
  </BrowserRouter>
  );
 
}
export default App; 
/*<Route path="/category/:categoryId" element={<ItemListContainer />} />       
      <Route>       </Route>*/