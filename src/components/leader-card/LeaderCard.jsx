import "./LeaderCard.scss";
import { motion } from "framer-motion";
import { fadeInWithEase } from "../../functions/motionUtils";

function LeaderCard({ src, alt, name, title, onClick }) {
  return (
    <>
      <motion.div className="leader-card-wrapper" variants={fadeInWithEase}>
        <a className="leader-card" onClick={onClick}>
          <img loading="lazy" src={src} alt={alt} className="leader-card-img" />
          <div className="leader-card-overlay">
            <div className="leader-hover">
              Learn More
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white plus-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="leader-text">
              <h3 className="textRegular textXXS">{name}</h3>
              <p className="textLight textXXS">{title}</p>
            </div>
          </div>
        </a>
      </motion.div>
    </>
  );
}

export default LeaderCard;
