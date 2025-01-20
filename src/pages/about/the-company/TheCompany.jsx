import React from "react";
import "./TheCompany.scss";
import Layout from "../../Layout";
import Footer from "../../Footer";
import Hero from "../../components/hero/Hero";
import MarketMap from "../../components/market-map/MarketMap";

function TheCompany() {
  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <Hero
        image='url("./the-company-background.webp")'
        crumble="About"
        crumbleLink="/about/the-company"
        title="The Company"
        desc="The Company"
      />

      <MarketMap />

      <Footer />
    </>
  );
}

export default TheCompany;
