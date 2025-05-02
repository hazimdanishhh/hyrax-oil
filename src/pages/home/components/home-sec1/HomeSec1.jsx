import React, { useState } from "react";
import "./HomeSec1.scss";
import { motion } from "framer-motion";

function HomeSec1() {
  const youtubeID = useState("R9ePLCiB8_8");

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="home-sec1">
      <div className="home-sec1-wrapper">
        <motion.div
          className="home-sec1-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 className="home-sec1-title" variants={childVariants}>
            Only The Best Lubricants For The World
          </motion.h3>

          <motion.p className="home-sec1-desc" variants={childVariants}>
            By leveraging cutting-edge technology and extensive industry
            knowledge, Hyrax Oil continually develops lubricants that{" "}
            <span>surpass industry standards</span> and consistently deliver{" "}
            <span>superior performance</span>.
          </motion.p>

          <motion.p className="home-sec1-desc" variants={childVariants}>
            We always ensure our products are engineered to meet our customers’
            expectations, making it the preferred choice for those who demand
            only the best in lubrication.
          </motion.p>
        </motion.div>

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

        <motion.img
          src="./home/Sec1-BG.webp"
          alt="Hyrax Platineum"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default HomeSec1;
