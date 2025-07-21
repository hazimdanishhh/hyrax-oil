import React from "react";
import "./History.scss";
import historyList from "../../data/historyList.js";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../functions/motionUtils.js";

function History() {
  return (
    <div className="sectionLight">
      <div className="sectionWrapper historyWrapper">
        <div className="sectionContent historyContent">
          <motion.div
            className="historyHeading"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.p className="textXXS textLight" variants={fadeInWithEase}>
              A Legacy of Innovation and Growth
            </motion.p>
            <motion.h2 className="textXL textRegular" variants={fadeInWithEase}>
              Our Story
            </motion.h2>

            <motion.p className="textLight textXS" variants={fadeInWithEase}>
              Since its founding in 1991 by YBhg. Dato’ Hazimah Zainuddin, Hyrax
              Oil has evolved from a modest transformer oil trading company into
              <span className="textRegular">
                {" "}
                a global leader in high-performance lubricants.{" "}
              </span>
              From establishing its first blending plant in Meru, Klang, to
              expanding into international markets and launching
              state-of-the-art facilities abroad, Hyrax Oil’s journey is marked
              by bold innovations and strategic partnerships. Today, with a
              presence in over 40 countries, the company remains driven by its
              commitment to quality, sustainability, and shaping the future of
              lubrication technology.
            </motion.p>
          </motion.div>
          {historyList.map((item, index) => (
            <div className="historyCard" key={index}>
              {index === 0 && <div className="hr-div"></div>}
              <motion.div
                className="historyCircle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="historyText"
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                <div className="historyTextWrapper">
                  <motion.h3
                    className="historyYear textRegular textM"
                    variants={fadeInWithEase}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p className="historyDesc" variants={fadeInWithEase}>
                    {item.desc}
                  </motion.p>
                </div>

                <motion.img
                  className="historyImg"
                  src={item.src}
                  alt={item.alt}
                  variants={fadeInWithEase}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
