import React from "react";
import "./CorporateVideo.scss";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../../functions/motionUtils";

function CorporateVideo() {
  return (
    <>
      <section className="sectionDark">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <motion.div
              className="corporateVideoHeader"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                className="textRegular textXL"
                variants={fadeInWithEase}
              >
                Our Corporate Video
              </motion.h2>
              <motion.p className="textLight textXS" variants={fadeInWithEase}>
                Step into the world of Hyrax Oil and discover how we’re driving
                innovation, sustainability, and excellence in the lubricants and
                transformer oils industry. Our corporate video showcases our
                global presence, cutting-edge manufacturing capabilities, and
                unwavering commitment to powering industries and protecting
                engines worldwide. From our advanced blending plants to our
                dedicated team of experts, see how Hyrax Oil delivers premium
                lubricants trusted in over 35 countries.
              </motion.p>
            </motion.div>
            <motion.iframe
              className="the-company-video"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/Vwn7uje9Cog?si=b4PVQI7XrVPp0TOV"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            ></motion.iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default CorporateVideo;
