import "./ProductCard.css";
import PropTypes from "prop-types";

function ProductCard(props) {
  return (
    <div className={props.count ? "ProductCard" : "ProductCard out"}>
      <h2 className="ProductCard-Title">{props.name}</h2>
      <p className="ProductCard-Price">Pledge ${props.price} or more</p>
      <p className="ProductCard-Desc">{props.desc}</p>
      <div className="ProductCard-Left">
        <strong>{props.count}</strong>
        <span>left</span>
      </div>
      <button
        className="ProductCard-Btn"
        onClick={() => props.setShowPledge((prev) => !prev)}
      >
        {props.count ? "Select Reward" : "Out of Stock"}
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  setShowPledge: PropTypes.func,
};

export default ProductCard;
