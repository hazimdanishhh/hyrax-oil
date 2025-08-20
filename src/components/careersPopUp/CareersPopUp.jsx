import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./CareersPopUp.scss";
import ButtonRouter from "../buttons/ButtonRouter";
import {
  BuildingOfficeIcon,
  ClockIcon,
  FactoryIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  fadeInWithEase,
  staggerContainer,
  staggerContainerFast,
} from "../../functions/motionUtils";

function ProductPopUp({ careers, onClose }) {
  const productOverlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productOverlayRef.current &&
        !productOverlayRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      className="careers-pop-up"
      ref={productOverlayRef}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
    >
      <motion.div
        className="careers-pop-up-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerFast}
      >
        <svg
          className="careers-close-icon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="none"
          viewBox="0 0 24 24"
          onClick={onClose}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <div className="productPopUpHeader">
          <motion.h3
            className="textRegular textM productPopUpTitle"
            variants={fadeInWithEase}
          >
            {careers.title}
          </motion.h3>

          <a
            className="careersCardButton careersCardApplyButton"
            href={careers.mailto}
          >
            Apply Now
            <PaperPlaneTiltIcon size="20" />
          </a>
        </div>

        <div className="careersCardTagWrapper">
          {careers.employmentType && (
            <motion.span
              className="textLight careersCardTag"
              variants={fadeInWithEase}
            >
              <ClockIcon size="16" />
              {careers.employmentType}
            </motion.span>
          )}

          {careers.setting && (
            <motion.span
              className="textLight careersCardTag"
              variants={fadeInWithEase}
            >
              <MapPinIcon size="16" />
              {careers.setting}
            </motion.span>
          )}

          {careers.experience &&
            careers.experience.length > 0 &&
            careers.experience.map((level, idx) => (
              <motion.span
                key={idx}
                className="textLight careersCardTag"
                variants={fadeInWithEase}
              >
                {level}
              </motion.span>
            ))}
        </div>

        <a
          className="careersCardLocationWrapper"
          href={careers.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
        >
          {careers.location === "Kuala Lumpur HQ, Malaysia" ? (
            <BuildingOfficeIcon size="20" />
          ) : careers.location === "Meru Lube Oil Blending Plant, Malaysia" ? (
            <FactoryIcon size="20" />
          ) : null}
          {careers.location}
        </a>

        <motion.hr variants={fadeInWithEase} />

        <div className="careers-pop-up-details">
          <motion.h4 variants={fadeInWithEase} className="textRegular textXS">
            Role Description
          </motion.h4>
          <motion.p variants={fadeInWithEase}>{careers.description}</motion.p>
        </div>

        <motion.hr variants={fadeInWithEase} />

        <div className="careers-pop-up-details">
          <motion.h4 variants={fadeInWithEase} className="textRegular textXS">
            Key Responsibilities
          </motion.h4>
          <ul>
            {careers.responsibilities &&
              careers.responsibilities.length > 0 &&
              careers.responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  className="textLight careersCardDetailList"
                  variants={fadeInWithEase}
                >
                  {responsibility}
                </motion.li>
              ))}
          </ul>
        </div>

        <motion.hr variants={fadeInWithEase} />

        <div className="careers-pop-up-details">
          <motion.h4 variants={fadeInWithEase} className="textRegular textXS">
            Requirements
          </motion.h4>
          <ul>
            {careers.requirements &&
              careers.requirements.length > 0 &&
              careers.requirements.map((requirement, idx) => (
                <motion.li
                  key={idx}
                  className="textLight careersCardDetailList"
                  variants={fadeInWithEase}
                >
                  {requirement}
                </motion.li>
              ))}
          </ul>
        </div>

        <div className="careers-pop-up-details end">
          <motion.h4 variants={fadeInWithEase} className="textRegular textXS">
            Benefits
          </motion.h4>
          <ul>
            {careers.benefits &&
              careers.benefits.length > 0 &&
              careers.benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  className="textLight careersCardDetailList"
                  variants={fadeInWithEase}
                >
                  {benefit}
                </motion.li>
              ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductPopUp;
