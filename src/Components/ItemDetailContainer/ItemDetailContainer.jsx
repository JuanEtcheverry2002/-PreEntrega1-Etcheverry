import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc,doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading,setLoading]= useState(true)

  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
      const docRef=doc(db,'items',id)
      getDoc(docRef)
        .then(response=>{
          const data= response.data()
          const productosAd= {id:response.id,...data}
          setProducto(productosAd)

        })
    .catch(error=>{
      console.log(error)
    })
    .finally(()=>{
      setLoading(false)
    })
  
  },[id])

 
  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando producto...</p>}
    </div>
    
  );
};

export default ItemDetailContainer;
