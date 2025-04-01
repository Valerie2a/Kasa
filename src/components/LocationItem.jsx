import '../styles/Locations.scss';
function LocationItem({titre, couverture}) {
  return (
    <li className="kasa-location-item">
      <img
        src={couverture}
        alt={`Couverture de ${titre}`}
        className="kasa-location-item-cover"
      />
      <p className="kasa-location-title">{titre}</p>
    </li>
  );
}

export default LocationItem;
