import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./ListaDeProdutos.css";
import banner_1 from "../Assets/banner_best_crochet.png_1.jpg";
import banner_2 from "../Assets/banner_best_crochet.png_2.jpg";
import banner_3 from "../Assets/banner_best_crochet.png_3.jpg";
import banner_4 from "../Assets/banner_best_crochet.png_4.jpg";
import all_data from "../Assets/all_data";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const ListaDeProdutos = () => {
  const [termoPesquisa, setTermoPesquisa] = useState(""); // Estado para o termo de pesquisa
  const [filtro, setFiltro] = useState("sem filtro"); // Estado para o filtro
  const banners = [banner_1, banner_2, banner_3, banner_4];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const handleSwipe = (deltaX) => {
    if (deltaX > 0) {
      setCurrentBanner((prevBanner) =>
        prevBanner === 0 ? banners.length - 1 : prevBanner - 1
      );
    } else {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Para permitir que funcione com mouse também
  });

  const produtosFiltrados = all_data
    .filter((product) =>
      product.name.toLowerCase().includes(termoPesquisa.toLowerCase())
    )
    .sort((a, b) => {
      if (filtro === "alfabetica") {
        return a.name.localeCompare(b.name);
      } else if (filtro === "preco") {
        return a.new_price - b.new_price;
      }
      return 0;
    });

  return (
    <div className="lista-produtos-main">
      <Helmet>
        <title>Best Crochet - Loja de Crochê em Joinville, SC</title>
        <meta
          name="description"
          content="Explore a melhor loja de crochê artesanal em Joinville, SC. Descubra bolsas, cachecóis, cestos e muito mais. Envio rápido e várias opções de pagamento."
        />
        <meta
          name="keywords"
          content="crochê, artesanato, bolsas de crochê, cachecóis de crochê, cestos de crochê, loja de crochê em Joinville"
        />
      </Helmet>
      <div {...swipeHandlers} className="banner-container">
        <img
          className="banner-img"
          src={banners[currentBanner]}
          alt={`Banner ${currentBanner + 1}`}
        />
        <div className="banner-indicators">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentBanner ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
      {/* Breadcrumb */}
      <nav className="breadcrumb-home">
        <span>Home</span>
      </nav>
      <div className="geral-service-conteiner">
        <div className="service-container">
          <div className="service-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className="service-text">
              <div className="service-title">LOCALIZAÇÃO PARA ENTREGAS</div>
              <div className="service-description">Joinville e Região</div>
            </div>
          </div>
          <div className="service-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h18v13H3z" />
              <path d="M1 8h22" />
              <path d="M3 21h18" />
            </svg>
            <div className="service-text">
              <div className="service-title">ENVIO RÁPIDO</div>
              <div className="service-description">
                Enviamos rapidamente após a compra
              </div>
            </div>
          </div>
          <div className="service-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <path d="M1 10h22" />
              <path d="M7 6v4" />
              <path d="M17 6v4" />
            </svg>
            <div className="service-text">
              <div className="service-title">PAGAMENTO FÁCIL</div>
              <div className="service-description">Várias opções</div>
            </div>
          </div>
          <div className="service-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <div className="service-text">
              <div className="service-title">COMPRA SEGURA</div>
              <div className="service-description">Dados Privados</div>
            </div>
          </div>
        </div>
      </div>
      <div id="text-crochet">
        <p>crochet</p>
      </div>
      <div id="global-main-header">
        <div id="global-search">
          <div className="filter-item">
            <select value={filtro} onChange={handleFiltroChange}>
              <option value="sem filtro">Sem Filtro</option>
              <option value="alfabetica">Order Alfabética [A-Z]</option>
              <option value="preco">Ordenar Por Menor Preço</option>
            </select>
          </div>
        </div>
      </div>
      <div className="conteudos-geral-lista-produtos">
        <h2 className="conteudos-titulo">Todos Produtos</h2>
        <p id="texto-exibindo">
          Exibindo {produtosFiltrados.length} resultados
        </p>
      </div>
      <div id="lista-de-produtos" className="lista-de-produtos">
        {produtosFiltrados.map((product, i) => (
          <Item
            id={product.id}
            key={i}
            name={product.name}
            img={product.img}
            new_price={product.new_price}
            old_price={product.old_price}
            qnt={product.qnt}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ListaDeProdutos;
