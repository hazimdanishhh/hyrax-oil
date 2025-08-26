import "./ProductCertifiedSection.scss";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainerFast,
} from "../../functions/motionUtils";
import apiLogo from "/src/assets/logos/API-Logo.webp";
import malaysianBrandLogo from "/src/assets/logos/malaysian-brand-logo.webp";
import madeInMalaysiaLogo from "/src/assets/logos/made-in-malaysia-logo.webp";
import SIRIMLogo from "/src/assets/logos/SIRIM-Logo.webp";
import ButtonRouter from "../buttons/ButtonRouter";

function ProductCertifiedSection() {
  return (
    <section className="sectionLight">
      <div className="sectionWrapper">
        <div className="sectionContent productBrandCertification">
          <h2 className="textRegular textXL">Trusted & Certified</h2>
          <p>
            Every product we deliver carries the assurance of internationally
            recognized certifications and local accreditations, reflecting our
            commitment to uncompromising quality. Proudly a Made in Malaysia
            brand, we are certified under the prestigious Malaysian Brand mark,
            with authenticity verified through SIRIM Tulen and our Certification
            API for instant validation. These standards aren’t just labels —
            they are a promise of reliability, safety, and performance that our
            partners and customers can depend on, at home and across global
            markets.
          </p>
          <motion.div
            className="product-brand-logos"
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img
              loading="lazy"
              src={apiLogo}
              alt="American Petroleum Institute Logo"
              className="nav-overlay-logo"
              variants={fadeInWithEase}
            />
            <motion.img
              loading="lazy"
              src={madeInMalaysiaLogo}
              alt="Made In Malaysia Logo"
              className="nav-overlay-logo"
              variants={fadeInWithEase}
            />
            <motion.img
              loading="lazy"
              src={malaysianBrandLogo}
              alt="Malaysian Brand Logo"
              className="nav-overlay-logo"
              variants={fadeInWithEase}
            />
            <motion.img
              loading="lazy"
              src={SIRIMLogo}
              alt="SIRIM Tulen logo"
              className="nav-overlay-logo"
              variants={fadeInWithEase}
            />
          </motion.div>

          <ButtonRouter
            name="Learn More"
            link="/about/certifications"
            type="button-type-1"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductCertifiedSection;
