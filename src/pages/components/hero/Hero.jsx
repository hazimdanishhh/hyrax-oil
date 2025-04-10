import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Hero.scss";
import { AnimatePresence, motion } from "framer-motion";

function Hero({ image, crumble, crumbleLink, title, desc, logo }) {
  return (
    <>
      <div
        className="hero-background"
        style={{
          backgroundImage: image,
        }}
      >
        <div className="hero-gradient">
          <div className="hero-wrapper">
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

            <img src={logo} alt="Product Brand Logo" className="hero-logo" />

            <motion.div
              className="hero-text-container"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="hero-title">{title}</h1>

              <p className="hero-desc">{desc}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Hero;
