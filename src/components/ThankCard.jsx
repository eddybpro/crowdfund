import "./ThankCard.css";
import { CheckIcon } from "../assets";
import PropTypes from "prop-types";

function ThankCard(props) {
  return (
    <div className="ThankCard">
      <img src={CheckIcon} alt="" />
      <h1 className="ThankCard-Title">Thanks for your support!</h1>
      <p className="ThankCard-Para">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        className="ThankCard-Btn"
        onClick={() => props.setShowThank((prev) => !prev)}
      >
        Got it!
      </button>
    </div>
  );
}

ThankCard.propTypes = {
  setShowThank: PropTypes.func,
};

export default ThankCard;
