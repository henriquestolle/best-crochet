import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import CartItem from "../Components/CartItems/CartItem";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">
        Home {`>`} Loja {`>`} Carrinho
      </p>
      <CartItem />
      <Footer />
    </div>
  );
};

export default Cart;
