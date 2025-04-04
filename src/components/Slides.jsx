import React, {useState} from 'react';
import '../styles/Slides.scss';

function SlideLocation({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sliderStyles">
      {/* Image actuelle */}
      <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="imageStyles"
      />

      {/* Flèches si plus d’une image */}
      {slides.length > 1 && (
        <>
          <button className="leftArrowStyles" onClick={goToPrevious}>
            ‹
          </button>
          <button className="rightArrowStyles" onClick={goToNext}>
            ›
          </button>
        </>
      )}
    </div>
  );
}

export default SlideLocation;
