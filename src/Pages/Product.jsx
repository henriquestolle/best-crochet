import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ListaDeProdutos from "../Components/ListaDeProdutos/ListaDeProdutos";
import "./CSS/Product.css";

const Product = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">
        Home {`>`} Loja {`>`} Produtos
      </p>
      <ListaDeProdutos />
      <Footer />
    </div>
  );
};

export default Product;
