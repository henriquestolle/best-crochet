import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import all_data from "../Assets/all_data";
import "./ProductDisplay.css";
import Footer from "../../Components/Footer/Footer";
import carrinho from "../Assets/carrinho-de-compras.png";

const ProductDisplay = () => {
  const { productId } = useParams();

  // Converta productId para um número
  const productIdNumber = parseInt(productId);

  // Encontre o produto correspondente com base no productIdNumber
  const product = all_data.find((product) => product.id === productIdNumber);

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
            <button type="button">
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
      <Footer />
    </div>
  );
};

export default ProductDisplay;
