import { Item } from "../Item/Item"

const ItemDetail = ({ producto }) => {
  return (
    <div className="Item-detail">
      {producto?.zapatos?.map((producto, i) => {
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

export default ItemDetail;


