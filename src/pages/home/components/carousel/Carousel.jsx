import React, { useState, useEffect, useRef } from "react";
import images from "./images";
import "./carousel.scss";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef(null);

  // Start Autoplay on Load
  function startAutoplay() {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
  }

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef);
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
    if (touchStartX.current - touchEndX.current > 100) {
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
    <>
      <motion.section
        className="home-carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`home-carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image.src})` }}
            alt={image.alt}
          ></div>
        ))}

        <div
          className="home-carousel-gradient"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="home-carousel-wrapper">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`home-carousel-text ${
                  index === currentIndex ? "active" : ""
                }`}
                initial={{ x: -600 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="home-carousel-title">{image.title}</h2>
                {image.desc ? (
                  <h3 className="home-carousel-desc">{image.desc}</h3>
                ) : null}
                <Link className="home-carousel-link-div" to={image.href}>
                  <span className="home-carousel-link">Learn More</span>
                  <svg
                    className="link-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"></path>
                  </svg>
                </Link>
              </motion.div>
            ))}

            <div className="home-carousel-indicators">
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
      </motion.section>

      <Outlet />
    </>
  );
}

export default Carousel;
