import collapse__icon__close from '../assets/collapse__icon__close.png';
import {useState} from 'react';
import '../styles/Collapse.scss';

function Collapse({title, content}) {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`collapse ${active ? 'active' : ''}`}>
      <div className="collapse__title" onClick={handleToggle}>
        {title}
        <img
          src={collapse__icon__close}
          alt="toggle icon"
          className={`collapse__icon__close ${active ? 'rotated' : ''}`}
        />
      </div>

      {/* Affiche le contenu seulement si actif */}
      {active && <div className="collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse;
