import './Navbar.css';

const Navbar = ({ children, logoImage, logoDiscription }) => {
  return(
    <header>
      <nav class="navbar">
        <img src={logoImage} alt={logoDiscription} />
        <div class="navbar__buttons">
          { children }
          {/* <a href="index.html" class="header__btn header__btn__cadastro">CADASTRE-SE</a> */}
          {/* <a href="index.html" class="header__btn header__btn__login">LOGIN</a> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
