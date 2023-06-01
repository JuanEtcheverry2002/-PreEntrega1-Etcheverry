import { Item } from "../Item/Item";
import "./ItemList.css";
export const ItemList = ({listaProdu}) => {
  console.log(listaProdu)
  return (
    <div className="item-list">
      {listaProdu?.map((productos,i) => {
        console.log("prod 1", productos)
        return (
          <Item
            key={i}
            img={productos.img}
            stock={productos.stock}
            title={productos.title}
            description={productos.description}
            price={productos.price}
           
          />
        );
      })}
    </div>
  );
};




//Uso ItemList para desestructurar el objeto Item. Importado del componente Item.


