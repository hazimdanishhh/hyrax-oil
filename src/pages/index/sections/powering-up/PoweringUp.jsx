import React from "react";
import "./poweringUp.scss";
import PageSectionCard from "../../../../components/PageSectionCard/PageSectionCard";
import { staggerContainer } from "../../../../functions/motionUtils";
import { motion } from "framer-motion";
import background from "/src/assets/products/transformerAndElectricalOils.webp";

function PoweringUp() {
  return (
    <section className="sectionLight">
      <div className="sectionWrapper">
        <div className="sectionContent poweringUpSectionContent">
          <div className="text">
            <h2 className="textRegular textL">Powering Up The World</h2>

            <p className="desc textLight textXS">
              Beyond automotive, industrial, and marine lubricants, Hyrax Oil is recognized as a global leader in transformer oils—trusted for their unmatched quality, reliability, and extensive range. Backed by decades of expertise, we provide not only world-class products but also technical support, industrial insights, and tailored solutions to power your operations with confidence.
            </p>
          </div>

          <motion.ul
            className="poweringUpSectionLayout"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <PageSectionCard title="Hyrax® Transformer Oils" desc="High-performance transformer oils for superior insulation, cooling, and long-lasting reliability in power systems worldwide." link="/products/transformer-and-electrical-oils" background={background} />
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default PoweringUp;
