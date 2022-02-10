import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavOpen(false);
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
              onClick={closeMenu}
            >
              <span className="nav-index">00</span>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
              onClick={closeMenu}
            >
              <span className="nav-index">01</span>
              <span>Destination</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
              onClick={closeMenu}
            >
              <span className="nav-index">02</span>
              <span>Crew</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
              onClick={closeMenu}
            >
              <span className="nav-index">03</span>
              <span>Technology</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
