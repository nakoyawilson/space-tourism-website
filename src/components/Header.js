const Header = () => {
  return (
    <header className="header">
      <img
        src="assets/shared/logo.svg"
        alt="Space tourism website logo"
        className="logo"
      />
      <button className="navigation-button">
        <img src="assets/shared/icon-hamburger.svg" alt="" />
      </button>
      <nav className="navigation">
        <button className="navigation-button">
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
