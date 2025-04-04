import logements from '../data/logements.json';
import LocationItem from './LocationItem';
import '../styles/Locations.scss';

function LocationList() {
  return (
    <ul className="kasa-location-list">
      {logements.map((location) => (
        <LocationItem
          key={location.id}
          id={location.id}
          titre={location.titre || location.title}
          couverture={location.couverture}
        />
      ))}
    </ul>
  );
}

export default LocationList;
