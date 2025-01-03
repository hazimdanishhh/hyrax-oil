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
import { dHZ } from "./components/leader-card/DHZ";

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
        image='url("./public/about/our-leaders-background.png")'
        crumble="About"
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
                At Hyrax Oil, we have a strong desire to excel in all areas of
                our business. Each and every staff in our company plays his or
                her role and contributes to achieve a culture of excellence.{" "}
                <br />
                <br />
                The expertise of our team and their commitment to teamwork are
                key factors in the success of Hyrax Oil in a competitive
                business environment. The strong desire for excellence also
                contributes to quality of the products.
                <br />
                <br />
                The products of Hyrax Oil follow strict specifications and are
                certified by international regulatory standards such as the
                American Petroleum Institute, MTU Friedrichshafen GmbH of
                Germany, and Doble Engineering Company of USA. Due to the
                quality of the products as well as the commitment from the
                staff, in addition to the Malaysian domestic market, we have
                successfully penetrated into more than 35 countries.
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
              src="./public/about/dato-hazimah.png"
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
