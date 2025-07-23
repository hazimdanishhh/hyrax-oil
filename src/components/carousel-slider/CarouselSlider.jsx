import { useRef } from "react";
import "./CarouselSlider.scss";
import NavCard from "../navCard/NavCard";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";

function CarouselSlider({ items, isHomePage }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <section>
        <motion.div
          className="carouselHeader"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isHomePage ? (
            <>
              <motion.h2
                className="carousel-title-home textRegular textL"
                variants={fadeInWithEase}
              >
                Find <span>The Right Oil</span> For Every Application
              </motion.h2>
              <motion.p className="textLight textXS" variants={fadeInWithEase}>Discover the perfect lubricant for every engine and application with Hyrax Oil’s comprehensive product range. Our advanced formulations are designed to deliver superior protection, efficiency, and reliability—no matter the vehicle, machine, or industry.</motion.p>
            </>
          ) : (
            <motion.h2 className="carousel-title textRegular textL" variants={fadeInWithEase}>
              Browse Our Product Segments
            </motion.h2>
          )}
        </motion.div>

        <motion.div
          className="carousel-slider-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button className="carousel-btn left" onClick={() => scroll("left")}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>

          <div className="carousel-slider" ref={carouselRef}>
            {items.map((segment, index) => (
              <NavCard
                key={index}
                src={segment.src}
                alt={segment.alt}
                title={segment.title}
                link={segment.link}
                desc={segment.desc}
                styleLink="nav-card carousel-card"
                styleOverlay="nav-card-overlay carousel-card-overlay"
              />
            ))}
          </div>
          <button
            className="carousel-btn right"
            onClick={() => scroll("right")}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      </section>
    </>
  );
}

export default CarouselSlider;
