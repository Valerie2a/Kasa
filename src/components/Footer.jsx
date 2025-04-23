import logoWhite from '../assets/logo-white.svg';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="kasa-footer">
      <img src={logoWhite} alt="Kasa" className="kasa-logo" />
      <h2 className="footer-text">
        {/* Affichage pour mobile */}
        <span className="mobile-only">
          © 2020 Kasa.All
          <br />
          rights reserved
        </span>

        {/* Affichage pour desktop */}
        <span className="desktop-only">© 2020 Kasa. All rights reserved</span>
      </h2>
    </footer>
  );
}

export default Footer;
