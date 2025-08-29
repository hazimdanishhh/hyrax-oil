import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import "./ServicesSectionCard.scss";
import { motion } from "framer-motion";

function ServicesSectionCard({ image, alt, title, description, isProcess }) {
  return (
    <motion.li
      className={
        isProcess
          ? "servicesSectionCard process textRegular textXS"
          : "servicesSectionCard textRegular textXS"
      }
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <a href="/contact#contactForm" className="servicesSectionCardLink">
        {image && (
          <div className="servicesSectionCardImage">
            <img src={image} alt={alt || title} />
          </div>
        )}
        <h3 className="textRegular textS">{title}</h3>

        <hr />

        {description && <p className="textLight">{description}</p>}
        {/* <div className="servicesSectionButton">
          Contact Us
          <ArrowRightIcon className="servicesSectionButtonIcon" />
        </div> */}
      </a>
    </motion.li>
  );
}

export default ServicesSectionCard;
