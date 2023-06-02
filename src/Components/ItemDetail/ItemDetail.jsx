import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { createOrder, updateOrder } from "../../services/firebase/firebaseConfig";

const ItemDetail = ({ producto }) => {
  const { addProduct } = useContext(CartContext);
  const { state } = useLocation();
  const { img, description, stock, price, title, id } = state;

  const handlerCount = (count) => {
    addProduct(count);
  };

  const handlerAddOrder = (count) => {
    const item = {
      title: title,
      price: price,
      total: count * price,
      img: img,
    };

    createOrder(item)
      .then((result) => {
        alert(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerUpdateOrder = (count) => {
    updateOrder(id, count);
  };

  return (
    <div className="item-detail">
      <h1>{title}</h1>
      <div>
        <img src={img} width={300} height={300} alt={title} />
      </div>
      <div>
        <p>Descripción: {description}</p>
      </div>
      <div>Precio: {price}</div>
      <ItemCount
        onChangeCount={(event) => handlerCount(event)}
        onClickAddCart={(event) => handlerAddOrder(event)}
        onClickUpdateCart={(event) => handlerUpdateOrder(event)}
        maxCount={stock}
        className={"item-detail__item-count"}
      />
    </div>
  );
};
export default ItemDetail;









/*
createOrder(item).then((resultadoPro) => { // aqui podemos ver que con el then, utilizamos la estructura de promesa que se ejecuta cuando la funcion create order se ejecuta correctamente, el resutlado de la promesa se almacena en el parametro resultadoPro
  alert(`la orden que se ha generado ha sido: ${resultadoPro}`);
  console.log(resultadoPro);
});
};*/