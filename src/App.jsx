import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage";
import Shop from "../src/Pages/Shop";
import NotFound from "../src/Pages/NotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
          {/* This catches all unmatched routes */}

          {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
        </Route>
        <Route path="/cart" element={ <Cart />} />
        <Route path="/login" element={ <LoginSignup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
