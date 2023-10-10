import "./Header.css";
import Navbar from "./Navbar";
import { MasterLogo, BookmarkIcon } from "../assets";
import { useState } from "react";

function Header() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  console.log(isBookmarked);
  return (
    <header>
      <Navbar />
      <div className="MastercraftBox">
        <img src={MasterLogo} alt="" className="MastercraftBox-Img" />
        <h2 className="MastercraftBox-Title">
          mastercraft bamboo monitor riser
        </h2>
        <p className="MastercraftBox-Para">
          A beautifully handcrafted monitor stand to reduce neck and eye strain
        </p>
        <div className="MastercraftBox-BtnsCard">
          <button className="MastercraftBox-BtnsCard-BackBtn">
            Back this project
          </button>
          <button
            className={
              isBookmarked
                ? "MastercraftBox-BtnsCard-BookMarkBtn Bookmarked"
                : "MastercraftBox-BtnsCard-BookMarkBtn"
            }
            onClick={() => setIsBookmarked((prev) => !prev)}
          >
            <img
              src={BookmarkIcon}
              alt=""
              className={isBookmarked ? "ImgBookmarked" : ""}
            />
            <span className={isBookmarked ? "Desktop marked" : "Desktop"}>
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
