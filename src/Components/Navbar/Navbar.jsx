// Navbar.js
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_best_crochet from "../Assets/logo-best-crochet.png";
import carrinho_de_compras from "../Assets/carrinho-de-compras.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  // Função para o Menu Bar
  const [isOpen, setIsOpen] = useState(false);

  // Contador do carrinho
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="menu-bar" onClick={toggleMenu}>
        &#9776; {/* Ícone de menu hambúrguer */}
      </div>
      <Link className="logo" to="/shop">
        <img src={logo_best_crochet} alt="Logo" />
      </Link>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="close-btn">
          &times; {/* Ícone de fechar */}
        </button>
        <Link to="/product">Produtos</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/about">Sobre Nós</Link>
        <Link to="/">Home</Link>
      </div>
      <div className="carrinho-compras">
        <Link to="/cart">
          <img
            className="carrinho-compras-img"
            src={carrinho_de_compras}
            alt="carrinho-de-compras"
          />
        </Link>
        <span className="qnt-itens-carrinho">{getTotalCartItems()}</span>
      </div>
    </div>
  );
};

export default Navbar;
