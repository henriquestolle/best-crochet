import React, { lazy, Suspense } from "react";
import "./Pages/CSS/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carregando from "../src/Components/Carregando/Carregando";

const LandingPage = lazy(() => import("./Pages/LandingPage"));
const Shop = lazy(() => import("../src/Pages/Shop"));
const NotFound = lazy(() => import("../src/Pages/NotFound"));
const About = lazy(() => import("../src/Pages/About"));
const Product = lazy(() => import("./Pages/Product"));
const Contact = lazy(() => import("../src/Pages/Contact"));
const Cart = lazy(() => import("../src/Pages/Cart"));

function App() {
  return (
    <div>
      <BrowserRouter basename="/best-crochet">
        <Suspense fallback={<Carregando />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
