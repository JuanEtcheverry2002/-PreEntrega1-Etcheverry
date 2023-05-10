import { Item } from "../Item/Item";
import "./ItemList.css";
export const ItemList = ({props}) => {
  return (
    <div className="item-list">
      {props.map((producto) => {
        return (
          <Item
            key={producto.img}
            img={producto.img}
            stock={producto.stock}
            description={producto.description}
            price={producto.price}
            title={producto.title}
          />
        );
      })}
    </div>
  );
};

//Uso ItemList para desestructurar el objeto Item. Importado del componente Item.


