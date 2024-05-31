import React, { useState, useEffect } from "react";
import "./CSS/Shop.css";
import banner from "../Components/Assets/banner_best_crochet.png";
import Navbar from "../Components/Navbar/Navbar";
import ListaDeProdutos from "../Components/ListaDeProdutos/ListaDeProdutos";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">Home {`>`} Loja</p>
      <div className="banner">
        <img className="banner-img" src={banner} alt="banner" />
      </div>
      <ListaDeProdutos />
    </div>
  );
};

export default Shop;
