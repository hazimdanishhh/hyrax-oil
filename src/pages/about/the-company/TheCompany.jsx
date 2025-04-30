import React, { useEffect } from "react";
import "./TheCompany.scss";
import Layout from "../../Layout";
import Footer from "../../Footer";
import Hero from "../../components/hero/Hero";
import MarketMap from "../../components/market-map/MarketMap";
import { AnimatePresence, motion } from "framer-motion";
import Counter from "../../components/counter/Counter";
import History from "../../components/history/History";
import VisionCard from "../../components/vision/VisionCard";
import visionList from "../../components/vision/visionList";

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
          {/* <img
            className="about-us-background"
            src="./about/the-company/about-us.webp"
            alt="About Us Background"
          /> */}
        </div>
      </div>

      <MarketMap />

      <div className="the-company-section-2-background">
        <div className="the-company-section-2-wrapper">
          <div className="vision-mission-cards-wrapper">
            {visionList.map((item, index) => (
              <VisionCard
                key={index}
                src={item.src}
                alt={item.alt}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="the-company-section-3-background">
        <div className="the-company-section-3-wrapper">
          <h2 className="the-company-section-3-header">Our Global Impact</h2>
          <motion.div
            className="company-impact-cards-wrapper"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="company-impact-cards">
              <Counter end={2} duration={1} />
              <p>Countries with Lube Oil Blending Plants</p>
            </div>
            <div className="company-impact-cards">
              <div className="company-impact-digit">
                <Counter end={35} duration={1.5} />
                <h3 className="company-impact-digit-plus">+</h3>
              </div>
              <p>Countries Served Worldwide</p>
            </div>
            <div className="company-impact-cards">
              <div className="company-impact-digit">
                <Counter end={90} duration={2} />
                <h3 className="company-impact-digit-plus">+</h3>
              </div>
              <p>Total Skilled Employees Globally</p>
            </div>
            <div className="company-impact-cards">
              <div className="company-impact-digit">
                <Counter end={80} duration={2.5} />
                <h3 className="company-impact-digit-plus">M+</h3>
              </div>
              <p>Liters of Lubricants Delivered Annually</p>
            </div>
          </motion.div>
        </div>
      </div>

      <History />

      <div className="the-company-section-4-background">
        <div className="the-company-section-4-wrapper">
          <motion.iframe
            className="the-company-video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/Vwn7uje9Cog?si=b4PVQI7XrVPp0TOV"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TheCompany;
