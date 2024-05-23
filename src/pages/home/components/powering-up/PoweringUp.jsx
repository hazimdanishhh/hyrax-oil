import React from 'react';
import "./poweringUp.scss";
import { Link } from "react-router-dom";

function PoweringUp() {
  return (
    <div className='powering-background'>
      <div className='bg-gradient'>
        <div className='section-link-wrapper'>
          <div className='text'>
            <h2 className='title'>Powering Up The World</h2>

            <p className='desc'>Apart from automotive, industrial and marine lubricants, we are the world’s leading supplier of transformer oils with the sought after products due to our trusted quality and wide range offering on the market.  We can support you with industrial knowledge, solution recommendations and technical services.</p>
          </div>

          <Link className='link-div' to="/contact" >
            <span className='link'>contact us</span>
            <img className='link-arrow' src="./link-arrow.svg" alt="Link Arrow" />
          </Link>
          </div>
        </div>
    </div>
  )
}

export default PoweringUp;