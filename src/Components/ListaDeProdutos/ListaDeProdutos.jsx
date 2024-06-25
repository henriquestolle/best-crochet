import "./ListaDeProdutos.css";
import banner from "../Assets/banner_best_crochet.png";
import { useState, useEffect, useRef } from "react";
import all_data from "../Assets/all_data";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";

const ListaDeProdutos = () => {
  const [produtosCarregados, setProdutosCarregados] = useState(8); // Inicialmente, carregar 8 produtos
  const [termoPesquisa, setTermoPesquisa] = useState(""); // Estado para o termo de pesquisa
  const [filtro, setFiltro] = useState("sem filtro"); // Estado para o filtro
  const scrollContainerRef = useRef(null);

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

  const handleSearchChange = (event) => {
    // Sanitizar o input para evitar ataques XSS
    const sanitizedInput = event.target.value.replace(/<[^>]*>?/gm, "");
    setTermoPesquisa(sanitizedInput);
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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const cloneItems = () => {
      const items = scrollContainer.querySelectorAll(".scroll-item");
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    };

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      if (scrollLeft + clientWidth >= scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1; // Ajuste a velocidade do scroll
      }
    };

    const scrollInterval = setInterval(handleScroll, 10); // Ajuste o intervalo do scroll

    cloneItems();
    cloneItems(); // Clone twice for smooth transition

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="lista-produtos-main">
      <div className="banner" onClick={scrollToEndOfScreen}>
        <img className="banner-img" src={banner} alt="banner" />
      </div>
      <div id="loop">
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="scroll-item">Crochê</div>
          <div className="scroll-item">Bolsas</div>
          <div className="scroll-item">Cestos</div>
          <div className="scroll-item">Tocas</div>
          <div className="scroll-item">Cachecol</div>
        </div>
      </div>
      <div id="global-main-header">
        <div id="font-search">
          <p>Filtre os resultados</p>
        </div>
        <div id="global-search">
          <div className="filter-item">
            <select value={filtro} onChange={handleFiltroChange}>
              <option value="sem filtro">Sem Filtro</option>
              <option value="alfabetica">Ordem Alfabética</option>
              <option value="preco">Preço</option>
            </select>
          </div>
          <div className="search-item">
            <input
              placeholder="Pesquisar Cor do Produto"
              type="search"
              name="search"
              id="search"
              value={termoPesquisa}
              onChange={handleSearchChange}
            />
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
