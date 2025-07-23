import "./HomeSec2.scss";
import { motion } from "framer-motion";
import ButtonRouter from "../../../../components/buttons/ButtonRouter.jsx";
import {
  staggerContainer,
  fadeInWithEase,
} from "../../../../functions/motionUtils.js";

import image1 from "/src/assets/logos/API-Logo.webp";
import image2 from "/src/assets/logos/ACEA-Logo.webp";
import image3 from "/src/assets/logos/MTU-Logo.webp";
import image4 from "/src/assets/logos/Doble-Logo.webp";

function HomeSec2() {
  return (
    <section className="sectionLight">
      <div className="sectionWrapper">
        <div className="sectionContent">
          <motion.div
            className="home-sec2-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="textL textRegular" variants={fadeInWithEase}>
              Recognized Quality.
              <br />
              Certified Excellence.
            </motion.h2>

            <motion.p className="home-sec2-desc textLight textXS" variants={fadeInWithEase}>
              Our relentless focus on quality has earned Hyrax Oil global recognition, international certifications, and approvals from leading automotive and industrial OEMs. Every product we deliver reflects our commitment to innovation, safety, and sustainability—setting new benchmarks for lubricant performance worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            className="home-sec2-logos-wrapper"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a
              className="home-sec2-link"
              href="https://www.api.org/"
              target="__blank"
            >
              <motion.img
                className="home-sec2-logo"
                src={image1}
                alt="American Petroleum Institute"
                variants={fadeInWithEase}
              />
            </a>

            <a
              className="home-sec2-link"
              href="https://www.acea.auto/"
              target="__blank"
            >
              <motion.img
                className="home-sec2-logo"
                src={image2}
                alt="European Automobile Manufacturers Association"
                variants={fadeInWithEase}
              />
            </a>

            <a
              className="home-sec2-link"
              href="https://www.mtu-solutions.com/eu/en.regionselect.html"
              target="__blank"
            >
              <motion.img
                className="home-sec2-logo"
                src={image3}
                alt="MTU Friedrichshafen GmbH"
                variants={fadeInWithEase}
              />
            </a>

            <a
              className="home-sec2-link"
              href="https://www.doble.com/"
              target="__blank"
            >
              <motion.img
                className="home-sec2-logo"
                src={image4}
                alt="Doble Engineering Company"
                variants={fadeInWithEase}
              />
            </a>
          </motion.div>

          <ButtonRouter
            name="Learn More"
            type="button-type-1"
            link="/about/certifications"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSec2;
