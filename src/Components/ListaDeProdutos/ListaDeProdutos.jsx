import "./ListaDeProdutos.css";
import banner from "../Assets/banner_best_crochet.png";
import { useState } from "react";
import all_data from "../Assets/all_data";
import Item from "../Item/Item";

const ListaDeProdutos = () => {
  const [produtosCarregados, setProdutosCarregados] = useState(8); // Inicialmente, carregar 8 produtos
  const [termoPesquisa, setTermoPesquisa] = useState(""); // Estado para o termo de pesquisa

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

  const produtosFiltrados = all_data.filter((product) =>
    product.name.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div className="lista-produtos-main">
      <div className="banner" onClick={scrollToEndOfScreen}>
        <img className="banner-img" src={banner} alt="banner" />
      </div>
      <div className="search-item">
        <input
          placeholder="Pesquisar Nome do Produto..."
          type="search"
          name="search"
          id="search"
          value={termoPesquisa}
          onChange={handleSearchChange}
        />
      </div>
      <div className="conteudo">
        <p className="conteudo-titulo">Todos Produtos</p>
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
      {produtosCarregados < produtosFiltrados.length && (
        <div className="btn-carregar-item">
          <button onClick={carregarMaisProdutos}>Ver Mais Produtos</button>
        </div>
      )}
    </div>
  );
};

export default ListaDeProdutos;
