// Import des dépendances
import {useState} from 'react';
import collapse__icon__close from '../assets/collapse__icon__close.png';
import '../styles/Collapse.scss';

// Composant Collapse pour afficher ou masquer du contenu
function Collapse({title, content, id}) {
  const [active, setActive] = useState(false);

  // Bascule l'ouverture/fermeture du collapse
  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div id={id} className={`collapse ${active ? 'active' : ''}`}>
      <div className="collapse__title" onClick={handleToggle}>
        {title}
        <span className="collapse__icon-wrapper">
          <img
            src={collapse__icon__close}
            alt="chevron"
            className={`collapse__icon__close ${active ? 'rotated' : ''}`}
          />
        </span>
      </div>
      <div className="collapse__content">{content}</div>
    </div>
  );
}

export default Collapse;
