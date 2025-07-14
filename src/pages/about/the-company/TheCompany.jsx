import React, { useEffect } from "react";
import Layout from "../../Layout";
import Footer from "../../Footer";
import Hero from "../../../components/hero/Hero";
import MarketMap from "./sections/market-map/MarketMap";
import History from "../../components/history/History";

import background from "/src/assets/about/the-company-background.webp";
import CompanyProfile from "./sections/companyProfile/CompanyProfile";
import VisionMission from "./sections/visionMission/VisionMission";
import GlobalImpact from "./sections/globalImpact/GlobalImpact";
import CorporateVideo from "./sections/corporateVideo/CorporateVideo";

function TheCompany() {
  useEffect(() => {
    document.title = `Hyrax Oil | About - The Company`;
  }, []);

  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <Hero
        image={`url(${background})`}
        crumble="About"
        crumbleLink="/about/the-company"
        title="The Company"
        desc="The World's No. 1 Top Quality Oils and Lubricants"
      />

      <CompanyProfile />

      <MarketMap />

      <VisionMission />

      <GlobalImpact />

      <History />

      <CorporateVideo />

      <Footer />
    </>
  );
}

export default TheCompany;
