export function cartReducer(state, action){
    const listaProductos=[]
    switch (action.type) {
        case "AGREGAR":
            return( {AddProductCart : state.AddProductCart+1})
        case "RESTAR":
            return ({AddProductCart: state.AddProductCart -1})
        
        default:
            return state
    }
}