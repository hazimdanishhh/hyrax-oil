import "./Careers.scss";
import Hero from "../../components/hero/Hero";
import background from "/src/assets/careers/careersBackground.webp";
import CareersPopUp from "../../components/careersPopUp/CareersPopUp";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { careersList } from "../../data/careersList";
import CareersCard from "../../components/careersCard/CareersCard";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";

function Page() {
  const [activePopup, setActivePopup] = useState(null);

  const openOverlay = (careers) => {
    setActivePopup(careers);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  return (
    <main>
      <Hero
        image={background}
        crumble="Home"
        crumbleLink="/"
        title="Careers"
        desc="Join our team and be part of something great! Explore our career opportunities and apply today."
      />
      <section className="sectionLight">
        <div className="sectionWrapper">
          <motion.div
            className="sectionContent careersOverviewContent"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="textRegular textXXL"
              variants={fadeInWithEase}
            >
              We Are Hiring!
            </motion.h2>
            <motion.p className="textLight textXS" variants={fadeInWithEase}>
              Whether you're just starting out or bringing years of experience,
              explore our current openings and discover where your journey with
              us begins.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <motion.ul
              className="careersCardLayout"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {careersList.map((careers, index) => (
                <CareersCard
                  key={index}
                  title={careers.title}
                  description={careers.description}
                  googleMaps={careers.googleMaps}
                  location={careers.location}
                  employmentType={careers.employmentType}
                  setting={careers.setting}
                  experience={careers.experience}
                  onClick={() => openOverlay(careers)}
                  mailto={careers.mailto}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* PRODUCT POP UP */}
      <AnimatePresence>
        {activePopup && (
          <CareersPopUp careers={activePopup} onClose={closeOverlay} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Page;
