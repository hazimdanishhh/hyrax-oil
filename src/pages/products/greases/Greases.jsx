import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Footer from "../../Footer";
import { Link, Outlet } from "react-router-dom";
import { productsG } from "./productsG";
import ProductCard from "../../../components/product-card/ProductCard";
import ProductPopUp from "../../../components/product-pop-up/ProductPopUp";
import CarouselSlider from "../../components/carousel-slider/CarouselSlider";
import { productSegments } from "../../navbar/components/nav-products/NavProductSegments";
import Hero from "../../../components/hero/Hero";
import ProductSideNav from "../../../components/side-nav/SideNav";
import background from "/src/assets/products/greases/g-background.webp";
import { AnimatePresence } from "framer-motion";

function Greases() {
  const [activePopup, setActivePopup] = useState(null);
  const productSegment = "Greases";

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
        image={`url(${background})`}
        crumble="Products"
        crumbleLink="/products"
        title={productSegment}
        desc="Discover our wide range of greases, designed to provide the best protection for your engine."
      />

      {/* PRODUCT SECTION */}
      <div className="product-section-background">
        <div className="product-section-wrapper">
          <h2 className="product-section-title">
            Our Range of {productSegment}
          </h2>
          <div className="product-layout">
            {productsG.map((product, index) => (
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

      <CarouselSlider items={productSegments} />

      {/* PRODUCT SIDE NAV */}
      <ProductSideNav />

      <Footer />

      <Outlet />
    </>
  );
}

export default Greases;
