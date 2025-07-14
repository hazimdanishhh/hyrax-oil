import React from "react";
import "./VisionMission.scss";
import VisionCard from "../../../../../components/vision/VisionCard";
import visionList from "../../../../../data/visionList";

function VisionMission() {
  return (
    <>
      <section className="sectionLight">
        <div className="sectionWrapper">
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
      </section>
    </>
  );
}

export default VisionMission;
