import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Footer from "../../Footer";
import "./OurLeaders.scss";
import { Link, Outlet } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import ButtonRouter from "../../components/buttons/ButtonRouter";
import LeaderCard from "./components/leader-card/LeaderCard";
import { management } from "./components/leader-card/management";
import LeaderPopUp from "./components/leader-pop-up/LeaderPopUp";
import { directors } from "./components/leader-card/directors";
import { dHZ } from "./components/leader-card/dHZ";

function OurLeaders() {
  const [activePopup, setActivePopup] = useState(null);

  const openOverlay = (leader) => {
    setActivePopup(leader);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    document.title = "Hyrax Oil | About - Our Leaders";
  }, []);

  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <Hero
        image='url("./about/our-leaders-background.webp")'
        crumble="About"
        crumbleLink="/about/the-company"
        title="Our Leaders"
        desc="Meet the visionaries behind Hyrax Oil, driven by a commitment to innovation, excellence, and sustainability, guiding the company toward a brighter and more dynamic future."
      />

      {/* FOUNDER SECTION */}
      <div className="founder-section-background">
        <div className="founder-section-wrapper">
          <div className="founder-section-content">
            <div className="founder-section-header">
              <h2>
                Message from the <br />
                <span>Founder & Group Executive Chairman</span>
                <br />
                YBhg. Dato' Hazimah Zainuddin
              </h2>
              <p>
                At Hyrax Oil, we are driven by a relentless commitment to
                excellence in every aspect of our business. Our dedicated team
                is the cornerstone of our success, with each individual
                contributing meaningfully toward fostering a culture of
                innovation and quality. <br />
                <br />
                The expertise and teamwork of our people have positioned Hyrax
                Oil as a leader in an increasingly competitive global market.
                This unwavering pursuit of excellence is not only reflected in
                our organizational achievements but also in the exceptional
                quality of our products.
                <br />
                <br />
                Our Hyrax brand products are manufactured to meet the highest
                standards, adhering to stringent specifications and earning
                certifications from renowned international regulatory bodies,
                including the American Petroleum Institute, MTU Friedrichshafen
                GmbH of Germany, and Doble Engineering Company of the USA.
                <br />
                <br />
                With a strong foundation of superior product quality and a
                dedicated workforce, we have successfully expanded our footprint
                beyond Malaysia, reaching over 35 countries worldwide.
                <br />
                <br />
                As we look to the future, Hyrax Oil remains steadfast in our
                mission to deliver excellence, foster innovation, and uphold the
                trust of our partners and customers globally.
              </p>
              <div
                className="founder-section-button"
                onClick={() => openOverlay(dHZ[0])}
                role="button"
                tabIndex="0"
              >
                <ButtonRouter
                  name={"Learn More"}
                  link={"#"}
                  type={"button-type-1"}
                />
              </div>
            </div>
            <img
              className="founder-section-img"
              src="./about/dato-hazimah.webp"
              alt="Dato' Hazimah Zainuddin"
            />
          </div>
        </div>
      </div>

      {/* BOARD OF DIRECTORS SECTION */}
      <div className="BOD-section-background">
        <div className="BOD-section-wrapper">
          <div className="BOD-section-header">
            <h2 className="BOD-section-title">Board of Directors</h2>
            <hr />
          </div>
          <div className="BOD-layout">
            {directors.map((leader, index) => (
              <LeaderCard
                key={index}
                src={leader.src}
                alt={leader.alt}
                name={leader.name}
                title={leader.title}
                link={leader.link}
                onClick={() => openOverlay(leader)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MANAGEMENT SECTION */}
      <div className="BOD-section-background">
        <div className="BOD-section-wrapper">
          <div className="BOD-section-header">
            <h2 className="BOD-section-title">Management</h2>
            <hr />
          </div>
          <div className="BOD-layout">
            {management.map((leader, index) => (
              <LeaderCard
                key={index}
                src={leader.src}
                alt={leader.alt}
                name={leader.name}
                title={leader.title}
                link={leader.link}
                onClick={() => openOverlay(leader)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT POP UP */}
      {activePopup && (
        <LeaderPopUp leader={activePopup} onClose={closeOverlay} />
      )}

      <Footer />

      <Outlet />
    </>
  );
}

export default OurLeaders;
