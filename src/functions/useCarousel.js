import { useState, useEffect, useRef } from "react";

export default function useCarousel(images, autoplayDelay = 10000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef(null);

  // Start Autoplay on Load
  function startAutoplay() {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayDelay);
  }

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [images, autoplayDelay]);

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
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 100) {
      // Swiped left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      resetAutoplay();
    } else if (delta < -50) {
      // Swiped right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      resetAutoplay();
    }
  };

  return {
    currentIndex,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
