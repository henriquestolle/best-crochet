import { ShopContext } from "../../Context/ShopContext";
import "./CarItem.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import excluir_icon from "../Assets/remover-icon.png";

const CartItem = () => {
  const { all_data, cartItems, removeFromCart } = useContext(ShopContext);
  const hasItemsInCart = all_data.some((e) => cartItems[e.id] > 0);

  const calculateTotal = () => {
    return all_data
      .reduce((acc, item) => {
        return acc + item.new_price * (cartItems[item.id] || 0);
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Carrinho de Compras</h1>
      </div>
      <div className="cart-content">
        {!hasItemsInCart ? (
          <div className="empty-cart-message">
            <p>Não existem itens no carrinho.</p>
            <Link to="/product" className="go-shopping-link">
              Ir às compras
            </Link>
          </div>
        ) : (
          <div>
            <div className="cart-summary">
              <div className="cart-summary-item">
                <span>Total de Produtos:</span>
                <span>R${calculateTotal()}</span>
              </div>
              <div className="cart-summary-item">
                <span>Frete:</span>
                <span>Grátis</span>
              </div>
              <div className="cart-summary-total">
                <span>Preço Total:</span>
                <span>R${calculateTotal()}</span>
              </div>
            </div>
            <div className="cart-items-section">
              {all_data.map((e) => {
                if (cartItems[e.id] > 0) {
                  return (
                    <div key={e.id} className="cart-item">
                      <img src={e.img} alt={e.name} className="cart-icon" />
                      <div className="cart-item-details">
                        <p className="cart-item-name">{e.name}</p>
                        <p className="cart-item-attributes">Cor: {e.color}</p>
                        <p className="cart-item-attributes">
                          Tamanho: {e.size}
                        </p>
                        <div className="cart-item-quantity">
                          <label htmlFor={`quantity-${e.id}`}>
                            Quantidade:
                          </label>
                          <span> {cartItems[e.id]}</span>
                        </div>
                        <p className="cart-item-total">
                          Preço Total: R$
                          {(e.new_price * cartItems[e.id]).toFixed(2)}
                        </p>
                      </div>
                      <img
                        className="cart-item-remove-icon"
                        src={excluir_icon}
                        alt="Remover item"
                        onClick={() => removeFromCart(e.id)}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="cart-actions">
              <button className="cart-apply-voucher">Aplicar Voucher</button>
              <Link to="/checkout" className="cart-checkout-button">
                Continuar para o Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
