import { fadeInWithEase } from "../../functions/motionUtils";
import "./productFeaturesCard.scss";
import { motion } from "framer-motion";

function ProductFeaturesCard({ title, desc, background }) {
  return (
    <motion.li
      style={{ listStyle: "none" }}
      variants={fadeInWithEase}
      className="productFeaturesWrapper"
    >
      <motion.div className="productFeaturesCard"
        style={{
          backgroundImage: `url(${background})`,
        }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}>
        <div className="productFeaturesText">
          <h3 className="textRegular textS">{title}</h3>
          <p className="textLight">{desc}</p>
        </div>
      </motion.div>
    </motion.li>
  );
}

export default ProductFeaturesCard;
