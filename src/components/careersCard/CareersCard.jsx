import { motion } from "framer-motion";
import "./CareersCard.scss";
import { fadeInWithEase } from "../../functions/motionUtils";
import {
  BuildingOfficeIcon,
  ClockIcon,
  FactoryIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react/dist/ssr";
import { MapPin } from "@phosphor-icons/react";

function CareersCard({
  title,
  description,
  googleMaps,
  location,
  employmentType,
  setting,
  experience,
  onClick,
  mailto,
}) {
  return (
    <motion.li className="careersCard" variants={fadeInWithEase}>
      <h3 className="textRegular textM">{title}</h3>
      <p>{description}</p>
      <a
        className="careersCardLocationWrapper"
        href={googleMaps}
        target="_blank"
        rel="noopener noreferrer"
      >
        {location === "Kuala Lumpur HQ, Malaysia" ? (
          <BuildingOfficeIcon size="20" />
        ) : location === "Meru Lube Oil Blending Plant, Malaysia" ? (
          <FactoryIcon size="20" />
        ) : null}
        {location}
      </a>
      <div className="careersCardTagWrapper">
        {employmentType && (
          <span className="textLight careersCardTag">
            <ClockIcon size="16" />
            {employmentType}
          </span>
        )}

        {setting && (
          <span className="textLight careersCardTag">
            <MapPinIcon size="16" />
            {setting}
          </span>
        )}

        {experience &&
          experience.length > 0 &&
          experience.map((level, idx) => (
            <span key={idx} className="textLight careersCardTag">
              {level}
            </span>
          ))}
      </div>
      <div className="careersCardButtonWrapper">
        <button className="careersCardButton" onClick={onClick}>
          View Job Details
        </button>
        <a className="careersCardButton careersCardApplyButton" href={mailto}>
          Apply Now
          <PaperPlaneTiltIcon size="16" />
        </a>
      </div>
    </motion.li>
  );
}

export default CareersCard;
