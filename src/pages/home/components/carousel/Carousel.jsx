import React, { useState, useEffect, useRef } from "react";
import images from "./images";
import "./carousel.scss";
import { motion } from "framer-motion";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef(null);

  // Start Autoplay on Load
  function startAutoplay() {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds
  }

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(interval);
  }, []);

  function resetAutoplay() {
    clearInterval(intervalRef.current);
    startAutoplay();
  }

  function goToSlide(index) {
    setCurrentIndex(index);
    resetAutoplay();
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
      resetAutoplay();
    } else if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      resetAutoplay();
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
          {images.map((image, index) => (
            <>
              <motion.div
                key={index}
                className={`carousel-text ${
                  index === currentIndex ? "active" : ""
                }`}
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="carousel-title">{image.title}</h2>
                <a className="carousel-link-div" href={image.href}>
                  <span className="carousel-link">read more</span>
                  <img
                    className="link-arrow"
                    src="./link-arrow.svg"
                    alt="Link Arrow"
                  />
                </a>
              </motion.div>
            </>
          ))}

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
