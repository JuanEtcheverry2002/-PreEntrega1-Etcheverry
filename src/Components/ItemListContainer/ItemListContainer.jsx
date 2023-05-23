import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://mocki.io/v1/2ee74ec5-e493-46cc-bc4b-fe0ffc6dfdde");
        console.log("response", response);

        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ItemList listaProdu={productos} />
    </div>
  );
};

export default ItemListContainer;
