import { Item } from "../Item/Item";
import "./ItemList.css";
export const ItemList = ({listaProdu}) => {
  return (
    <div className="item-list">
      {listaProdu.map((producto) => {
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


