import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <img
        src="assets/shared/logo.svg"
        alt="Space tourism website logo"
        className="logo"
      />
      <button className="navigation-button" onClick={handleToggle}>
        <img src="assets/shared/icon-hamburger.svg" alt="" />
      </button>
      <nav className={`navigation  ${navOpen ? "open" : ""}`}>
        <button className="navigation-button" onClick={handleToggle}>
          <img src="assets/shared/icon-close.svg" alt="" />
        </button>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-index">00</span>
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-index">01</span>
              <span> Destination</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-index">02</span>
              <span>Crew</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="nav-index">03</span>
              <span>Technology</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
