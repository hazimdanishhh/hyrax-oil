import "./Products.scss";
import Hero from "../../components/hero/Hero";
import background from "/src/assets/products/hyrax-products-hub.webp";
import logo from "/src/assets/logos/hyrax-logo.png";
import OverviewText from "../../components/overviewText/OverviewText";
import { motion } from "framer-motion";
import { staggerContainer } from "../../functions/motionUtils";
import productSegments from "/src/data/NavProductSegments";
import PageSectionCard from "../../components/PageSectionCard/PageSectionCard";

function Page() {
  return (
    <main>
      <Hero
        image={background}
        crumble={"Home"}
        crumbleLink={"/"}
        title="Hyrax® Products"
        logo={logo}
        desc="Explore our extensive range of high-performance lubricants and specialty petroleum products designed to meet diverse industry needs."
      />

      <OverviewText
        title="Overview"
        desc="At Hyrax Oil, we pride ourselves on offering a comprehensive portfolio of high-performance lubricants and specialty petroleum products. Our products are engineered to deliver exceptional performance, reliability, and efficiency across various industries. With a commitment to innovation and quality, we continuously enhance our product offerings to meet the evolving needs of our customers worldwide."
      />

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2 className="textRegular textXL">Our Product Segments</h2>

            <motion.ul
              className="productSectionLayout"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {productSegments.map((segment, index) => (
                <PageSectionCard
                  key={index}
                  title={segment.title}
                  desc={segment.desc}
                  link={segment.link}
                  background={segment.background}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <section className=""></section>
    </main>
  );
}

export default Page;
