import {useState} from 'react';
import collapse__icon__close from '../assets/collapse__icon__close.png';
import '../styles/Collapse.scss';

function Collapse({title, content, id}) {
  const [active, setActive] = useState(false);

  return (
    <div id={id} className={`collapse ${active ? 'active' : ''}`}>
      <div className="collapse__title" onClick={() => setActive(!active)}>
        {title}
        <img
          src={collapse__icon__close}
          alt="chevron"
          className={`collapse__icon ${active ? 'rotated' : ''}`}
        />
      </div>
      <div className="collapse__content">{content}</div>
    </div>
  );
}

export default Collapse;
