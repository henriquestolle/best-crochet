import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">
        Home {`>`} Loja {`>`} Contato
      </p>
      <h1>Contato</h1>
      <Footer />
    </div>
  );
};

export default Contact;
