import { ArrowCircleRightIcon } from "@phosphor-icons/react/dist/ssr";
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

        <ArrowCircleRightIcon size={36} className="arrowIcon" />
      </motion.a>
    </motion.li>
  );
}

export default PageSectionCard;
