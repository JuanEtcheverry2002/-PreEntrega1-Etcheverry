import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("https://mocki.io/v1/2dfca01a-cc4f-4e4e-b4a9-ee9f7f74f02c")
      .then((res) => res.json())
      .then((data) => setProducto(data));
  }, []);

  return (
    <div>
      {producto ? <ItemDetail product={producto} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
