import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({ src, alt, title, link, type, onClick }) {
  return (
    <>
      <div className="product-card-wrapper">
        <Link className="product-card" to={link} onClick={onClick}>
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className="product-card-img"
          />
          <div className="product-card-overlay">
            <div className="product-hover">
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
            <div className="product-title">
              <h3 className="textRegular textS">{title}</h3>
            </div>
          </div>
        </Link>
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
      </div>

      <Outlet />
    </>
  );
}

export default ProductCard;
