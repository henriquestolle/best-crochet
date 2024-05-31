import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./CSS/About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">
        Home {`>`} Loja {`>`} Sobre
      </p>
      <h1>Sobre</h1>
      <Footer />
    </div>
  );
};

export default About;
