// Import du lien de navigation
import {Link} from 'react-router-dom';
import '../styles/RentalList.scss';

// Composant pour afficher une carte de location
function RentalCard({id, titre, couverture}) {
  return (
    <li className="kasa-location-item">
      <Link to={`/logement/${id}`} className="kasa-location-link">
        <img
          src={couverture}
          alt={`Couverture de ${titre}`}
          className="kasa-location-item-cover"
        />
        <p className="kasa-location-title">{titre}</p>
      </Link>
    </li>
  );
}

export default RentalCard;
