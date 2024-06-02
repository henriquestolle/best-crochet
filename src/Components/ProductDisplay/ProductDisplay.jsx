import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import all_data from "../Assets/all_data";
import "./ProductDisplay.css";
import Footer from "../../Components/Footer/Footer";
const ProductDisplay = () => {
  const { productId } = useParams();

  // Converta productId para um número
  const productIdNumber = parseInt(productId);

  // Encontre o produto correspondente com base no productIdNumber
  const product = all_data.find((product) => product.id === productIdNumber);

  return (
    <div className="product-display">
      <Navbar />
      <h1>Detalhes do Produto {productId}</h1>
      {product && (
        <div className="product-display-info">
          <h1>{product.name}</h1>
          <img
            className="product-img-display"
            src={product.img}
            alt="Imagem do Produto"
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDisplay;
