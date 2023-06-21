import Button from "react-bootstrap/Button";
import "./ItemCount.css";
import { useCount } from "./Hook/useCount";

const ItemCount = ({ maxCount, onChangeCount, onClickAddCart, onClickUpdateCart }) => {
  const { count, decrement, increment } = useCount(1, 1, maxCount);

  const handlerClick = () => {
    increment();
    onChangeCount(count);
  };

  const handlerAddCart = () => {
    onClickAddCart(count);
  };

  return (
    <div className="item-count">
      <div className="item-count__container-button">
        <Button
          className="item-count__container-button__btn"
          variant="outline-dark"
          size="sm"
          onClick={handlerClick}
        >
          +
        </Button>
        <p className="item-count__container__text">{count}</p>
        <Button
          className="item-count__container-button__btn"
          variant="outline-dark"
          size="sm"
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </Button>
      </div>
      <div className="item-count__container-add-cart">
        <Button
          onClick={handlerAddCart}
          className="item-count__container-add-cart__btn"
          variant="outline-dark"
          size="sm"
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
