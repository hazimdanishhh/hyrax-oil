import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Footer from "../../Footer";
import "./PassengerCar.scss";
import { Link, Outlet } from "react-router-dom";
import { productsPCMO } from "./productsPCMO";
import ProductCard from "../../products/components/product-card/ProductCard";
import ProductPopUp from "../components/product-pop-up/ProductPopUp";

function PassengerCar() {
  const [activePopup, setActivePopup] = useState(null);

  const openOverlay = (product) => {
    setActivePopup(product);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    document.title = "Hyrax Oil | Passenger Car Motor Oils";
  }, []);

  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <div className="pcmo-background">
        <div className="bg-gradient">
          <div className="pcmo-wrapper">
            <div className="crumble">
              <Link to="/">Home</Link>{" "}
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
                  strokeWidth="1"
                  d="m10 16 4-4-4-4"
                />
              </svg>
              Passenger Car Motor Oils
            </div>
            <div className="text">
              <h2 className="title">
                <span>Passenger Car Motor Oils</span>
              </h2>

              <p className="desc">
                Discover our wide range of Passenger Car Motor Oils, engineered
                for performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="product-section-background">
        <div className="product-section-wrapper">
          <h2 className="product-section-title">Our Products</h2>
          <div className="product-layout">
            {productsPCMO.map((product, index) => (
              <ProductCard
                key={index}
                src={product.src}
                alt={product.alt}
                title={product.title}
                link={product.link}
                type={product.type}
                onClick={() => openOverlay(product)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT POP UP */}
      {activePopup && (
        <ProductPopUp product={activePopup} onClose={closeOverlay} />
      )}

      <Footer />

      <Outlet />
    </>
  );
}

export default PassengerCar;