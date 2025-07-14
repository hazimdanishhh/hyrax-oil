import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeInWithEase } from "/src/functions/motionUtils";

function Hero({ image, crumble, crumbleLink, title, desc, logo }) {
  return (
    <>
      <motion.div
        className="hero-background"
        style={{
          backgroundImage: image,
        }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-gradient">
          <motion.div
            className="hero-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="hero-crumble"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to={crumbleLink}>{crumble}</Link>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m10 16 4-4-4-4"
                />
              </svg>
              {title}
            </motion.div>

            {logo && (
              <motion.img
                src={logo}
                alt="Product Brand Logo"
                className="hero-logo"
                variants={fadeInWithEase}
              />
            )}

            <div className="hero-text-container">
              <motion.h1
                className="textRegular textXL"
                variants={fadeInWithEase}
              >
                {title}
              </motion.h1>

              <motion.p
                className="hero-desc textLight textM"
                variants={fadeInWithEase}
              >
                {desc}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
