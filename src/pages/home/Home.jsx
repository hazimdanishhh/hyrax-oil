import React, { useEffect } from "react";
import Layout from "../Layout";
import "./home.scss";
import Carousel from "./components/carousel/Carousel";
import Footer from "../Footer";
import SectionLink from "./components/section-link/SectionLink";
import HomeSec2 from "./components/home-sec2/HomeSec2";
import PoweringUp from "./components/powering-up/PoweringUp";
import CarouselSlider from "../components/carousel-slider/CarouselSlider";
import { productSegments } from "../navbar/components/nav-products/NavProductSegments";
import HomeSec1 from "./components/home-sec1/HomeSec1";
import Seo from "../../components/Seo";

function Home() {
  return (
    <>
      <Seo
        title="The World's Top Quality Lubricants | Hyrax Oil - Better Oil, Better Care"
        description="Hyrax Oil has been honored with the National Mark of Malaysian Brand award, acknowledging its exceptional, top-quality, and distinctive products."
        image="./og-images/home.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Hyrax Oil",
          url: "https://hyraxoil.com/",
          logo: "./logo.png",
          description:
            "Web design and development studio in Malaysia offering digital solutions.",
          sameAs: [
            "https://twitter.com/hyraxoilofficial",
            "https://linkedin.com/company/hyrax-oil-sdn-bhd",
          ],
        }}
      />
      {/* NAVBAR */}
      <Layout />

      {/* CAROUSEL TOP SECTION */}
      <Carousel />

      {/* BEST LUBRICANTS SECTION */}
      <section id="home-sec1">
        <HomeSec1 />
      </section>

      {/* LEADING LUBE EXPERT */}
      <section id="home-sec2">
        <CarouselSlider items={productSegments} isHomePage="Yes" />
      </section>

      {/* TRUST OUR QUALITY */}
      <div id="trust-quality">
        <HomeSec2 />
      </div>

      <section>Labs, Engine, Racetrack Cards</section>

      {/* POWERING UP THE WORLD */}
      <div id="powering-up">
        <PoweringUp />
      </div>

      {/* Hyrax TFO */}
      <section id="tfo">
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
    </>
  );
}

export default Home;
