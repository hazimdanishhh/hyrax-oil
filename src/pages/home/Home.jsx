import React, { useEffect } from 'react'
import Layout from '../Layout'
import "./home.scss";
import Carousel from './components/carousel/Carousel';
import Footer from '../Footer';
import SectionLink from './components/section-link/SectionLink';
import TrustQuality from './components/trust-our-quality/TrustQuality';
import PoweringUp from './components/powering-up/PoweringUp';

function Home() {
  useEffect(() => {
    document.title = 'Hyrax Oil | Better Oil, Better Care'; // Quick solution
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <Layout />
      
      {/* CAROUSEL TOP SECTION */}
      <section id="#">
        <Carousel />
      </section>

      {/* BEST LUBRICANTS SECTION */}
      <section id="best-lubricants">
        <div>
          <h2>Only The Best Lubricants For The World</h2>
        </div>
      </section>

      {/* LEADING LUBE EXPERT */}
      <section id='lube-expert'>
        <div>
          <h2>Leading Lubricants Expert in the Industry</h2>
        </div>
      </section>

      {/* TRUST OUR QUALITY */}
      {/* <section> */}
        <TrustQuality />
      {/* </section> */}

      <section>
        Labs, Engine, Racetrack Cards
      </section>

      {/* POWERING UP THE WORLD */}
      {/* <section> */}
        <PoweringUp />
      {/* </section> */}

      {/* Hyrax TFO */}
      <section>
        <div>
          <h2>Hyrax Transformer Oils &#40;TFO&#41;</h2>
        </div>
      </section>

      {/* TFO Video Production Process */}
      <section>
        <div>
          <h2>Our TFO's Stringent Production Process</h2>
        </div>
      </section>

      {/* About Us Summary */}
      {/* <section> */}
        <SectionLink />
      {/* </section> */}

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home