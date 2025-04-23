// On importe Routes et Route pour gérer la navigation entre les pages
import {Routes, Route} from 'react-router-dom';

// Import des différentes pages de l'application
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';
import Rental from './pages/Rental.jsx';

// Composant Router : définit les chemins (routes) de l'application
function Router() {
  return (
    <Routes>
      {/* Page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Page À propos */}
      <Route path="/a-propos" element={<About />} />

      {/* Page de détail d'un logement (id dynamique) */}
      <Route path="/logement/:id" element={<Rental />} />

      {/* Page d'erreur (s'affiche si aucune autre route ne correspond) */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

// On exporte le Router pour l'utiliser dans App.jsx
export default Router;
