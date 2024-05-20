import React from 'react';
import "./sectionLink.scss";
import { Link } from "react-router-dom";


function SectionLink() {
  return (
    <div className='background'>
      <div className='bg-gradient'>
        <div className='section-link-wrapper'>
          <div className='text'>
            <h2 className='title'>About Us</h2>
            <p className='desc'>Incorporated in Malaysia in 1991, Hyrax Oil Sdn Bhd &#40;Hyrax Oil&#41; has achieved a remarkable growth since its inception.</p>
            <p className='desc'>With {new Date().getFullYear() - 1991} years of experience, Hyrax Oil has rapidly grown from its humble beginning as a transformer oils trading company to become an established manufacturer and a global player in the manufacturing of lubricants with a full range of top quality and high-performance lubricants; including transformer oils, specialty products and other petroleum derivatives.</p>
          </div>
          <Link to="/about" className='link-div'>
            <span className='link'>read more</span>
            <img className='link-arrow' src="./link-arrow.svg" alt="Link Arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SectionLink