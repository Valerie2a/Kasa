// Import des dépendances
import {Link} from 'react-router-dom';
import '../styles/Error.scss';

// Composant pour afficher la page d'erreur 404
function Error() {
  return (
    <div className="Error-background">
      <div className="Error-page">
        {/* Titre principal */}
        <h1 className="Error-title">404</h1>

        {/* Message d'erreur */}
        <p className="Error-content">
          Oups ! La page que vous demandez n'existe pas.
        </p>

        {/* Lien pour retourner à l'accueil */}
        <Link className="Link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
