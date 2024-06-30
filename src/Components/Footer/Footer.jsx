import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo_best_crochet from "../Assets/logo-best-crochet.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo_best_crochet} alt="Best Crochet Logo" />
        <p>&copy; 2024 Best Crochet. Todos os Direitos Reservados. </p>
      </div>
      <div className="menu">
        <h3>Menu</h3>
        <Link to="/">Home</Link>
        <Link to="/shop">Todos os produtos</Link>
        <a
          href="https://wa.me/47988883180?text=Olá,%20tudo%20bem?"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato
        </a>
      </div>
      <div className="categorias">
        <h3>Categorias</h3>
        <p>
          <i className="fas fa-map-marker-alt"></i> Bolsas
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> Cachecol
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> Cestos
        </p>
      </div>
      <div className="contato">
        <h3>Contato</h3>
        <p>
          <i className="fas fa-map-marker-alt"></i> Anitta Garibaldi, Joinville,
          SC, Brasil
        </p>
        <p>
          <i className="fas fa-clock"></i> Segunda a sexta-feira: 10:00 às 18:00
          <br />
          Domingo: Fechado.
        </p>
        <p>
          <i className="fas fa-phone-alt"></i> (47) 98888-3180
        </p>
        <p>
          <i className="fas fa-envelope"></i> bestcrochet@gmail.com.br
        </p>
      </div>
      <div className="sobre">
        <h3>Sobre Nós</h3>
        <p>
          Best Crochet é uma loja de crochê artesanal localizada em Joinville,
          SC. Oferecemos uma variedade de produtos feitos à mão com amor e
          cuidado. Nossa missão é fornecer produtos de alta qualidade que
          encantem nossos clientes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
