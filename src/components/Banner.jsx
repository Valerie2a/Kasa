import logo from '../assets/logo.png';
import '../styles/Banner.scss';
import {NavLink} from 'react-router-dom';

function Banner() {
  const title = 'Kasa';
  return (
    <header className="kasa-banner">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <nav className="kasa-nav">
        <NavLink to="/" className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="nav-link">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Banner;
