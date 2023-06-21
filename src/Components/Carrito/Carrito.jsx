import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './Carrito.css'

const Carrito = () => {
  const { cart, clearCart, obQuantity, removeItem, totalQuantity } = useContext(CartContext);

  if (obQuantity() === 0) {
    return (
      <div>
        <h1>No hay más items en el Carrito</h1>
        <Link to="/" className="Option">Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(p => (
        <div key={p.id}>
          <CarritoItem {...p} />
          <button onClick={() => removeItem(p.id)} className="Button">X</button>
        </div>
      ))}
      
      <h3>Total: {total()}</h3>

      <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
      <Link to="/checkout" className="'Option">Checkout</Link>
    </div>
  );
};

export default Carrito;
