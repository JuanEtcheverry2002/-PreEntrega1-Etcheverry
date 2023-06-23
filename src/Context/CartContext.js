import React, { createContext, useReducer } from "react";

export const CartContext = createContext({
  cart: [],
});

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const obQuantity = () => {
    let count = 0;
    state.cart.forEach((item) => (count += 1));
    return count;
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      dispatch({
        type: "ADD_ITEM",
        payload: { ...item, item },
      });
    } else {
      console.error("El producto ya fue agregado.");
    }
  };

  const removeItem = (itemId) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: itemId,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const isInCart = (itemId) => {
    return state.cart.some((item) => item.id === itemId);
  };

  const totalQuantity = () => {
    return state.cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        obQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
