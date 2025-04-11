import {Link} from 'react-router-dom';
import '../styles/Error.scss';

function Error() {
  return (
    <div className="Error-background">
      <div className="Error-page">
        <h1 className="Error-title">404</h1>
        <p className="Error-content">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link className="Link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
