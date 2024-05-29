import "./CSS/LandingPage.css";
import logo_best_crochet from "../Components/Assets/logo-best-crochet.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div>
        <h1>Best Crochet</h1>
        <hr />
      </div>
      <div className="img-logo">
        <img src={logo_best_crochet} alt="logo-best-crochet" />
      </div>
      <ul className="bottons">
        <Link to="/shop">
          <li>Visitar Loja</li>
        </Link>
        <a
          href="https://wa.me/47988883180?text=Olá,%20estou%20muito%20interessado%20nos%20seus%20produtos%20de%20crochê.%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20os%20tipos%20de%20produtos%20disponíveis,%20preços%20e%20opções%20de%20personalização.%20Obrigado!"
          target="_blank"
        >
          <li>WhattsApp</li>
        </a>
        <li>
          <a href="https://www.instagram.com/bestcrochetjoinville/">
            Rede Social
          </a>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default LandingPage;
