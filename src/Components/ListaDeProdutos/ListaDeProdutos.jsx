import "./ListaDeProdutos.css";
import banner from "../Assets/banner_best_crochet.png";
import { useState } from "react";
import all_data from "../Assets/all_data";
import Item from "../Item/Item";

const ListaDeProdutos = () => {
  const [produtosCarregados, setProdutosCarregados] = useState(8); // Inicialmente, carregar 8 produtos

  const carregarMaisProdutos = () => {
    // Aumenta o número de produtos a serem carregados
    setProdutosCarregados(
      (prevProdutosCarregados) => prevProdutosCarregados + 4
    );
  };

  const scrollToEndOfScreen = () => {
    const start = window.pageYOffset;
    const end = document.documentElement.scrollHeight - window.innerHeight;
    const duration = 1000; // duração da animação em milissegundos
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // garante que não ultrapasse 1
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // função de easing
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, start + (end - start) * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="lista-produtos-main">
      <div className="banner" onClick={scrollToEndOfScreen}>
        <img className="banner-img" src={banner} alt="banner" />
      </div>
      <div className="conteudo">
        <p className="conteudo-titulo">Todos Produtos</p>
      </div>
      <div id="lista-de-produtos" className="lista-de-produtos">
        {all_data.slice(0, produtosCarregados).map((product, i) => (
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
      {produtosCarregados < all_data.length && (
        <div className="btn-carregar-item">
          <button onClick={carregarMaisProdutos}>Ver Mais Produtos</button>
        </div>
      )}
    </div>
  );
};

export default ListaDeProdutos;
