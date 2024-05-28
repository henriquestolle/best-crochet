import React, { useState, useEffect } from "react";
import "./CSS/Shop.css";
import Navbar from "../Components/Navbar/Navbar";
import ListaDeProdutos from "../Components/ListaDeProdutos/ListaDeProdutos";
import Carregando from "../Components/Carregando/Carregando";

const Shop = () => {
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);

  // Simula um tempo de carregamento de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700);

    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <Carregando />
      ) : (
        <>
          <Navbar />
          <h1>Shop</h1>
          <ListaDeProdutos />
        </>
      )}
    </div>
  );
};

export default Shop;
