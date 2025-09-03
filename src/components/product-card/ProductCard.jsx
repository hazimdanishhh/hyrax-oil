import { motion } from "framer-motion";
import "./ProductCard.scss";
import { fadeInWithEase } from "../../functions/motionUtils";
import { CaretCircleRightIcon } from "@phosphor-icons/react/dist/ssr";

function ProductCard({
  src,
  alt,
  title,
  link,
  type,
  onClick,
  shortDesc,
  cardDesc,
}) {
  return (
    <>
      <motion.div
        className="product-card-wrapper"
        variants={fadeInWithEase}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <a className="product-card" onClick={onClick}>
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className="product-card-img"
          />

          <div className="product-card-overlay">
            <div className="product-title">
              <h3 className="textRegular textXXS">{title}</h3>
              <p className="card-desc textLight textXXS">{cardDesc}</p>
              <p className="product-desc textLight textXXS">{shortDesc}</p>
              <span className="product-action textLight textXXS">
                Learn More
              </span>
            </div>
          </div>
          <CaretCircleRightIcon
            size={32}
            className="plus-icon-2"
            weight="thin"
          />
        </a>
        {type ? (
          <div
            className={`textRegular textXXS product-type ${
              ["Semi Synthetic", "Synthetic Blend", "Uninhibited"].includes(
                type
              )
                ? "semi"
                : type === "Premium Blend"
                ? "premium"
                : ""
            }`}
          >
            {type}
          </div>
        ) : null}
      </motion.div>
    </>
  );
}

export default ProductCard;
