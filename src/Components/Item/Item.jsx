import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img className="img-item-display" src={props.img} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="info-itens">
        <p id="preco-embaixo">
          <span className="preco-novo">R${props.new_price.toFixed(2)}</span>
        </p>
        <Link to={`/product/${props.id}`}>
          <button id="btn-comprar" type="button">
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
