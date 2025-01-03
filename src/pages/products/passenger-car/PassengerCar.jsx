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
      <Hero
        image='url("./products/pcmo-background.jpg")'
        crumble="Products"
        title="Passenger Car Motor Oils"
        desc="Discover our wide range of passenger car motor oils, designed to provide the best protection for your engine."
      />

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

      <CarouselSlider items={productSegments} />

      <Footer />

      <Outlet />
    </>
  );
}

export default PassengerCar;
