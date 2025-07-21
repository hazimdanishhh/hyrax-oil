import { useState } from "react";
import "./PassengerCar.scss";
import { productsPCMO } from "./productsPCMO";
import ProductCard from "../../../components/product-card/ProductCard";
import ProductPopUp from "../../../components/product-pop-up/ProductPopUp";
import CarouselSlider from "../../../components/carousel-slider/CarouselSlider";
import Hero from "../../../components/hero/Hero";
import ProductSideNav from "../../../components/side-nav/SideNav";
import logo from "/src/assets/products/passenger/Hyrax-Platineum-2.webp";
import { AnimatePresence, motion } from "framer-motion";
import productSegments from "../../../data/NavProductSegments";
import { staggerContainer } from "../../../functions/motionUtils";

function Page() {
  const [activePopup, setActivePopup] = useState(null);
  const productSegment = "Passenger Car Motor Oils";

  const openOverlay = (product) => {
    setActivePopup(product);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  const segment = productSegments.find(
    (item) => item.link === "/products/passenger-car-motor-oils"
  );

  return (
    <>
      {/* HERO SECTION */}
      <Hero
        image={segment.background}
        crumble="Products"
        crumbleLink="/products"
        title={segment.title}
        desc="Discover our wide range of passenger car motor oils, designed to provide the best protection for your engine."
        logo={logo}
      />

      {/* PRODUCT SECTION */}
      <div className="product-section-background">
        <div className="product-section-wrapper">
          <h2 className="product-section-title">
            Our Range of {productSegment}
          </h2>
          <motion.div
            className="product-layout"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
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
          </motion.div>
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

export default Page;
