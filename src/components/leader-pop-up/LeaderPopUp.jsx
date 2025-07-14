import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./LeaderPopUp.scss";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";

function LeaderPopUp({ leader, onClose }) {
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
    <>
      <motion.div
        className="leader-pop-up"
        ref={productOverlayRef}
        key="modal"
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
          className="leader-pop-up-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <svg
            className="leader-close-icon"
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

          <div className="leader-pop-up-header">
            <motion.div
              className="leader-pop-up-img-wrapper"
              variants={fadeInWithEase}
            >
              <img
                loading="lazy"
                className="leader-pop-up-img"
                src={leader.src}
                alt={leader.alt}
              />
            </motion.div>
            <div className="leader-pop-up-title">
              <motion.h3
                className="textRegular textS"
                variants={fadeInWithEase}
              >
                {leader.name}
              </motion.h3>
              <motion.p className="textLight TextXS" variants={fadeInWithEase}>
                {leader.title}
              </motion.p>
            </div>
          </div>

          <div className="leader-pop-up-body">
            {leader.description.map((paragraph, index) => (
              <motion.p
                key={index}
                className="desc-paragraph"
                variants={fadeInWithEase}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default LeaderPopUp;
