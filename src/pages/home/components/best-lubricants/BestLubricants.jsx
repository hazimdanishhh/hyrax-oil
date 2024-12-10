import React, { useState } from "react";
import "./bestLubricants.scss";
import { motion } from "framer-motion";

function BestLubricants() {
  const youtubeID = useState("R9ePLCiB8_8");

  return (
    <div className="bestlubricants">
      <div className="bestlubricants-wrapper">
        <motion.div
          className="bestlubricants-text"
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h2 className="bestlubricants-title">Our Specialty</h2>
          <h3 className="bestlubricants-title-2">
            Only <span>The Best Lubricants</span> For The World
          </h3>
          <p className="bestlubricants-desc">
            By leveraging cutting-edge technology and extensive industry
            knowledge, Hyrax Oil continually develops lubricants that{" "}
            <span>surpass industry standards</span> and consistently deliver{" "}
            <span>superior performance</span>.
          </p>
          <p className="bestlubricants-desc">
            We always ensure our products are engineered to meet our customers’
            expectations, making it the preferred choice for those who demand
            only the best in lubrication.
          </p>
        </motion.div>
        <motion.iframe
          className="bestlubricants-video"
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
  );
}

export default BestLubricants;
