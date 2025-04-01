import logoWhite from '../assets/logo-white.svg';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="kasa-footer">
      <img src={logoWhite} alt="Kasa" className="kasa-logo" />
      <h2>© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;
