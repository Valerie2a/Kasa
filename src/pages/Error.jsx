import {Link} from 'react-router-dom';

function Error() {
  return (
    <div>
      <h1>404 - Page non trouvée 😢</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}
export default Error;
