import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_best_crochet from "../Assets/logo-best-crochet.png";
import carrinho_de_compras from "../Assets/carrinho-de-compras.png";

const Navbar = () => {
  // Função para o Menu Bar
  const [isOpen, setIsOpen] = useState(false);
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
        <Link to="/">Home</Link>
        <Link to="/">Sobre</Link> {/* <Link to="/About">Sobre</Link> */}
        <Link to="/">Produtos</Link> {/* <Link to="/Product">Produtos</Link> */}
        <Link to="/">Contato</Link> {/* <Link to="/Contato">Contato</Link> */}
      </div>
      <div className="carrinho-compras">
        <img src={carrinho_de_compras} alt="carrinho-de-compras" />
      </div>
    </div>
  );
};

export default Navbar;
