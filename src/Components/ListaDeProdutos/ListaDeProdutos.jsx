import "./ListaDeProdutos.css";
import banner_1 from "../Assets/banner_best_crochet.png_1.jpg";
import banner_2 from "../Assets/banner_best_crochet.png_2.jpg";
import banner_3 from "../Assets/banner_best_crochet.png_3.jpg";
import banner_4 from "../Assets/banner_best_crochet.png_4.jpg";
import { useState, useEffect, useRef } from "react";
import all_data from "../Assets/all_data";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";

const ListaDeProdutos = () => {
  const [produtosCarregados, setProdutosCarregados] = useState(8); // Inicialmente, carregar 8 produtos
  const [termoPesquisa, setTermoPesquisa] = useState(""); // Estado para o termo de pesquisa
  const [filtro, setFiltro] = useState("sem filtro"); // Estado para o filtro
  const scrollContainerRef = useRef(null);
  const banners = [banner_1, banner_2, banner_3, banner_4];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [banners.length]);

  const carregarMaisProdutos = () => {
    // Aumenta o número de produtos a serem carregados
    setProdutosCarregados(
      (prevProdutosCarregados) => prevProdutosCarregados + 4
    );
  };

  const scrollToEndOfScreen = () => {
    const start = window.pageYOffset;
    const end = document.documentElement.scrollHeight - window.innerHeight;
    const duration = 1000;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // função de easing
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, start + (end - start) * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

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
      <div className="banner-container" onClick={scrollToEndOfScreen}>
        <img className="banner-img" src={banners[currentBanner]} alt="banner" />
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
      <div id="text-crochet">
        <p>crochet</p>
      </div>
      <div id="global-main-header">
        <div id="global-search">
          <div className="filter-item">
            <select value={filtro} onChange={handleFiltroChange}>
              <option value="sem filtro">Sem Filtro</option>
              <option value="alfabetica">Ordem Alfabética</option>
              <option value="preco">Preço</option>
            </select>
          </div>
        </div>
      </div>
      <div className="conteudos-geral-lista-produtos">
        <p className="conteudos-titulo">Todos Produtos</p>
        <div id="hr-estilizado"></div>
      </div>
      <div id="lista-de-produtos" className="lista-de-produtos">
        {produtosFiltrados.slice(0, produtosCarregados).map((product, i) => (
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
      {produtosCarregados < produtosFiltrados.length ? (
        <div className="btn-carregar-item">
          <button onClick={carregarMaisProdutos}>Ver Mais Produtos</button>
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default ListaDeProdutos;
