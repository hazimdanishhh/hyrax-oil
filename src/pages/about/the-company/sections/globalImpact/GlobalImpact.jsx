import { motion } from "framer-motion";
import React from "react";
import "./GlobalImpact.scss";
import Counter from "../../../../components/counter/Counter";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../../functions/motionUtils";

function GlobalImpact() {
  return (
    <>
      <section className="sectionDark">
        <motion.div
          className="sectionWrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="sectionContent">
            <div className="globalImpactHeader">
              <motion.h2
                className="textRegular textXL"
                variants={fadeInWithEase}
              >
                Our Global Impact
              </motion.h2>
              <motion.p className="textLight textXS" variants={fadeInWithEase}>
                Today, Hyrax Oil is a global force in the lubricants industry,
                delivering superior solutions to over 40 countries worldwide.
                Operating advanced blending plants in Malaysia, Sri Lanka and
                South Africa, and supported by more than 90 highly skilled
                professionals, we produce and distribute over 80 million liters
                of premium lubricants annually. Our dedication to quality,
                innovation, and sustainable practices continues to redefine
                industry standards and strengthen partnerships globally.
              </motion.p>
            </div>
            <motion.div
              className="company-impact-cards-wrapper"
              variants={fadeInWithEase}
            >
              <div className="company-impact-cards">
                <Counter end={3} duration={1} />
                <p>Countries with Lube Oil Blending Plants</p>
              </div>
              <div className="company-impact-cards">
                <div className="company-impact-digit">
                  <Counter end={40} duration={1.5} />
                  <div className="company-impact-digit-plus textRegular textXXL">
                    +
                  </div>
                </div>
                <p>Countries Served Worldwide</p>
              </div>
              <div className="company-impact-cards">
                <div className="company-impact-digit">
                  <Counter end={90} duration={2} />
                  <div className="company-impact-digit-plus textRegular textXXL">
                    +
                  </div>
                </div>
                <p>Total Skilled Employees Globally</p>
              </div>
              <div className="company-impact-cards">
                <div className="company-impact-digit">
                  <Counter end={80} duration={2.5} />
                  <div className="company-impact-digit-plus textRegular textXXL">
                    M+
                  </div>
                </div>
                <p>Liters of Lubricants Delivered Annually</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default GlobalImpact;
