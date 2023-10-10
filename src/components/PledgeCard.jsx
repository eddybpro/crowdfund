import { useState } from "react";
import "./PledgeCard.css";
import PropTypes from "prop-types";

function PledgeCard(props) {
  const [showPledgeBtns, setShowPledgeBtns] = useState(false);
  const handleClick = () => {
    props.setShowThank((prev) => !prev);
    props.setShowPledge((prev) => !prev);
  };
  return (
    <div
      className={
        props.count == 0 && props.price != 0
          ? "PledgeContainer out"
          : showPledgeBtns
          ? "PledgeContainer pledge"
          : "PledgeContainer "
      }
    >
      <div className="PledgeContainer-Grid">
        <div className="PledgeContainer-Grid-InputTitleBox">
          <input
            type="checkbox"
            name="check"
            className="check"
            value={showPledgeBtns}
            onChange={(e) => setShowPledgeBtns(e.target.checked)}
            aria-label="check pledge"
          />

          <div className="PledgeContainer-Grid-InputTitleBox-TitleBox">
            <h2>{props.name}</h2>
            {props.price > 0 && <p>Pledge ${props.price} or more</p>}
          </div>
        </div>
        <p className="PledgeContainer-Grid-Desc">{props.desc}</p>

        {props.price > 0 && (
          <div className="PledgeContainer-Grid-Left">
            <strong>{props.count}</strong>
            <span>left</span>
          </div>
        )}
      </div>
      {props.count > 0 && props.price > 0 && showPledgeBtns && (
        <div className="PledgeContainer-PledgeBox">
          <p className="PledgeContainer-PledgeBtns-Para">Enter your pledge</p>
          <div className="PledgeContainer-PledgeBox-Inputs">
            <label htmlFor="pledge">
              <p>$</p>
              <input
                type="text"
                name="pledge"
                id="pledge"
                defaultValue={props.price}
                aria-label="pledge value"
              />
            </label>
            <button onClick={handleClick}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

PledgeCard.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  setShowThank: PropTypes.func,
  setShowPledge: PropTypes.func,
};

export default PledgeCard;
