import React from 'react';
import {useParams} from 'react-router-dom';
import logements from '../data/logements.json';
import Slider from '../components/Slider';
import Collapse from '../components/Collapse';
import '../styles/Slider.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStar} from '@fortawesome/free-regular-svg-icons';

function Rental() {
  const {id} = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const equipements = logement[' équipements '] || [];
  const tags = logement[' tags '] || [];

  return (
    <div className="logement-container">
      <Slider slides={logement.images} />

      <div className="logement-header">
        <div className="logement-info">
          <h1 className="titre">{logement.titre || logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-host-rating">
          <div className="host">
            <p>{logement.hôte.nom}</p>
            <img
              src={logement.hôte.image}
              alt={logement.hôte.nom}
              className="host-picture"
            />
          </div>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={solidStar}
                className={`star ${i < logement.note ? 'filled' : 'empty'}`}
              />
            ))}
          </div>
        </div>
      </div>

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
