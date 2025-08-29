import "./Services.scss";
import Hero from "../../components/hero/Hero";
import background from "/src/assets/services/services.webp";
import OverviewText from "../../components/overviewText/OverviewText";
import { servicesSections } from "../../data/NavServicesSections";
import { motion } from "framer-motion";
import { staggerContainer } from "../../functions/motionUtils";
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
        <section id={section.id} className="sectionLight" key={section.id}>
          <div
            className="sectionBackground"
            style={{
              backgroundImage: `url(${section.background})`,
            }}
          >
            <div className="sectionBackgroundBlur">
              <div className="sectionWrapper">
                <div className="sectionContent servicesSectionHeadingContent">
                  <h2 className="servicesSectionKey textRegular textL">
                    <span className="textRegular textXXXL">{section.key}</span>
                    {section.title}
                  </h2>
                  <div className="servicesSectionKeyBottom" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={section.key % 2 === 0 ? "sectionDark" : "sectionLight"}
          >
            <div className="sectionWrapper">
              <div className="sectionContent">
                <p className="textLight textXS">{section.description}</p>

                {section.id === "oil-analysis-and-on-site-services" && (
                  <>
                    <h3 className="textRegular textL">The Process</h3>
                    <ul className="servicesSectionCardLayout">
                      <ServicesSectionCard
                        image=""
                        alt="Specification"
                        title="1. Specification"
                        description="Clients provides all products and specifications to be tested in our laboratory."
                      />

                      <ServicesSectionCard
                        image=""
                        alt="Oil Analysis"
                        title="2. Oil Analysis"
                        description="Client’s products will go through our testing equipments by our tireless hard-working scientists."
                      />

                      <ServicesSectionCard
                        image=""
                        alt="Results"
                        title="3. Results"
                        description="With our extensive lab equipments, we produce accurate end results and will be delivered to clients."
                      />
                    </ul>
                  </>
                )}
              </div>
            </div>

            <div className="sectionWrapper">
              <div className="sectionContent">
                <h3 className="textRegular textL">The Benefits</h3>
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
        </section>
      ))}

      <DiscoverNext subheading="Contact Us" cardData={pageSections[2]} />
    </main>
  );
}

export default Page;
