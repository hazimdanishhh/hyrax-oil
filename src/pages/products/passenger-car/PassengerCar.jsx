import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Footer from "../../Footer";
import "./PassengerCar.scss";
import { Link, Outlet } from "react-router-dom";
import { productsPCMO } from "./productsPCMO";
import ProductCard from "../../products/components/product-card/ProductCard";

function PassengerCar() {
  const [activePopup, setActivePopup] = useState(null);

  const openOverlay = (popupName) => {
    setActivePopup(popupName);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    document.title = "Hyrax Oil | Passenger Car Motor Oils"; // Quick solution
  }, []);

  return (
    <>
      <Layout />

      <div className="pcmo-background">
        <div className="bg-gradient">
          <div className="pcmo-wrapper">
            <div className="crumble">
              <Link to="/">Home</Link> /{" "}
              <Link to="#">
                <span>Passenger Car Motor Oils</span>
              </Link>
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
          <div className="product-pop-up">
            {activePopup === "Hyrax Platineum HS" && (
              <>
                <div className="product-pop-up-content">
                  <div className="product-pop-up-header">
                    <h2>{activePopup}</h2>
                    <button onClick={closeOverlay}>Close</button>
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
                  <div className="product-pop-up-header">
                    <h2>{activePopup}</h2>
                    <button onClick={closeOverlay}>Close</button>
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
                  <div className="product-pop-up-header">
                    <h2>{activePopup}</h2>
                    <button onClick={closeOverlay}>Close</button>
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
                  <div className="product-pop-up-header">
                    <h2>{activePopup}</h2>
                    <button onClick={closeOverlay}>Close</button>
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
                  <div className="product-pop-up-header">
                    <h2>{activePopup}</h2>
                    <button onClick={closeOverlay}>Close</button>
                  </div>
                  <div className="product-pop-up-body">
                    <p>Product details here</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}

      <Footer />

      <Outlet />
    </>
  );
}

export default PassengerCar;
