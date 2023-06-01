import { CartContext } from "../../Context/CartContext";
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const {addProduct}= useContext(CartContext)//
  const { state } = useLocation();
  const { img, Description, stock, price, title, id } = state;

  const handlerCount = (count) => {
    addProduct(count);
  };

  const handlerAddOrder = (count) => {
    const item = {
      name: title,
      price: price,
      total: count * price,
      img: img,
    };

    createOrder(item).then((result) => {
      alert(`la orden que se ha generado ha sido: ${result}`);
      console.log(result);
    });
  };

  return (
    <div className="item-detail">
      <h1>{title}</h1>
      <div>
        <img src={img} width={300} height={300} />
      </div>
      <div>
        <p>Descripcion: {Description}</p>
      </div>
      <div>Precio: {price}</div>
      <ItemCount
        onChangeCount={(e) => handlerCount(e)}
        onClickAddCart={(e) => handlerAddOrder(e)}
        
        maxCount={stock}
        className={"item-detail__item-count"}
      />
    </div>
  );
};


//Tengo que mirar la Parte de si Eliminar Item o ItemCount ya que puede que item este de mas aca.


export default ItemDetail;


