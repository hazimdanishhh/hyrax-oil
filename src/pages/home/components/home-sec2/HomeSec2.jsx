import React from "react";
import "./HomeSec2.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ButtonRouter from "../../../components/buttons/ButtonRouter";
import {
  staggerContainer,
  fadeInWithEase,
} from "../../../../functions/motionUtils.js";

function HomeSec2() {
  return (
    <div className="home-sec2">
      <div className="home-sec2-wrapper">
        <motion.div
          className="home-sec2-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="home-sec2-title" variants={fadeInWithEase}>
            The Quality You Deserve
          </motion.h2>

          <motion.p className="home-sec2-desc" variants={fadeInWithEase}>
            Our dedication and commitment towards quality has earned us the{" "}
            <span>recognition, key certifications and product approvals</span>{" "}
            which include:
          </motion.p>
        </motion.div>

        <motion.div
          className="home-sec2-logos-wrapper"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            className="home-sec2-link"
            to="https://www.api.org/"
            target="__blank"
          >
            <motion.img
              className="home-sec2-logo"
              src="./logos/API-Logo.webp"
              alt="American Petroleum Institute"
              variants={fadeInWithEase}
            />
          </Link>

          <Link
            className="home-sec2-link"
            to="https://www.acea.auto/"
            target="__blank"
          >
            <motion.img
              className="home-sec2-logo"
              src="./logos/ACEA-Logo.webp"
              alt="European Automobile Manufacturers Association"
              variants={fadeInWithEase}
            />
          </Link>

          <Link
            className="home-sec2-link"
            to="https://www.mtu-solutions.com/eu/en.regionselect.html"
            target="__blank"
          >
            <motion.img
              className="home-sec2-logo"
              src="./logos/MTU-Logo.webp"
              alt="MTU Friedrichshafen GmbH"
              variants={fadeInWithEase}
            />
          </Link>

          <Link
            className="home-sec2-link"
            to="https://www.doble.com/"
            target="__blank"
          >
            <motion.img
              className="home-sec2-logo"
              src="./logos/Doble-Logo.webp"
              alt="Doble Engineering Company"
              variants={fadeInWithEase}
            />
          </Link>
        </motion.div>

        <ButtonRouter
          name="Read More"
          type="button-type-2"
          link="/about/certifications"
        />
      </div>
    </div>
  );
}

export default HomeSec2;
