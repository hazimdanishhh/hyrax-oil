import { fadeInWithEase } from "../../functions/motionUtils";
import "./PageSectionCard.scss";
import { motion } from "framer-motion";

function PageSectionCard({ title, desc, link, background }) {
  return (
    <motion.li
      style={{ listStyle: "none" }}
      variants={fadeInWithEase}
      className="pageSectionWrapper"
    >
      <motion.a
        className="pageSectionCard"
        href={link}
        style={{
          backgroundImage: `url(${background})`,
        }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="pageSectionText">
          <h3 className="textRegular textS">{title}</h3>
          <p className="textLight">{desc}</p>
        </div>

        <svg
          className="arrowIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
        </svg>
      </motion.a>
    </motion.li>
  );
}

export default PageSectionCard;
