import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { createOrder, updateOrder } from "../../services/firebase/firebaseConfig";

const ItemDetail = ({}) => {
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
      <h4>Te presentamos el nuevo modelo de: {title}
      </h4>
      <h5> Si la imagen no se carga puedes buscar el nombre en internet y te aparecera el modelo que vendemos</h5>
      <div>
        <img src={img} width={300} height={300} alt={"Zapatos ultra model 2022"} />
      </div>
      <div>
      <p>Descripción:<strong>{description}</strong></p>
      </div>
      <div>Precio: <strong>{price}</strong></div>




      
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









