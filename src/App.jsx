import "./Pages/CSS/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Shop from "../src/Pages/Shop";
import NotFound from "../src/Pages/NotFound";
import About from "../src/Pages/About";
import Product from "./Pages/Product";
import Contact from "../src/Pages/Contact";
import Cart from "../src/Pages/Cart";
function App() {
  return (
    <div>
      <BrowserRouter basename="/best-crochet">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
