// Home page

import React, { useEffect } from "react";
import "./home.scss";
import Carousel from "./sections/carousel/Carousel";
import SectionLink from "./sections/section-link/SectionLink";
import HomeSec2 from "./sections/home-sec2/HomeSec2";
import PoweringUp from "./sections/powering-up/PoweringUp";
import CarouselSlider from "../components/carousel-slider/CarouselSlider";
import { productSegments } from "../navbar/components/nav-products/NavProductSegments";
import HomeSec1 from "./sections/home-sec1/HomeSec1";

export default function Page() {
  return (
    <>
      <main>
        <Carousel />

        <HomeSec1 />

        <CarouselSlider items={productSegments} isHomePage="Yes" />

        <HomeSec2 />

        <section>Labs, Engine, Racetrack Cards</section>

        <PoweringUp />

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

        <SectionLink />
      </main>
    </>
  );
}
