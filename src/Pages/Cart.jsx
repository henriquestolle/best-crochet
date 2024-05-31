import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">
        Home {`>`} Loja {`>`} Carrinho
      </p>
      <h1>Carrinho</h1>
      <Footer />
    </div>
  );
};

export default Cart;
