import { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";


export const CartContext= createContext(null);

const stateGlobal= [{AddProductCart:0}] //Esto indica que el número inicial de productos en el carrito es 0. 

export const CartContextProvider= ({children})=>{
    const [state,dispatch]= useReducer(cartReducer,stateGlobal);


    function addProduct(AddProductCart){
        console.log('cartcontext', AddProductCart)
        dispatch({
            type:"AGREGAR",
            payload:{ AddProductCart },
        })
        console.log(addProduct)// aqui veo que me tira esto pero no lo del producto
        
    }

   return( <CartContext.Provider value={{AddProductCart:state.AddProductCart, addProduct}}> {children}
   </CartContext.Provider>
   
   )
}