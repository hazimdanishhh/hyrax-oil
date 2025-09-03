import "./LeaderCard.scss";
import { motion } from "framer-motion";
import { fadeInWithEase } from "../../functions/motionUtils";
import { CaretCircleRightIcon } from "@phosphor-icons/react/dist/ssr";

function LeaderCard({ src, alt, name, title, onClick }) {
  return (
    <>
      <motion.div
        className="leader-card-wrapper"
        variants={fadeInWithEase}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <a className="leader-card" onClick={onClick}>
          <img loading="lazy" src={src} alt={alt} className="leader-card-img" />

          <div className="leader-card-overlay">
            <div className="leader-text">
              <h3 className="textRegular textXXS">{name}</h3>
              <p className="textLight textXXS">{title}</p>
            </div>
          </div>

          <CaretCircleRightIcon
            size={32}
            className="plus-icon-2"
            weight="thin"
          />
        </a>
      </motion.div>
    </>
  );
}

export default LeaderCard;
