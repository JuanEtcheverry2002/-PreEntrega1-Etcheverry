import './cartwidget.css' 
import { useContext } from 'react'
import {CartContext} from "../../Context/CartContext"

const CartWidget=()=>{
    const {AddProductCart}= useContext(CartContext)
 


    return (
        
     <div className="Cart-widget">
      <i className="bi bi-cart3"></i>
      <p className="cart-widget__total-shopping">{ AddProductCart }</p>
      
     </div>
        
    )
}
export default CartWidget




