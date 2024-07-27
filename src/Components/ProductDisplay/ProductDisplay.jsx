import React, { useEffect, useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import all_data from "../Assets/all_data";
import "./ProductDisplay.css";
import Footer from "../../Components/Footer/Footer";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(ShopContext);

  const [showPopup, setShowPopup] = useState(false);

  const productIdNumber = parseInt(productId);
  const product = all_data.find((product) => product.id === productIdNumber);

  const handleAddToCart = (id) => {
    if (product.qnt > 0) {
      addToCart(id);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Filtrar produtos relacionados
  const relatedProducts = all_data.filter(
    (item) => item.id !== productIdNumber
  );

  // Selecionar até 4 produtos aleatórios
  const getRandomRelatedProducts = (products, count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const displayedRelatedProducts = getRandomRelatedProducts(relatedProducts, 2);

  return (
    <div className="product-display">
      <Navbar />
      {product && (
        <div className="product-display-info">
          <nav className="breadcrumb">
            <b>
              <span>Início</span>
            </b>{" "}
            &gt;{" "}
            <b>
              <span>Bolsas</span>
            </b>{" "}
            &gt; <span>{product.name}</span>
          </nav>
          <div className="product-container">
            <img
              className="product-img-display"
              src={product.img}
              alt="Imagem do Produto"
            />
            <div className="product-details-section">
              <h1 className="product-name">{product.name}</h1>
              <p className="color-detail">Cor: {product.color}</p>
              <p className="price">
                R${product.new_price}{" "}
                <span className="span-detail-old-price">
                  {product.old_price}
                </span>
              </p>
              <p className="price">Em Estoque: {product.qnt}</p>
              {product.qnt > 0 ? (
                <button
                  className="buy-button in-stock"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Adicionar à Sacola
                </button>
              ) : (
                <p className="out-of-stock">Esgotado</p>
              )}
              <div className="description">
                <h2>Descrição</h2>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
          <hr className="separator" />
          <div className="related-products">
            <h2>Produtos Relacionados</h2>
            <div className="products-list">
              {displayedRelatedProducts.map((relatedProduct) => (
                <div className="product-card-releted" key={relatedProduct.id}>
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    onClick={() => window.scrollTo(0, 0)} // Subir topo da tela
                  >
                    <img src={relatedProduct.img} alt={relatedProduct.name} />
                    <p>{relatedProduct.name}</p>
                    <p className="price">R${relatedProduct.new_price}</p>
                    {relatedProduct.qnt > 0 ? (
                      <button className="buy-button-related">Comprar</button>
                    ) : (
                      <p className="out-of-stock">Esgotado</p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
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
