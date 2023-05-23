import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://mocki.io/v1/2ee74ec5-e493-46cc-bc4b-fe0ffc6dfdde");
        console.log("response", response);

        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.log("Error al obtener el detalle de los productos", error);
      }
    };

    fetchProductos();
  }, []);


    
 
  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando producto...</p>}
    </div>
    
  );
};

export default ItemDetailContainer;
