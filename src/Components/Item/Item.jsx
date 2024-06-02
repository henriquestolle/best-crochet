import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <div className="info-itens">
        <p>
          Quantidade: <strong>{props.qnt}</strong>
        </p>
        <p>
          De:
          <span className="preco-velho">R$: {props.old_price.toFixed(2)}</span>
        </p>
        <p>
          Por:
          <span className="preco-novo">R$:{props.new_price.toFixed(2)}</span>
        </p>
      </div>
      <Link to={`/product/${props.id}`}>
        <button className="btn-item-buy" type="button">
          Comprar
        </button>
      </Link>
    </div>
  );
};

export default Item;
