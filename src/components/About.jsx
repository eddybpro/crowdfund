import "./About.css";
import { productData } from "../productData";
import ProductCard from "./ProductCard";
import PledgeCard from "./PledgeCard";
import { CloseModal } from "../assets";

import { useState } from "react";
import ThankCard from "./ThankCard";

function About() {
  const [showPledge, setShowPledge] = useState(false);
  const [showThank, setShowThank] = useState(false);

  const pledgeData = [
    {
      name: "Pledge with no reward",
      desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email. ",
      price: 0,
      count: 0,
    },
    ...productData,
  ];
  console.log(showPledge);
  return (
    <div
      className={
        showPledge || showThank ? "AboutContainer background" : "AboutContainer"
      }
    >
      <h1 className="AboutContainer-Title">About this project</h1>
      <p className="AboutContainer-Para">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="AboutContainer-Para">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <div
        className={
          showPledge
            ? "AboutContainer-ProductBox pointerNone"
            : "AboutContainer-ProductBox"
        }
      >
        {productData.map((el, i) => (
          <ProductCard key={i} {...el} setShowPledge={setShowPledge} />
        ))}
      </div>

      {showPledge && (
        <div className="AboutContainer-PledgeBox">
          <div className="AboutContainer-PledgeBox-Head">
            <h1 className="AboutContainer-PledgeBox-Head-Title">
              Back this project
            </h1>
            <button
              className="AboutContainer-PledgeBox-Head-Btn"
              aria-label="close modal"
              onClick={() => setShowPledge((prev) => !prev)}
            >
              <img src={CloseModal} alt="" />
            </button>
          </div>
          <p className="AboutContainer-PledgeBox-Para">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          {pledgeData.map((el, i) => (
            <PledgeCard
              key={i}
              {...el}
              setShowThank={setShowThank}
              setShowPledge={setShowPledge}
            />
          ))}
        </div>
      )}

      {showThank && (
        <div className="AboutContainer-ThanksBox">
          <ThankCard setShowThank={setShowThank} />
        </div>
      )}
    </div>
  );
}
export default About;
