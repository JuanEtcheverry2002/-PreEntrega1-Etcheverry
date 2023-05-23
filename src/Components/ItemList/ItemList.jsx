import { Item } from "../Item/Item";
import "./ItemList.css";
export const ItemList = ({listaProdu}) => {
  console.log(listaProdu)
  return (
    <div className="item-list">
      {listaProdu?.zapatos?.map((producto,i) => {
        console.log("prod 1", producto)
        return (
          <Item
            key={i}
            img={producto.img}
            stock={producto.stock}
            title={producto.title}
            description={producto.description}
            price={producto.price}
           
          />
        );
      })}
    </div>
  );
};


//Uso ItemList para desestructurar el objeto Item. Importado del componente Item.


