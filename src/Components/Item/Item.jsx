import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img className="img-item-display" src={props.img} alt={props.name} />
      </Link>
      <h3>{props.name}</h3>
      <div className="info-itens">
        <p>
          Restantes: <strong>{props.qnt}</strong>
        </p>
        <p>
          <span className="preco-velho">R$ {props.old_price.toFixed(2)}</span>
        </p>
        <p>
          <span className="preco-novo">R${props.new_price.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
