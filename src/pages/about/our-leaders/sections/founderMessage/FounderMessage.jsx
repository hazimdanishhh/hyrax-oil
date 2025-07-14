import React from "react";
import "./FounderMessage.scss";
import datoImage from "/src/assets/about/leaderCards/dato-hazimah.webp";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../../functions/motionUtils";

function FounderMessage() {
  return (
    <>
      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="founderMessageContent">
            <motion.div
              className="founder-section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 className="textLight textM" variants={fadeInWithEase}>
                Message from the <br />
                <motion.span
                  className="textRegular textL"
                  variants={fadeInWithEase}
                >
                  Founder & Group Executive Chairman
                </motion.span>
                <br />
                YBhg. Dato' Hazimah Zainuddin
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInWithEase}>
                  At Hyrax Oil, we are driven by a relentless commitment to
                  excellence in every aspect of our business. Our dedicated team
                  is the cornerstone of our success, with each individual
                  contributing meaningfully toward fostering a culture of
                  innovation and quality.
                </motion.span>{" "}
                <br />
                <br />
                <motion.span variants={fadeInWithEase}>
                  The expertise and teamwork of our people have positioned Hyrax
                  Oil as a leader in an increasingly competitive global market.
                  This unwavering pursuit of excellence is not only reflected in
                  our organizational achievements but also in the exceptional
                  quality of our products.
                </motion.span>
                <br />
                <br />
                <motion.span variants={fadeInWithEase}>
                  Our Hyrax brand products are manufactured to meet the highest
                  standards, adhering to stringent specifications and earning
                  certifications from renowned international regulatory bodies,
                  including the American Petroleum Institute, MTU
                  Friedrichshafen GmbH of Germany, and Doble Engineering Company
                  of the USA.
                </motion.span>
                <br />
                <br />
                <motion.span variants={fadeInWithEase}>
                  With a strong foundation of superior product quality and a
                  dedicated workforce, we have successfully expanded our
                  footprint beyond Malaysia, reaching over 35 countries
                  worldwide.
                </motion.span>
                <br />
                <br />
                <motion.span variants={fadeInWithEase}>
                  As we look to the future, Hyrax Oil remains steadfast in our
                  mission to deliver excellence, foster innovation, and uphold
                  the trust of our partners and customers globally.
                </motion.span>
              </motion.p>
            </motion.div>
            <img
              className="founder-section-img"
              src={datoImage}
              alt="Dato' Hazimah Zainuddin"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FounderMessage;
