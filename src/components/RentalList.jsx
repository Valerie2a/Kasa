import logements from '../data/logements.json';
import RentalCard from './RentalCard';
import '../styles/Locations.scss';

function RentalList() {
  return (
    <div className="kasa-location-container">
      <ul className="kasa-location-list">
        {logements.map((location) => (
          <RentalCard
            key={location.id}
            id={location.id}
            titre={location.titre || location.title}
            couverture={location.couverture}
          />
        ))}
      </ul>
    </div>
  );
}

export default RentalList;
