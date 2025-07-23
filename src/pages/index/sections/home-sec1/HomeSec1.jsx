import { useState } from "react";
import "./HomeSec1.scss";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";

import image from "/src/assets/home/Hyrax-Platineum-Background-2.webp";
import PageSectionCard from "../../../../components/PageSectionCard/PageSectionCard";
import { homeSections } from "../../../../data/NavHomeSections";

function HomeSec1() {
  const youtubeID = useState("R9ePLCiB8_8");

  return (
    <section className="sectionLight">
      <div className="sectionWrapper">
        <div className="sectionContent bestLubricantsContent">
          <motion.div
            className="home-sec1-text"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="textRegular textS"
              variants={fadeInWithEase}
            >
              World-Class Lubricants.
              <br />
              Unmatched Performance.
            </motion.h2>

            <motion.p className="home-sec1-desc textLight textXS" variants={fadeInWithEase}>
              At Hyrax Oil, we engineer lubricants that exceed industry standards—delivering unmatched protection, efficiency, and reliability. Backed by cutting-edge technology and decades of expertise, our products are trusted across 40+ countries to power engines, machinery, and industries worldwide. For those who demand only the best, Hyrax is the preferred choice.
            </motion.p>
          </motion.div>

          <motion.ul
            className="homeSectionLayout"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {homeSections.map((segment, index) => (
              <PageSectionCard
                key={index}
                title={segment.title}
                desc={segment.desc}
                link={segment.link}
                background={segment.background}
              />
            ))}
          </motion.ul>

          {/* <motion.iframe
            className="home-sec1-video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/Vwn7uje9Cog?si=b4PVQI7XrVPp0TOV"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.iframe> */}

          {/* <motion.img
            className="home-sec1-img"
            src={image}
            alt="Hyrax Platineum"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default HomeSec1;
