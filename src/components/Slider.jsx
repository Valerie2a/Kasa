// Import des dépendances
import React, {useState} from 'react';
import '../styles/Slider.scss';

// Composant pour afficher un carrousel d'images
function Slider({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0); // State pour suivre l'image affichée

  // Fonction pour aller à l'image précédente
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Fonction pour aller à l'image suivante
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Fonction pour sélectionner une image via les points
  const moveDot = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {/* Image actuelle */}
      <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider__image"
      />

      {/* Flèches de navigation affichées seulement si plusieurs images */}
      {slides.length > 1 && (
        <>
          <button
            className="slider__arrow slider__arrow--left"
            onClick={goToPrevious}
          >
            ‹
          </button>
          <button
            className="slider__arrow slider__arrow--right"
            onClick={goToNext}
          >
            ›
          </button>
        </>
      )}

      {/* Points de navigation */}
      {slides.length > 1 && (
        <div className="slider__dots">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => moveDot(index)}
              className={`slider__dot ${
                currentIndex === index ? 'dot-active' : ''
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Slider;
