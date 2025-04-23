// Import des données logements et du composant RentalCard
import logements from '../data/logements.json';
import RentalCard from './RentalCard';
import '../styles/RentalList.scss';

// Composant pour afficher la liste des logements
function RentalList() {
  return (
    <div className="kasa-location-container">
      <ul className="kasa-location-list">
        {/* Parcourt les données logements et génère une carte pour chaque élément */}
        {logements.map((location) => (
          <RentalCard
            key={location.id} // Clé unique nécessaire pour chaque element
            id={location.id}
            titre={location.titre || location.title} // Gestion de deux formats possibles
            couverture={location.couverture}
          />
        ))}
      </ul>
    </div>
  );
}

export default RentalList;
