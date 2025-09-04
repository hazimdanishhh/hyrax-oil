import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ProductPopUp.scss";
import ButtonRouter from "../buttons/ButtonRouter";
import {
  fadeInWithEase,
  staggerContainer,
  staggerContainerFast,
} from "../../functions/motionUtils";

function ProductPopUp({ product, onClose }) {
  const productOverlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productOverlayRef.current &&
        !productOverlayRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      className="product-pop-up"
      ref={productOverlayRef}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
    >
      <motion.div
        className="product-pop-up-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerFast}
      >
        <svg
          className="product-close-icon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="none"
          viewBox="0 0 24 24"
          onClick={onClose}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <div className="product-pop-up-header">
          <motion.img
            loading="lazy"
            className="product-pop-up-img"
            src={product.src}
            alt={product.alt}
            variants={fadeInWithEase}
          />
          <div className="productPopUpTitle">
            <motion.h3 className="textRegular textS" variants={fadeInWithEase}>
              {product.title}
            </motion.h3>
            {product.type ? (
              <motion.div
                variants={fadeInWithEase}
                className={`textRegular textXXS product-pop-up-type ${
                  ["Semi Synthetic", "Synthetic Blend", "Uninhibited"].includes(
                    product.type
                  )
                    ? "semi"
                    : product.type === "Premium Blend"
                    ? "premium"
                    : ""
                }`}
              >
                {product.type}
              </motion.div>
            ) : null}
          </div>
        </div>

        <motion.hr variants={fadeInWithEase} />

        {/* DESCRIPTION */}
        <motion.div
          className="product-pop-up-section"
          variants={fadeInWithEase}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="textRegular textS" variants={fadeInWithEase}>
            Description
          </motion.h3>
          <motion.p variants={fadeInWithEase}>{product.description}</motion.p>
        </motion.div>

        {/* GRADES */}
        {product.grades && (
          <motion.div
            className="product-pop-up-section"
            variants={fadeInWithEase}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 className="textRegular textS" variants={fadeInWithEase}>
              Grades
            </motion.h3>
            <div className="product-pop-up-grades-list">
              {product.grades.map((grade, index) => (
                <motion.p
                  key={index}
                  className="product-pop-up-grade"
                  variants={fadeInWithEase}
                >
                  {grade}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}

        {/* APPLICATIONS */}
        {product.applications && (
          <motion.div
            className="product-pop-up-section"
            variants={fadeInWithEase}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 className="textRegular textS" variants={fadeInWithEase}>
              Applications
            </motion.h3>
            <motion.p
              className="product-pop-up-grade"
              variants={fadeInWithEase}
            >
              {product.applications}
            </motion.p>
          </motion.div>
        )}

        {/* PERFORMANCE */}
        {product.performance && (
          <motion.div
            className="product-pop-up-section"
            variants={fadeInWithEase}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 className="textRegular textS" variants={fadeInWithEase}>
              Performance
            </motion.h3>
            <div className="product-pop-up-grades-list">
              {product.performance.map((performance, index) => (
                <motion.p
                  key={index}
                  className="product-pop-up-grade"
                  variants={fadeInWithEase}
                >
                  {performance}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}

        <div className="product-pop-up-buttons">
          <ButtonRouter
            name="View PDS"
            link={product.pdsLink}
            type="button-type-1"
            pdf="pdf"
          />
          <ButtonRouter
            name="Contact Us"
            link="/contact"
            type="button-type-2"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductPopUp;
