import { useState } from "react";
import "../ProductSpecific.scss";
import ProductCard from "../../../components/product-card/ProductCard";
import ProductPopUp from "../../../components/product-pop-up/ProductPopUp";
import CarouselSlider from "../../../components/carousel-slider/CarouselSlider";
import Hero from "../../../components/hero/Hero";
import ProductSideNav from "../../../components/side-nav/SideNav";
import { AnimatePresence, motion } from "framer-motion";
import productSegments from "../../../data/NavProductSegments";
import { staggerContainer } from "../../../functions/motionUtils";
import ProductFeaturesCard from "../../../components/productFeaturesCard/productFeaturesCard";
import { productsTFluids } from "../../../data/products/productsTFluids";

function Page() {
  const [activePopup, setActivePopup] = useState(null);

  const openOverlay = (product) => {
    setActivePopup(product);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  const segment = productSegments.find(
    (item) => item.link === "/products/transmission-fluids" // TODO: Adjust the link as necessary
  );

  return (
    <>
      <main>
        {/* HERO SECTION */}
        <Hero
          image={segment.background}
          crumble="Hyrax® Products"
          crumbleLink="/products"
          title={segment.title}
          desc={segment.pageSubHeading}
        />

        {/* PRODUCT SECTION */}
        <section className="sectionLight">
          <div className="sectionWrapper">
            <div className="sectionContent">
              <div className="sectionHeader">
                <h2 className="textL textRegular">{segment.heading}</h2>
                <p>{segment.subHeading}</p>
              </div>
              <motion.div
                className="product-layout"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* TODO: Adjust product segment as necessary */}
                {productsTFluids.map((product, index) => (
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
        </section>

        {/* PRODUCT POP UP */}
        <AnimatePresence>
          {activePopup && (
            <ProductPopUp product={activePopup} onClose={closeOverlay} />
          )}
        </AnimatePresence>

        {/* FEATURES & BENEFITS SECTION */}
        <section className="sectionLight">
          <div className="sectionWrapper">
            <div className="sectionContent">
              <h2 className="textL textRegular">Features & Benefits</h2>
              <motion.ul
                className="productFeaturesLayout"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {segment.benefits.map((feature, index) => (
                  <ProductFeaturesCard
                    key={index}
                    title={feature.title}
                    desc={feature.desc}
                    background={feature.background}
                  />
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        {/* PRODUCT SEGMENTS SECTION */}
        <CarouselSlider items={productSegments} />

        {/* PRODUCT SIDE NAV */}
        <ProductSideNav />
      </main>
    </>
  );
}

export default Page;
