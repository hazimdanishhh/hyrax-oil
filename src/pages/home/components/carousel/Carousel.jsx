import React from "react";
import images from "./images";
import "./carousel.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { staggerContainer, fadeInWithEase } from "/src/functions/motionUtils";
import useCarousel from "../../../../functions/useCarousel";

function Carousel() {
  const {
    currentIndex,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel(images, 10000); // 10s autoplay delay

  return (
    <>
      <motion.section
        className="home-carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} // IMPORTANT for AnimatePresence
            className="home-carousel-slide"
            style={{ backgroundImage: `url(${images[currentIndex].src})` }}
            alt={images[currentIndex].alt}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          ></motion.div>
        </AnimatePresence>

        <div className="home-carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // Sync text with slide
              className="home-carousel-text"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              <motion.h2
                className="textRegular textXL"
                variants={fadeInWithEase}
              >
                {images[currentIndex].title}
              </motion.h2>
              {images[currentIndex].desc && (
                <motion.h3
                  className="home-carousel-desc textLight textM"
                  variants={fadeInWithEase}
                >
                  {images[currentIndex].desc}
                </motion.h3>
              )}
              <motion.div variants={fadeInWithEase}>
                <Link
                  className="home-carousel-link-div"
                  to={images[currentIndex].href}
                >
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
            </motion.div>
          </AnimatePresence>

          <div className="home-carousel-indicators">
            {images.map((_, index) => (
              <button
                className={`indicatorContainer ${
                  index === currentIndex ? "active" : ""
                }`}
                key={index}
                onClick={() => goToSlide(index)}
              >
                <div className="indicatorBackground">
                  <div className="indicator" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <Outlet />
    </>
  );
}

export default Carousel;
