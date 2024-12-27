import React, { useRef } from "react";
import "./CarouselSlider.scss"; // Ensure to style as needed
import NavCard from "../../navbar/NavCard";

const CarouselSlider = ({ items }) => {
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
      <h2 className="carousel-title">Browse Our Product Segments</h2>

      <div className="carousel-slider-container">
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
            />
          ))}
        </div>
        <button className="carousel-btn right" onClick={() => scroll("right")}>
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
      </div>
    </>
  );
};

export default CarouselSlider;
