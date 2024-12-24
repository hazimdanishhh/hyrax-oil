import React, { useState, useEffect, useRef } from "react";
import Layout from "../../Layout";
import Footer from "../../Footer";
import "./PassengerCar.scss";
import { Link, Outlet } from "react-router-dom";
import { productsPCMO } from "./productsPCMO";
import ProductCard from "../../products/components/product-card/ProductCard";
import { motion } from "framer-motion";

function PassengerCar() {
  const [activePopup, setActivePopup] = useState(null);
  const productOverlayRef = useRef(null);

  const openOverlay = (popupName) => {
    setActivePopup(popupName);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    document.title = "Hyrax Oil | Passenger Car Motor Oils"; // Quick solution
  }, []);

  // Close nav-overlay when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productOverlayRef.current &&
        !productOverlayRef.current.contains(event.target)
      ) {
        closeOverlay();
      }
    };

    if (activePopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopup]);

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
                onClick={() => openOverlay(product.title)}
              />
            ))}
          </div>
        </div>
      </div>

      {activePopup && (
        <>
          <motion.div
            className="product-pop-up"
            ref={productOverlayRef}
            initial={{ opacity: 1, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {activePopup === "Hyrax Platineum HS" && (
              <>
                <div className="product-pop-up-content">
                  <svg
                    className="product-close-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={closeOverlay}
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
                    <h2>{activePopup}</h2>
                  </div>
                  <div className="product-pop-up-body">
                    <p>Product details here</p>
                  </div>
                </div>
              </>
            )}
            {activePopup === "Hyrax Platineum" && (
              <>
                <div className="product-pop-up-content">
                  <svg
                    className="product-close-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={closeOverlay}
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
                    <h2>{activePopup}</h2>
                  </div>
                  <div className="product-pop-up-body">
                    <p>Product details here</p>
                  </div>
                </div>
              </>
            )}
            {activePopup === "Hyrax Aureus" && (
              <>
                <div className="product-pop-up-content">
                  <svg
                    className="product-close-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={closeOverlay}
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
                    <h2>{activePopup}</h2>
                  </div>
                  <div className="product-pop-up-body">
                    <p>Product details here</p>
                  </div>
                </div>
              </>
            )}
            {activePopup === "Hyrax Elite Ultra" && (
              <>
                <div className="product-pop-up-content">
                  <svg
                    className="product-close-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={closeOverlay}
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
                    <h2>{activePopup}</h2>
                  </div>
                  <div className="product-pop-up-body">
                    <p>Product details here</p>
                  </div>
                </div>
              </>
            )}
            {activePopup === "Hyrax Ultra Novo" && (
              <>
                <div className="product-pop-up-content">
                  <svg
                    className="product-close-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={closeOverlay}
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
                    <h2>{activePopup}</h2>
                  </div>
                  <div className="product-pop-up-body">
                    <p>Product details here</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}

      <Footer />

      <Outlet />
    </>
  );
}

export default PassengerCar;
