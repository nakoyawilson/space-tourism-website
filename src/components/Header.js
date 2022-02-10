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
      {/* 00 Home 01 Destination 02 Crew 03 Technology */}
    </header>
  );
};

export default Header;
