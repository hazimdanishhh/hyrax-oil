import "./Services.scss";
import Hero from "../../components/hero/Hero";
import background from "/src/assets/services/services.webp";
import OverviewText from "../../components/overviewText/OverviewText";
import { servicesSections } from "../../data/NavServicesSections";
import { motion } from "framer-motion";
import { staggerContainer } from "../../functions/motionUtils";
import PageSectionCard from "../../components/PageSectionCard/PageSectionCard";

function Page() {
  return (
    <main>
      <Hero
        image={background}
        crumble={"Home"}
        crumbleLink={"/"}
        title="Our Services"
        desc="Explore our comprehensive range of services designed to meet your lubrication needs."
      />
      <OverviewText
        title="Overview"
        desc="At Hyrax Oil, we offer a wide range of services tailored to meet the diverse needs of our clients. From high-performance lubricants to specialized petroleum products, our services are designed to enhance operational efficiency and ensure optimal performance in various industries. With a commitment to quality and innovation, we strive to deliver solutions that exceed expectations and drive success for our partners."
      />

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2 className="textRegular textXL">In This Section</h2>
            <motion.ul
              className="servicesSectionLayout"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {servicesSections.map((segment, index) => (
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
