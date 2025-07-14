import React from "react";
import { Link } from "react-router-dom";
import "./NavCard.scss";
import { motion } from "framer-motion";
import { fadeInWithEase } from "../../functions/motionUtils";

function NavCard({ src, alt, title, link, styleLink, styleOverlay }) {
  return (
    <>
      <motion.li style={{ listStyle: "none" }} variants={fadeInWithEase}>
        <Link className={styleLink} to={link}>
          <img src={src} alt={alt} className="nav-card-img" />
          <div className={styleOverlay}>
            <div className="nav-title">
              <h3>{title}</h3>
            </div>
          </div>
        </Link>
      </motion.li>
    </>
  );
}

export default NavCard;
