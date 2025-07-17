import React from "react";
import { motion } from "framer-motion";
import "./VisionCard.scss";

function VisionCard({ src, alt, title, desc }) {
  return (
    <motion.div
      className="vision-mission-card"
      initial={{ y: 50, scale: 1 }}
      whileInView={{ y: 0 }}
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <div className="vision-mission-header">
        <img className="vision-icon" src={src} alt={alt} />

        <h3 className="textRegular textS">{title}</h3>
      </div>
      <p className="vision-mission-desc">{desc}</p>
    </motion.div>
  );
}

export default VisionCard;
