import React from "react";

export const CarritoItem = ({ id, title, price}) => {
  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <p>Precio: ${price}</p>

    </div>
  );
};

