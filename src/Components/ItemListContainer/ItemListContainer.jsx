import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import{query,collection,getDocs}from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading,setLoading]= useState(true)
  
  const categoryId= useParams()

  useEffect((categoryId) => {
    setLoading(true)
    const collectionRef= categoryId
    ?query(collection(db,'items'))
    
    :collection(db,'items')

    getDocs(collectionRef) 
      .then(response=>{
        const productosAd= response.docs.map(doc=>{
          const data= doc.data()
          return{id: doc.id,...data}  
        })
        setProductos(productosAd) 
  })
  .catch(error=>{
    console.log(error)
  })
  .finally(()=>{
    setLoading(false)
  })

},[categoryId])


  return (
    
    <div>
      <h1>Lista de Productos</h1>
      <ItemList listaProdu={productos} />
      
    </div>
  );
};

export default ItemListContainer;






/*
const getListItem = () => {
    getCollection("items").then((result) => {
      console.log(result);
      setProductos(result);


        useEffect(() => {
    getListItem();
  }, []);

   return product.length > 0 ? (
    <ItemList listaProdu={productos} />
   }
*/


// con esto vamos adaptar la respuesta que recibimos desde firestore a nuestra applicacion. Por ejemplo id.
//una vez que la adptamos la guardamos en nuestro estado.