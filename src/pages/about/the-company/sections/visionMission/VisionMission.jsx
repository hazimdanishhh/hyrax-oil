import React from "react";
import "./VisionMission.scss";
import VisionCard from "../../../../../components/vision/VisionCard";
import visionList from "../../../../../data/visionList";
import { fadeInWithEase } from "../../../../../functions/motionUtils";
import { motion } from "framer-motion";

function VisionMission() {
  return (
    <>
      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <motion.h2 className="textRegular textXL" variants={fadeInWithEase}>
              Our Vision & Mission
            </motion.h2>
            <div className="vision-mission-cards-wrapper">
              {visionList.map((item, index) => (
                <VisionCard
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VisionMission;
