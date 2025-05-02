import React from "react";
import "./HomeSec2.scss";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";
import ButtonRouter from "../../../components/buttons/ButtonRouter";

function HomeSec2() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="home-sec2">
      <div className="home-sec2-wrapper">
        <motion.div
          className="home-sec2-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="home-sec2-title" variants={childVariants}>
            Trust Our Quality
          </motion.h2>

          <motion.p className="home-sec2-desc" variants={childVariants}>
            Our dedication and commitment towards quality has earned us the{" "}
            <span>recognition, key certifications and product approvals</span>{" "}
            which include:
          </motion.p>

          <motion.div
            className="home-sec2-logos-wrapper"
            variants={containerVariants}
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
                variants={childVariants}
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
                variants={childVariants}
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
                variants={childVariants}
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
                variants={childVariants}
              />
            </Link>
          </motion.div>
        </motion.div>

        <ButtonRouter
          name="Read More"
          type="button-type-2"
          link="https://engineoil.api.org/Directory/EolcsResultsDetail?accountId=-1&companyId=10166&resultsUrl=%2FDirectory%2FEolcsResults%3FaccountId%3D-1%26companyName%3DHYRAX%2520OIL"
          target="__blank"
        />
      </div>
    </div>
  );
}

export default HomeSec2;
