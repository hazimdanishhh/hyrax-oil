import "./Hero.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeInWithEase } from "/src/functions/motionUtils";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";

function Hero({ image, crumble, crumbleLink, title, desc, logo }) {
  return (
    <>
      <motion.section
        className="hero-background"
        style={{
          backgroundImage: `url(${image})`,
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
              <a href={crumbleLink}>{crumble}</a>
              {crumbleLink || crumble ? <CaretRightIcon size={16} /> : null}
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
      </motion.section>
    </>
  );
}

export default Hero;
