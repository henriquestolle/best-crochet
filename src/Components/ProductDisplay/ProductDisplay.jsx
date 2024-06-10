import React, { useContext, useState } from "react";
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
      }, 3000); // Ajustei para 3 segundos
    }
  };

  return (
    <div className="product-display">
      <Navbar />
      {product && (
        // Geral
        <div className="product-display-info">
          {/*  cima */}
          <div className="item-cima">
            <img
              className="product-img-display"
              src={product.img}
              alt="Imagem do Produto"
            />
          </div>
          <p className="nome-produto-carrinho">{product.name}</p>
          <div className="descricao-produto-carrinho">
            <p className="qnt-livre">
              Quantidade Disponíveis:{" "}
              <span className="num-qnt-livre">{product.qnt}</span>
            </p>
            <div className="precos">
              <p className="preco-produto-descricao">R$ {product.new_price}</p>
              <p className="preco-velho-descricao">R$ {product.old_price}</p>
              <p className="promo">-20% OFF</p>
            </div>
            <p>{product.description}</p>
          </div>
          <hr className="hr-produto" />
          {/* Parte de Baixo */}
          <div className="btn-baixo">
            <button
              type="button"
              onClick={() => handleAddToCart(product.id)}
              disabled={product.qnt <= 0} // Desabilita o botão se a quantidade for 0 ou menos
            >
              Adicionar ao Carrinho{" "}
              <img
                className="img-carrinho-btn"
                src={carrinho}
                alt="imagem carrinho"
              />
            </button>
          </div>
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
