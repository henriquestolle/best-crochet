import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Product = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">
        Home {`>`} Loja {`>`} Produtos
      </p>
      <h1>Produtos</h1>
      <Footer />
    </div>
  );
};

export default Product;
