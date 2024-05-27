import "./CSS/Shop.css";
import Navbar from "../Components/Navbar/Navbar";
import ListaDeProdutos from "../Components/ListaDeProdutos/ListaDeProdutos";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <h1>Shop</h1>
      <ListaDeProdutos />
    </div>
  );
};

export default Shop;
