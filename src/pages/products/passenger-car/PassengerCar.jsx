import { useState, useEffect } from "react";
import "./PassengerCar.scss";
import { productsPCMO } from "./productsPCMO";
import ProductCard from "../../../components/product-card/ProductCard";
import ProductPopUp from "../../../components/product-pop-up/ProductPopUp";
import CarouselSlider from "../../../components/carousel-slider/CarouselSlider";
import { productSegments } from "../../navbar/components/nav-products/NavProductSegments";
import Hero from "../../../components/hero/Hero";
import ProductSideNav from "../../../components/side-nav/SideNav";
import background from "/src/assets/products/passenger/pcmo-background.webp";
import logo from "/src/assets/products/passenger/Hyrax-Platineum-2.webp";
import { AnimatePresence } from "framer-motion";

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
      {/* HERO SECTION */}
      <Hero
        image={`url(${background})`}
        crumble="Products"
        crumbleLink="/products"
        title={productSegment}
        desc="Discover our wide range of passenger car motor oils, designed to provide the best protection for your engine."
        logo={logo}
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
      <AnimatePresence>
        {activePopup && (
          <ProductPopUp product={activePopup} onClose={closeOverlay} />
        )}
      </AnimatePresence>

      {/* PRODUCT SEGMENTS SECTION */}
      <CarouselSlider items={productSegments} />

      {/* PRODUCT SIDE NAV */}
      <ProductSideNav />
    </>
  );
}

export default PassengerCar;
