import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Footer from "../../Footer";
import "./PassengerCar.scss";
import { Link, Outlet } from "react-router-dom";
import { productsPCMO } from "./productsPCMO";
import ProductCard from "../../products/components/product-card/ProductCard";
import ProductPopUp from "../components/product-pop-up/ProductPopUp";
import CarouselSlider from "../../components/carousel-slider/CarouselSlider";
import { productSegments } from "../../navbar/components/nav-products/NavProductSegments";
import Hero from "../../components/hero/Hero";

function PassengerCar() {
  const [activePopup, setActivePopup] = useState(null);
  const productSegment = "Passenger Car Motor Oils";

  const openOverlay = (product) => {
    setActivePopup(product);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    document.title = `Hyrax Oil | ${productSegment}`;
  }, []);

  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <Hero
        image='url("./products/passenger-car/pcmo-background.jpg")'
        crumble="Products"
        crumbleLink="/products"
        title={productSegment}
        desc="Discover our wide range of passenger car motor oils, designed to provide the best protection for your engine."
      />

      {/* PRODUCT SECTION */}
      <div className="product-section-background">
        <div className="product-section-wrapper">
          <h2 className="product-section-title">
            Our Range of {productSegment}
          </h2>
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

      {/* PRODUCT SEGMENTS SECTION */}
      <CarouselSlider items={productSegments} />

      {/* PRODUCT SIDE NAV */}
      <div className="product-side-nav-wrapper">
        <Link
          className="product-side-nav"
          to="/products/passenger-car-motor-oils"
        >
          <img
            src="./products/side-nav/pcmo-icon.png"
            alt="Passenger Car Motor Oils Icon"
          />
          <h4 className="product-side-nav-title">Passenger Car Motor Oils</h4>
        </Link>
        <Link className="product-side-nav" to="/products/gas-fuel-engine-oils">
          <img
            src="./products/side-nav/gfeo-icon.png"
            alt="Gas Fuel Engine Oils Icon"
          />
          <h4 className="product-side-nav-title">Gas Fuel Engine Oils</h4>
        </Link>
        <Link className="product-side-nav" to="/products/diesel-engine-oils">
          <img
            src="./products/side-nav/deo-icon.png"
            alt="Diesel Engine Oils Icon"
          />
          <h4 className="product-side-nav-title">Diesel Engine Oils</h4>
        </Link>
        <Link className="product-side-nav" to="/products/tractor-fluids">
          <img
            src="./products/side-nav/tf-icon.png"
            alt="Tractor Fluids Icon"
          />
          <h4 className="product-side-nav-title">Tractor Fluids</h4>
        </Link>
        <Link
          className="product-side-nav"
          to="/products/four-stroke-motorcycle-oils"
        >
          <img
            src="./products/side-nav/fsmo-icon.png"
            alt="Four Stroke Motorcycle Oils Icon"
          />
          <h4 className="product-side-nav-title">
            Four Stroke Motorcycle Oils
          </h4>
        </Link>
        <Link
          className="product-side-nav"
          to="/products/two-stroke-motorcycle-and-engine-oils"
        >
          <img
            src="./products/side-nav/tsmeo-icon.png"
            alt="Two Stroke Motorcycle & Engine Oils Icon"
          />
          <h4 className="product-side-nav-title">
            Two Stroke Motorcycle & Engine Oils
          </h4>
        </Link>
        <Link
          className="product-side-nav"
          to="/products/marine-and-large-engine-oils"
        >
          <img
            src="./products/side-nav/mleo-icon.png"
            alt="Marine & Large Engine Oils Icon"
          />
          <h4 className="product-side-nav-title">Marine & Large Engine Oils</h4>
        </Link>
        <Link className="product-side-nav" to="/products/gear-oils">
          <img src="./products/side-nav/go-icon.png" alt="Gear Oils Icon" />
          <h4 className="product-side-nav-title">Gear Oils</h4>
        </Link>
        <Link className="product-side-nav" to="/products/transmission-fluids">
          <img
            src="./products/side-nav/tfluid-icon.png"
            alt="Transmission Fluids Icon"
          />
          <h4 className="product-side-nav-title">Transmission Fluids</h4>
        </Link>
        <Link className="product-side-nav" to="/products/industrial-oils">
          <img
            src="./products/side-nav/io-icon.png"
            alt="Industrial Oils Icon"
          />
          <h4 className="product-side-nav-title">Industrial Oils</h4>
        </Link>
        <Link
          className="product-side-nav"
          to="/products/transformer-and-electrical-oils"
        >
          <img
            src="./products/side-nav/teo-icon.png"
            alt="Transformer & Electrical Oils Icon"
          />
          <h4 className="product-side-nav-title">
            Transformer & Electrical Oils
          </h4>
        </Link>
        <Link className="product-side-nav" to="/products/specialty-oils">
          <img
            src="./products/side-nav/so-icon.png"
            alt="Specialty Oils Icon"
          />
          <h4 className="product-side-nav-title">Specialty Oils</h4>
        </Link>
        <Link className="product-side-nav" to="/products/brake-fluids">
          <img src="./products/side-nav/bf-icon.png" alt="Brake Fluids Icon" />
          <h4 className="product-side-nav-title">Brake Fluids</h4>
        </Link>
        <Link className="product-side-nav" to="/products/greases">
          <img src="./products/side-nav/g-icon.png" alt="Greases Icon" />
          <h4 className="product-side-nav-title">Greases</h4>
        </Link>
      </div>

      <Footer />

      <Outlet />
    </>
  );
}

export default PassengerCar;
