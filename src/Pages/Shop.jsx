import "./CSS/Shop.css";
import Navbar from "../Components/Navbar/Navbar";
import ListaDeProdutos from "../Components/ListaDeProdutos/ListaDeProdutos";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">Home {`>`} Loja</p>
      <ListaDeProdutos />
    </div>
  );
};

export default Shop;
