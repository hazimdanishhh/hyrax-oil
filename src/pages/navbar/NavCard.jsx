import React from "react";
import "./NavCard.scss";
import { motion } from "framer-motion";
import { fadeInWithEase } from "../../functions/motionUtils";

function NavCard({ src, alt, title, link, styleLink, styleOverlay }) {
  return (
    <>
      <motion.li style={{ listStyle: "none" }} variants={fadeInWithEase}>
        <a className={styleLink} href={link}>
          <img src={src} alt={alt} className="nav-card-img" />
          <div className={styleOverlay}>
            <div className="nav-title">
              <h3>{title}</h3>
            </div>
          </div>
        </a>
      </motion.li>
    </>
  );
}

export default NavCard;
