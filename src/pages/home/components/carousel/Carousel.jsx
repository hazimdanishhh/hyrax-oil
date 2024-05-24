import React, { useState } from 'react';
import "./carousel.scss";
import carouselList from "./carouselList";
import {motion} from "framer-motion";

function Carousel() {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(slide === carouselList.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? carouselList.length - 1 : slide - 1);
  }

  // const timeout = setInterval(sliderTimeout, 3000);

  function sliderTimeout() {
    setSlide((slide === carouselList.length - 1) ? 0 : slide + 1);
    // setTimeout(setSlide(slide === carouselList.length - 1 ? 0 : slide + 1), 3000);
  }

  function resetSliderTimeout() {
    clearTimeout(timeout);
    sliderTimeout();
  }

  return (
    <motion.div
      className="home-carousel"
      style={{backgroundImage: `url(${carouselList[slide].url})`}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5, delay:0.3}}
    >
      <div className='home-carousel-gradient'>
        <div className='home-carousel-wrapper'>
          <motion.div
            className='home-carousel-text'
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1.3, delay:0.5}}
          >
            <h2 className='home-carousel-title'>{carouselList[slide].title}</h2>
            <a className='home-carousel-link-div' href={carouselList[slide].href}><span className='home-carousel-link'>read more</span><img className='link-arrow' src="./link-arrow.svg" alt="Link Arrow" /></a>
          </motion.div>

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
      </div>
    </motion.div>
  )
}

export default Carousel