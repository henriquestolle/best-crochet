import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import all_data from "../Components/Assets/all_data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_data.length; index++) {
    cart[all_data[index].id] = 0; // Use the product id as the key
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Carrega os itens do carrinho quando o context é iniciado
  useEffect(() => {
    const savedCartItems = JSON.parse(Cookies.get("cartItems") || "{}");
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      ...savedCartItems,
    }));
  }, []);

  useEffect(() => {
    saveCartItemsToCookies(cartItems);
  }, [cartItems]);

  const saveCartItemsToCookies = (items) => {
    Cookies.set("cartItems", JSON.stringify(items), { expires: 7 });
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev, [itemId]: prev[itemId] + 1 };
      saveCartItemsToCookies(updatedItems);
      return updatedItems;
    });
    // Decrease the quantity in all_data
    const product = all_data.find((product) => product.id === itemId);
    if (product && product.qnt > 0) {
      product.qnt -= 1;
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 0) {
        const updatedItems = { ...prev, [itemId]: prev[itemId] - 1 };
        saveCartItemsToCookies(updatedItems);
        // Increase the quantity in all_data
        const product = all_data.find((product) => product.id === itemId);
        if (product) {
          product.qnt += 1;
        }
        return updatedItems;
      }
      return prev;
    });
  };

  // Preço Total
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_data.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_data,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
