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
            <div className="product-hover">Learn More</div>
            <div className="product-title">
              <h3>{title}</h3>
            </div>
          </div>
        </Link>
        <div
          className={`product-type ${
            type == "Semi Synthetic"
              ? "semi"
              : type == "Premium Blend"
              ? "premium"
              : ""
          }`}
        >
          {type}
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default ProductCard;
