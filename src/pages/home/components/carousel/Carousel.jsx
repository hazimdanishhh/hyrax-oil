import React from 'react';
import "./carousel.scss";

function Carousel() {
  return (
    <div className="home-top">
      <div className='home-top-gradient'>
        <div className='home-top-wrapper'>
          <div className='home-top-text'>
            <h2 className='home-top-title'>We Are The Lubricants Experts</h2>
            <a className='home-top-link-div' href="#lube-expert"><span className='home-top-link'>read more</span><img className='link-arrow' src="./link-arrow.svg" alt="Link Arrow" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel