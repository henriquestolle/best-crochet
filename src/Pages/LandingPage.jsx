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
          href="https://wa.me/47988883180?text=Olá,%20tudo%20bem?"
          target="_blank"
        >
          <li>Compre Via WhatsApp</li>
        </a>
        <a
          href="https://www.instagram.com/bestcrochetjoinville/"
          target="_blank"
        >
          <li>Rede Social</li>
        </a>
      </ul>
      <Footer />
    </div>
  );
};

export default LandingPage;
