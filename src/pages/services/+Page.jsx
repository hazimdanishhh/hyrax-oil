import "./Services.scss";
import Hero from "../../components/hero/Hero";
import background from "/src/assets/services/services.webp";
import OverviewText from "../../components/overviewText/OverviewText";
import { servicesSections } from "../../data/NavServicesSections";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInWithEase,
  staggerContainer,
} from "../../functions/motionUtils";
import PageSectionCard from "../../components/PageSectionCard/PageSectionCard";

import DiscoverNext from "../../components/discoverNextSection/DiscoverNext";
import { pageSections } from "../../data/pageSections";
import servicesSectionsList from "../../data/servicesSections";
import ServicesSectionCard from "../../components/servicesSectionCard/ServicesSectionCard";

import servicesBackground1 from "/src/assets/services/oilAnalysis.webp";
import servicesBackground2 from "/src/assets/services/labTesting.webp";
import servicesBackground3 from "/src/assets/services/training.webp";
import servicesBackground4 from "/src/assets/services/contractManufacturing.webp";
import servicesBackground5 from "/src/assets/services/consultancy.webp";

import processImage1 from "/src/assets/services/icons/specifications.png";
import processImage2 from "/src/assets/services/icons/oil-analysis.png";
import processImage3 from "/src/assets/services/icons/results.png";

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
                  link2={segment.link2}
                  background={segment.background}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {servicesSectionsList.map((section) => (
        <motion.section
          id={section.id}
          className="sectionLight"
          key={section.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div
            className="sectionBackground"
            style={{
              backgroundImage: `url(${section.background})`,
            }}
          >
            <div className="sectionBackgroundBlur">
              <div className="sectionWrapper">
                <div className="sectionContent servicesSectionHeadingContent">
                  <motion.h2
                    className="servicesSectionKey textRegular textL"
                    variants={fadeInLeft}
                  >
                    <motion.span
                      className="textRegular textXXXL"
                      initial={{ scale: 1.5, y: 50 }}
                      whileInView={{
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      }}
                      viewport={{ once: true }}
                    >
                      {section.key}
                    </motion.span>
                    {section.title}
                  </motion.h2>
                </div>
              </div>
            </div>
          </div>
          <div
            className={section.key % 2 === 0 ? "sectionDark" : "sectionLight"}
          >
            <div className="sectionWrapper">
              <div className="sectionContent">
                <motion.p
                  className="textLight textXS"
                  variants={fadeInWithEase}
                >
                  {section.description}
                </motion.p>

                {section.id === "oil-analysis-and-on-site-services" && (
                  <>
                    <motion.h3
                      className="textRegular textL"
                      variants={fadeInWithEase}
                    >
                      The Process
                    </motion.h3>
                    <motion.ul
                      className="servicesSectionCardLayout"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                    >
                      <ServicesSectionCard
                        isProcess
                        image={processImage1}
                        alt="Specification"
                        title="1. Specification"
                        description="Clients provides all products and specifications to be tested in our laboratory."
                      />

                      <ServicesSectionCard
                        isProcess
                        image={processImage2}
                        alt="Oil Analysis"
                        title="2. Oil Analysis"
                        description="Client’s products will go through our testing equipments by our tireless hard-working scientists."
                      />

                      <ServicesSectionCard
                        isProcess
                        image={processImage3}
                        alt="Results"
                        title="3. Results"
                        description="With our extensive lab equipments, we produce accurate end results and will be delivered to clients."
                      />
                    </motion.ul>
                  </>
                )}
              </div>
            </div>

            <div className="sectionWrapper">
              <div className="sectionContent">
                <h3 className="textRegular textL">What You Get</h3>
                <ul className="servicesSectionCardLayout">
                  {section.cards.map((card, index) => (
                    <ServicesSectionCard
                      key={index}
                      image={card.image}
                      alt={card.alt}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      <DiscoverNext subheading="Contact Us" cardData={pageSections[2]} />
    </main>
  );
}

export default Page;
