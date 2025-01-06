import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProductPopUp.scss";

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
      initial={{ opacity: 1, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="product-pop-up-content">
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
          <img
            loading="lazy"
            className="product-pop-up-img"
            src={product.src}
            alt={product.alt}
          />
          <h2>{product.title}</h2>
          {product.type ? (
            <div
              className={`product-pop-up-type ${
                product.type == "Semi Synthetic"
                  ? "semi"
                  : product.type == "Premium Blend"
                  ? "premium"
                  : ""
              }`}
            >
              {product.type}
            </div>
          ) : null}
        </div>

        <div className="product-pop-up-body">
          <p>{product.description}</p>
        </div>

        {product.grades && (
          <div>
            <h3 className="product-pop-up-grade-title">Grades</h3>
            {product.grades.map((grade, index) => (
              <p key={index} className="product-pop-up-grade">
                {grade}
              </p>
            ))}
          </div>
        )}

        <div className="product-pop-up-buttons">
          <a
            className="button-type-1"
            href={product.pdsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            PDS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M13 6L7.85714 1M13 6L7.85714 11M13 6H1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <Link className="button-type-2" to="/contact">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M13 6L7.85714 1M13 6L7.85714 11M13 6H1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductPopUp;
