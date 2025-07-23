import "./About.scss";
import Hero from "../../components/hero/Hero";
import background from "/src/assets/about/about.webp";
import OverviewText from "../../components/overviewText/OverviewText";
import { motion } from "framer-motion";
import { staggerContainer } from "../../functions/motionUtils";
import { aboutSections } from "../../data/NavAboutSections";
import PageSectionCard from "../../components/PageSectionCard/PageSectionCard";

function Page() {
  return (
    <main>
      <Hero
        image={background}
        crumble={"Home"}
        crumbleLink={"/"}
        title="About Us"
        desc="An Established Leader in the Lubricants Industry"
      />

      <OverviewText
        title="Overview"
        desc="Founded in Malaysia in 1991, Hyrax Oil has grown from a humble transformer oil trader into a world-class manufacturer of high-performance lubricants and specialty petroleum products. With over 33 years of expertise, our brand now spans across 40+ countries in Asia, the Middle East, and Africa, trusted for quality, innovation, and reliability. Backed by state-of-the-art blending plants in Malaysia and Sri Lanka, advanced R&D, and ISO 9001:2015 certification, we deliver excellence to meet diverse market needs. Proudly bearing the National Mark of Malaysian Brand, Hyrax Oil continues to drive industries forward with premium lubrication solutions and a commitment to global standards."
      />

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2 className="textRegular textXL">Learn More About Us</h2>
            <motion.ul
              className="aboutSectionLayout"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aboutSections.map((segment, index) => (
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
    </main>
  );
}

export default Page;
