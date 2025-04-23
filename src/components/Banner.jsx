// Import du logo et du style
import logo from '../assets/logo.png';
import {NavLink} from 'react-router-dom';
import '../styles/Banner.scss';

// Composant d'en-tête avec logo et navigation
function Banner() {
  return (
    <header className="kasa-banner">
      <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      <nav className="kasa-nav">
        {/* Liens de navigation */}
        <NavLink to="/" end className="nav-link">
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
