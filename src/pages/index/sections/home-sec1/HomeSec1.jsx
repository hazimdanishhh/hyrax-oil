import { useState } from "react";
import "./HomeSec1.scss";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";

import image from "/src/assets/home/Hyrax-Platineum-Background-2.webp";

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
              className="home-sec1-title textRegular textXXL"
              variants={fadeInWithEase}
            >
              Only The Best Lubricants For The World
            </motion.h2>

            <motion.p className="home-sec1-desc" variants={fadeInWithEase}>
              By leveraging cutting-edge technology and extensive industry
              knowledge, Hyrax Oil continually develops lubricants that{" "}
              <span>surpass industry standards</span> and consistently deliver{" "}
              <span>superior performance</span>.
            </motion.p>

            <motion.p className="home-sec1-desc" variants={fadeInWithEase}>
              We always ensure our products are engineered to meet our
              customers’ expectations, making it the preferred choice for those
              who demand only the best in lubrication.
            </motion.p>
          </motion.div>

          <motion.iframe
            className="home-sec1-video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/Vwn7uje9Cog?si=b4PVQI7XrVPp0TOV"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.iframe>

          <motion.img
            className="home-sec1-img"
            src={image}
            alt="Hyrax Platineum"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSec1;
