import React from "react";
import { createContext, useState } from "react";
import all_data from "../Components/Assets/all_data";
import { Navigate, useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < all_data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add To cart Function
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  //Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  //Get Total Amount
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_data.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * 2;
      }
      return totalAmount;
    }
  };

  // cart items counter
  const cartCounter = ()=>{
    let totalItem = 0
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem += cartItems[item]
      }
    }
    return totalItem;
  }

  // context value
  const contextValue = {
    cartCounter,
    getTotalAmount,
    all_data,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
