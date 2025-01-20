import React, { useEffect } from "react";
import "./TheCompany.scss";
import Layout from "../../Layout";
import Footer from "../../Footer";
import Hero from "../../components/hero/Hero";
import MarketMap from "../../components/market-map/MarketMap";
import { AnimatePresence, motion } from "framer-motion";

function TheCompany() {
  useEffect(() => {
    document.title = `Hyrax Oil | About - The Company`;
  }, []);

  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <Hero
        image='url("./the-company-background.webp")'
        crumble="About"
        crumbleLink="/about/the-company"
        title="The Company"
        desc="The World's No. 1 Top Quality Oils and Lubricants"
      />

      <div className="the-company-section-background">
        <div className="the-company-section-wrapper">
          <div className="the-company-about-us">
            <div className="about-us-header">
              <h2>About Us</h2>
              <hr />
            </div>

            <p>
              Incorporated in Malaysia in 1991, Hyrax Oil Sdn Bhd (Hyrax Oil)
              has achieved a remarkable growth since its inception. With more
              than 33 years of experience, Hyrax Oil has rapidly grown from its
              humble beginning as a transformer oils trading company to become
              an established manufacturer and a global player in the
              manufacturing of lubricants with a full range of top quality and
              high-performance lubricants; including transformer oils, specialty
              products and other petroleum derivatives.
              <br />
              <br />
              Today, Hyrax Oil has gained a reputation as a world class
              lubricants provider boasting a global footprint spanning across
              Asia, the Middle East and Africa, with market presence in over 35
              countries. The growing demands of lubricants continue to command
              focused attention from Hyrax Oil’s dedicated workforce. Ensuring
              the wide reach of its market expansion, the company has embarked
              on a market rationalisation into regions with re-organised
              off-site production facilities.
              <br />
              <br />
              In Malaysia, Hyrax Oil’s 3.5-acre export-oriented blending plant
              is positioned to serve far-reaching global markets by taking
              logistical advantage of its strategic location within the vicinity
              of Port Klang, one of the busiest ports in Southeast Asia. Whilst
              the latest 5-acre blending plant in Muthurajawela, Sri Lanka, is
              designated to focus and serve the South Asian region. Both plants
              are fully equipped with an advanced laboratory and
              state-of-the-art infrastructure, catering to a wide assortment of
              requirements from both domestic and international customers.
              <br />
              <br />
              Hyrax Oil’s commitment to quality and excellence is the foundation
              of its growing success. With rigorous research and development
              works incorporated into product formulations, the company takes
              pride in creating its high-performance lubricants. In addition,
              through the certification of ISO 9001:2015, Hyrax Oil continues to
              demonstrate its commitment to quality and customer satisfaction.
              Moreover, the company’s production and supply reliability and
              logistics efficiency, supported by a comprehensive marketing
              program, have increased its customers’ confidence and brand
              loyalty towards Hyrax branded products.
              <br />
              <br />
              Respectively, as a recognition of its high-quality, excellent and
              distinctive products, Hyrax Oil has earned the National Mark of
              Malaysian Brand, which was awarded by SME Corporation Malaysia in
              collaboration with SIRIM QAS International Sdn Bhd, since it was
              first launched in 2009. The National Mark Certification program
              serves to promote the development of Malaysian brands that meet
              global quality standards, and Hyrax brand proudly and
              prestigiously represents one of them.
            </p>
          </div>
        </div>
      </div>

      <MarketMap />

      <div className="the-company-section-2-background">
        <div className="the-company-section-2-wrapper">
          <div className="vision-mission-cards-wrapper">
            <motion.div
              className="vision-mission-card"
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
            >
              <div className="vision-mission-header">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <h4>Our Vision</h4>
              </div>
              <p className="vision-mission-desc">
                Our vision is to be a Leading Global Player in the Oil and Gas
                industry with a recognized brand worldwide achieved through our
                sheer hard work, commitment and dedication.
              </p>
            </motion.div>

            <motion.div
              className="vision-mission-card"
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
            >
              <div className="vision-mission-header">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <h4>Our Vision</h4>
              </div>
              <p className="vision-mission-desc">
                Our vision is to be a Leading Global Player in the Oil and Gas
                industry with a recognized brand worldwide achieved through our
                sheer hard work, commitment and dedication.
              </p>
            </motion.div>

            <motion.div
              className="vision-mission-card"
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
            >
              <div className="vision-mission-header">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <h4>Our Vision</h4>
              </div>
              <p className="vision-mission-desc">
                Our vision is to be a Leading Global Player in the Oil and Gas
                industry with a recognized brand worldwide achieved through our
                sheer hard work, commitment and dedication.
              </p>
            </motion.div>

            <motion.div
              className="vision-mission-card"
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
            >
              <div className="vision-mission-header">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <h4>Our Vision</h4>
              </div>
              <p className="vision-mission-desc">
                Our vision is to be a Leading Global Player in the Oil and Gas
                industry with a recognized brand worldwide achieved through our
                sheer hard work, commitment and dedication.
              </p>
            </motion.div>

            <motion.div
              className="vision-mission-card"
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
            >
              <div className="vision-mission-header">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="#f26f27"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <h4>Our Vision</h4>
              </div>
              <p className="vision-mission-desc">
                Our vision is to be a Leading Global Player in the Oil and Gas
                industry with a recognized brand worldwide achieved through our
                sheer hard work, commitment and dedication.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TheCompany;
