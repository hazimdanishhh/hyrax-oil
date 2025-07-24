import { useState } from "react";
import "./OurLeaders.scss";
import Hero from "../../../components/hero/Hero";
import LeaderCard from "../../../components/leader-card/LeaderCard";
import { management } from "../../../data/management";
import LeaderPopUp from "../../../components/leader-pop-up/LeaderPopUp";
import { directors } from "../../../data/directors";

import background from "/src/assets/about/ourLeaders.webp";
import FounderMessage from "./sections/founderMessage/FounderMessage";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../functions/motionUtils";
import DiscoverNext from "../../../components/discoverNextSection/DiscoverNext";
import { aboutSections } from "../../../data/NavAboutSections";

function Page() {
  const [activePopup, setActivePopup] = useState(null);

  const openOverlay = (leader) => {
    setActivePopup(leader);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  return (
    <>
      <main>
        <Hero
          image={background}
          crumble="About"
          crumbleLink="/about"
          title="Our Leaders"
          desc="Meet the visionaries behind Hyrax Oil, driven by a commitment to innovation, excellence, and sustainability, guiding the company toward a brighter and more dynamic future."
        />

        <FounderMessage />

        {/* BOARD OF DIRECTORS SECTION */}
        <section className="BODSection">
          <motion.div
            className="BODsectionwrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="BODSectionHeader">
              <motion.h2
                className="textRegular textL"
                variants={fadeInWithEase}
              >
                Board of Directors
              </motion.h2>
              <hr />
            </div>
            <motion.p className="textLight textXXS" variants={fadeInWithEase}>
              Comprising visionary leaders with decades of experience in the
              lubricants and energy industries, they steer the company with a
              focus on innovation, sustainability, and growth. Their strategic
              insights and unwavering commitment ensure Hyrax Oil remains a
              trusted name in over 40 countries, delivering high-performance
              lubricants and transformer oils that power industries worldwide.
            </motion.p>
            <div className="BOD-layout">
              {directors.map((leader, index) => (
                <LeaderCard
                  key={index}
                  src={leader.src}
                  alt={leader.alt}
                  name={leader.name}
                  title={leader.title}
                  onClick={() => openOverlay(leader)}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* MANAGEMENT SECTION */}
        <section className="BODSection">
          <motion.div
            className="BODsectionwrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="BODSectionHeader">
              <motion.h2
                className="textRegular textL"
                variants={fadeInWithEase}
              >
                Management
              </motion.h2>
              <hr />
            </div>
            <motion.p className="textLight textXXS" variants={fadeInWithEase}>
              With a diverse team of skilled professionals, we blend technical
              expertise, operational excellence, and customer-centric values to
              deliver premium lubricants and transformer oils across global
              markets. Their leadership empowers Hyrax Oil to innovate, expand,
              and maintain the highest quality in every drop we produce.
            </motion.p>
            <div className="BOD-layout">
              {management.map((leader, index) => (
                <LeaderCard
                  key={index}
                  src={leader.src}
                  alt={leader.alt}
                  name={leader.name}
                  title={leader.title}
                  onClick={() => openOverlay(leader)}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* PRODUCT POP UP */}
        <AnimatePresence>
          {activePopup && (
            <LeaderPopUp leader={activePopup} onClose={closeOverlay} />
          )}
        </AnimatePresence>

        <DiscoverNext
          subheading="Our Accomplishments"
          cardData={aboutSections[2]}
        />
      </main>
    </>
  );
}

export default Page;
