// Import des dépendances et des composants
import React from 'react';
import {Navigate, useParams} from 'react-router-dom';
import logements from '../data/logements.json';
import Slider from '../components/Slider';
import Collapse from '../components/Collapse';
import '../styles/Slider.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStar} from '@fortawesome/free-regular-svg-icons';

// Composant pour afficher la page d'un logement spécifique
function Rental() {
  const {id} = useParams(); // Récupération de l'ID du logement dans l'URL
  const logement = logements.find((logement) => logement.id === id); // Recherche du logement correspondant
  // Si aucun logement trouvé, redirige vers la page 404
  if (!logement) {
    return <Navigate to="/404" />;
  }
  const equipements = logement[' équipements '] || [];
  const tags = logement[' tags '] || [];

  return (
    <div className="logement-container">
      {/* Slider pour les images du logement */}
      <Slider slides={logement.images} />

      {/* Informations principales du logement */}
      <div className="logement-header">
        <div className="logement-info">
          <h1 className="titre">{logement.titre || logement.title}</h1>
          <p className="location">{logement.location}</p>

          {/* Tags du logement */}
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Informations sur l'hôte et la note */}
        <div className="logement-host-rating">
          <div className="host">
            <p>{logement.hôte.nom}</p>
            <img
              src={logement.hôte.image}
              alt={logement.hôte.nom}
              className="host-picture"
            />
          </div>

          {/* Affichage des étoiles de notation */}
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={i < logement.note ? solidStar : regularStar}
                className={`star ${i < logement.note ? 'filled' : 'empty'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Description et équipements en collapse */}
      <div className="collapse-container">
        <Collapse
          title="Description"
          content={logement.description}
          id="collapse-description"
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {equipements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
          id="collapse-equipements"
        />
      </div>
    </div>
  );
}

export default Rental;
