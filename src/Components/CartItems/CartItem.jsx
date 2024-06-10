import { ShopContext } from "../../Context/ShopContext";
import "./CarItem.css";
import React, { useContext } from "react";
import excluir_icon from "../Assets/remover-icon.png";

const CartItem = () => {
  const { all_data, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <p className="carrinho-titulo">Carrinho</p>
      <hr className="hr-no-style" />
      {all_data.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div key={e.id} className="cartitems-format cart-format-main">
                <img
                  src={e.img}
                  alt={e.name}
                  className="carticon-product-icone"
                />
                <p>{e.name}</p>

                <p>R${e.new_price * cartItems[e.id].toFixed(2)}</p>
                <p className="btn-cartitems-qnt">{cartItems[e.id]}x</p>
                <img
                  className="cart-item-excluir-icon"
                  src={excluir_icon}
                  alt="icone de Excluir"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr className="hr-no-style" />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItem;
