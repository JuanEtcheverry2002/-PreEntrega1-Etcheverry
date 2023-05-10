import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/7e0018f5-8745-4c03-9b7b-6c8e7c699bf6")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ItemList props={productos} />
    </div>
  );
};

export default ItemListContainer;
