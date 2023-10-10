import "./Navbar.css";
import { Logo, CloseIcon, Menu } from "../assets";
import { useState } from "react";

function Navbar() {
  const [isMenOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <a href="#" className="Logo" aria-label="crowdfund">
        <img src={Logo} alt="crowdfund" />
      </a>

      <div className="Menu">
        {isMenOpen ? (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={CloseIcon} alt="" />
          </button>
        ) : (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={Menu} alt="" />
          </button>
        )}
      </div>

      <ul className={isMenOpen ? "NavLinks open" : "NavLinks"}>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            About
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            Discover
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
