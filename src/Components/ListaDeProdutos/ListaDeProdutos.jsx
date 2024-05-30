import { useState } from "react";
import all_data from "../Assets/all_data";
import Item from "../Item/Item";
import "./ListaDeProdutos.css";

const ListaDeProdutos = () => {
  const [produtosCarregados, setProdutosCarregados] = useState(8); // Inicialmente, carregar 4 produtos

  const carregarMaisProdutos = () => {
    // Aumenta o número de produtos a serem carregados
    setProdutosCarregados(
      (prevProdutosCarregados) => prevProdutosCarregados + 4
    );
  };

  return (
    <div className="lista-produtos-main">
      <h1>Produtos</h1>
      <div className="lista-de-produtos">
        {all_data.slice(0, produtosCarregados).map((product, i) => (
          <Item
            key={i}
            name={product.name}
            img={product.img}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
      {produtosCarregados < all_data.length && (
        <div className="btn-carregar-item">
          <button onClick={carregarMaisProdutos}>Carregar Mais Produtos</button>
        </div>
      )}
    </div>
  );
};

export default ListaDeProdutos;
