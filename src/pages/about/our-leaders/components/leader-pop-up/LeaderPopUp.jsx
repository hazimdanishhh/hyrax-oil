import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./LeaderPopUp.scss";

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
    <motion.div
      className="leader-pop-up"
      ref={productOverlayRef}
      initial={{ opacity: 1, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="leader-pop-up-content">
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
          <div className="leader-pop-up-img-wrapper">
            <img
              loading="lazy"
              className="leader-pop-up-img"
              src={leader.src}
              alt={leader.alt}
            />
          </div>
          <div className="leader-pop-up-title">
            <h3>{leader.name}</h3>
            <h5>{leader.title}</h5>
          </div>
        </div>

        <div className="leader-pop-up-body">
          {leader.description.map((paragraph, index) => (
            <p key={index} className="desc-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default LeaderPopUp;
