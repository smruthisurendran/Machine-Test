import React, { useState } from 'react';
import "../styles/Slider.css";

const images = [
  'https://via.placeholder.com/1200x400?text=Slide+1',
  'https://via.placeholder.com/1200x400?text=Slide+2',
  'https://via.placeholder.com/1200x400?text=Slide+3',
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-images"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="slider-btn left" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="slider-btn right" onClick={handleNext}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
