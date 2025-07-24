import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./CareersPopUp.scss";
import ButtonRouter from "../buttons/ButtonRouter";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
            </svg>
          </a>
        </div>

        <div className="careersCardTagWrapper">
          {careers.employmentType && (
            <motion.span
              className="textLight careersCardTag"
              variants={fadeInWithEase}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#f26f27"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
              {careers.employmentType}
            </motion.span>
          )}

          {careers.setting && (
            <motion.span
              className="textLight careersCardTag"
              variants={fadeInWithEase}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#f26f27"
                viewBox="0 0 256 256"
              >
                <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
              </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
          </svg>
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
                  {/* You can reuse one of your SVGs here or create a new one */}
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
                  {/* You can reuse one of your SVGs here or create a new one */}
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
                  {/* You can reuse one of your SVGs here or create a new one */}
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
