// Home page

import "./home.scss";
import Carousel from "./sections/carousel/Carousel";
import HomeSec2 from "./sections/home-sec2/HomeSec2";
import PoweringUp from "./sections/powering-up/PoweringUp";
import CarouselSlider from "../../components/carousel-slider/CarouselSlider";
import HomeSec1 from "./sections/home-sec1/HomeSec1";
import { productSegments } from "../../data/NavProductSegments";
import GlobalImpact from "../about/the-company/sections/globalImpact/GlobalImpact";
import CorporateVideo from "../about/the-company/sections/corporateVideo/CorporateVideo";
import PageSectionCard from "../../components/PageSectionCard/PageSectionCard";
import { aboutSections } from "../../data/NavAboutSections";
import DiscoverNext from "../../components/discoverNextSection/DiscoverNext";

export default function Page() {
  return (
    <>
      <main>
        <Carousel />

        <HomeSec1 />

        <CarouselSlider items={productSegments} isHomePage />

        <HomeSec2 />

        <PoweringUp />

        <GlobalImpact />

        <CorporateVideo />

        <DiscoverNext
          subheading="About The Company"
          cardData={aboutSections[0]}
        />
      </main>
    </>
  );
}
