import React, { useState } from "react";
import "./carousel.scss";
import carouselList from "./carouselList";
import { motion } from "framer-motion";

function Carousel() {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(slide === carouselList.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? carouselList.length - 1 : slide - 1);
  }

  return (
    <div className="carousel">

      {carouselList.map((carouselItem, i) => {
        return (
          <>
            <img
            className={
              slide === i ? "carousel-img" : "carousel-img carousel-img-hidden"
            }
            key={i}
            src={carouselItem.src}
            alt={carouselItem.alt}
            />
            <div className='home-top-gradient'>
              <div className='home-top-wrapper'>
                <div className='home-top-text'>
                  <h2 className={slide === i ? 'home-top-title' : "carousel-img carousel-img-hidden"}>{carouselItem.title}</h2>
                  <a className={slide === i ? 'home-top-link-div' : "carousel-img carousel-img-hidden"} href={carouselItem.href}><span className='home-top-link'>read more</span><img className='link-arrow' src="./link-arrow.svg" alt="Link Arrow" /></a>
                </div>

                {/* <div className="indicators">
                  {carouselList.map((_, i) => {
                    return (
                      <button
                        className={
                          slide === i ? "indicator" : "indicator indicator-inactive"
                        }
                        key={i}
                        onClick={() => setSlide(i)}
                      ></button>
                    );
                  })}
                </div> */}
              </div>
            </div>
          </>
        );
      })}

      <div className="indicators">
        {carouselList.map((_, i) => {
          return (
            <button
              className={
                slide === i ? "indicator" : "indicator indicator-inactive"
              }
              key={i}
              onClick={() => setSlide(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;