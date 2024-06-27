import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import all_data from "../Assets/all_data";
import "./ProductDisplay.css";
import Footer from "../../Components/Footer/Footer";
import carrinho from "../Assets/carrinho-de-compras.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(ShopContext);

  // Estado para o pop-up
  const [showPopup, setShowPopup] = useState(false);

  // Converta productId para um número
  const productIdNumber = parseInt(productId);

  // Encontre o produto correspondente com base no productIdNumber
  const product = all_data.find((product) => product.id === productIdNumber);

  // Função para mostrar o pop-up e reduzir a quantidade
  const handleAddToCart = (id) => {
    if (product.qnt > 0) {
      addToCart(id);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Ajustei para 2 segundos
    }
  };

  // useEffect para rolar a tela para o topo quando o componente é montado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-display">
      <Navbar />
      {product && (
        <div className="product-display-info">
          <div className="product-container">
            <div className="product-img-section">
              <img
                className="product-img-display"
                src={product.img}
                alt="Imagem do Produto"
              />
              {product.desconto > 0 && (
                <div className="desconto">{product.desconto}% OFF</div>
              )}
            </div>
            {/* Breadcrumb */}
            <nav className="breadcrumb">
              <span>Home</span> &gt; <span>Bolsas</span> &gt;{" "}
              <span>{product.name}</span>
            </nav>
            <div className="product-details-section">
              <h1 className="product-name">{product.name}</h1>
              <div className="product-prices">
                <div id="product-prices-text">
                  <span className="old-price">R${product.old_price}</span>
                  <span className="new-price">R${product.new_price}</span>
                  <span className="installments">
                    2x de R$
                    {(product.new_price / 2).toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
              <div className="stock-info">{product.qnt} em estoque</div>
              <button
                className={`buy-button ${
                  product.qnt <= 0 ? "out-of-stock" : "in-stock"
                }`}
                onClick={() => handleAddToCart(product.id)}
                disabled={product.qnt <= 0}
              >
                {product.qnt <= 0
                  ? "Produto Esgotado"
                  : "Adicionar ao Carrinho"}
                <img
                  className="cart-icon"
                  src={carrinho}
                  alt="imagem carrinho"
                />
              </button>
            </div>
          </div>

          <hr className="separator" />
          <p className="product-description">
            <strong>Descrição do Produto:</strong> {product.description}
          </p>
        </div>
      )}
      {showPopup && (
        <div className="popup">
          <p>Item adicionado ao carrinho!</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDisplay;
