import './cartwidget.css' 
import { useContext } from 'react'
import {CartContext} from "../../Context/CartContext"
import cartIcon from "../../Images/cartIcon.png"
import { Link } from 'react-router-dom'

const CartWidget=()=>{
    const {obQuantity}= useContext(CartContext)
 


    return (
        <Link to="/cart">
     <div className="Cart-widget">
     <img className='cart-widget-icon' src={cartIcon} alt="Descripción de la imagen" />
      <p className="cart-widget__total-shopping">{obQuantity()}</p>
  
      
     </div>
     </Link>
    )
}
export default CartWidget




