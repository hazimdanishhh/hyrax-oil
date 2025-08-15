import { motion } from "framer-motion";
import "./AwardCard.scss";
import { fadeInWithEase } from "../../functions/motionUtils";

function AwardCard({ image, alt, title, desc, year }) {
  return (
    <motion.li className="awardCard" variants={fadeInWithEase}>
      <img src={image} alt={alt} />
      <h3 className="textRegular textXS">
        {title} <span className="textLight">{year}</span>
      </h3>

      <p className="textLight">{desc}</p>
    </motion.li>
  );
}

export default AwardCard;
