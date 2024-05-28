import React, { useState, useEffect, useRef } from "react";
import images from "./images";
import "./carousel.scss";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds
    return () => clearInterval(interval);
  }, []);

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  // Touch Slider for Mobile Use
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image.src})` }}
          alt={image.alt}
        ></div>
      ))}

      <div className="carousel-gradient">
        <div className="carousel-wrapper">
          <div className="carousel-text">
            <h2 className="carousel-title">{images[currentIndex].title}</h2>
            <a className="carousel-link-div" href={images[currentIndex].href}>
              <span className="carousel-link">read more</span>
              <img
                className="link-arrow"
                src="./link-arrow.svg"
                alt="Link Arrow"
              />
            </a>
          </div>

          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
