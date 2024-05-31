import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>
        De:
        <span className="preco-velho">R$: {props.old_price.toFixed(2)}</span>
      </p>
      <p>
        Por:
        <span className="preco-novo">R$:{props.new_price.toFixed(2)}</span>
      </p>
      <button type="button">Comprar</button>
    </div>
  );
};

export default Item;
