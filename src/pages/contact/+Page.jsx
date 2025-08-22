import "./Contact.scss";
import background from "/src/assets/contact/contact.webp";
import Hero from "../../components/hero/Hero";
import ContactCard from "../../components/contactCard/ContactCard";
import { AnimatePresence, motion } from "framer-motion";
import { staggerContainer } from "../../functions/motionUtils";
import location1background from "/src/assets/contact/locationHyraxOilKL.webp";
import location2background from "/src/assets/about/theCompany.webp";
import location3background from "/src/assets/contact/locationHyraxOilSL.webp";
import location4background from "/src/assets/contact/locationHyraxOilSA.webp";
import ContactForm from "../../components/contactForm/ContactForm";
import {
  EnvelopeIcon,
  PhoneIcon,
  PrinterIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { CommercialFAQList, TechnicalFAQList } from "../../data/FAQList";
import DiscoverNext from "../../components/discoverNextSection/DiscoverNext";
import { pageSections } from "../../data/pageSections";

function Page() {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const toggleFAQ1 = (index) => {
    setActiveIndex1(activeIndex1 === index ? null : index);
  };

  const toggleFAQ2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };

  return (
    <main>
      <Hero
        image={background}
        crumble="Home"
        crumbleLink="/"
        title="Contact Us"
        desc="Stay connected, stay ahead. Get in touch with us!"
      />

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2 className="textRegular textL">Our Locations</h2>
            <p className="textLight">
              Looking for solutions to your questions and problems? Look no
              further! Get in touch with us today and let us help you find the
              answers you’re looking for. Our team of experts is dedicated to
              providing top-notch solutions that meet your unique needs. So,
              whether you have a question that needs answering or a problem that
              needs solving, we’ve got you covered. Contact us now and let’s
              work together to achieve your goals!
            </p>
            <motion.div
              className="contactCardLayout"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactCard
                title="Head Office"
                subtitle="Kuala Lumpur, Malaysia"
                address={[
                  "A-8-1, Megan Avenue II,",
                  "12, Jalan Yap Kwan Seng,",
                  "Kampung Baru,",
                  "50450 Kuala Lumpur,",
                  "Wilayah Persekutuan Kuala Lumpur.",
                ]}
                link="https://www.google.com/maps/place/Hyrax+Oil+Sdn.+Bhd./data=!4m2!3m1!1s0x0:0x53085859f88dd00d?sa=X&ved=1t:2428&ictx=111"
                background={location1background}
                hours="8.30 am – 5.00 pm"
                phone="+60321635893"
                fax="+60321646577"
              />
              <ContactCard
                title="Meru Lube Oil Blending Plant"
                subtitle="Selangor, Malaysia"
                address={[
                  "Lot 4937 Batu 5 1/2, Jalan Meru,",
                  "Mukim Kapar,",
                  "Selangor Darul Ehsan,",
                  "41050 Klang,",
                  "Selangor.",
                ]}
                link="https://www.google.com/maps?ll=3.123462,101.441422&z=11&t=m&hl=en&gl=MY&mapclient=embed&cid=5472883420717197171"
                background={location2background}
                hours="8.30 am – 5.30 pm"
                phone="+60333923585"
              />
              <ContactCard
                title="Muthurajawela Lube Oil Blending Plant"
                subtitle="Muthurajawela, Sri Lanka"
                address={[
                  "No. 113, Ceylon Petroleum Storage Terminal,",
                  "Muthurajawela,",
                  "Wattala, Sri Lanka.",
                ]}
                link="https://maps.google.com/maps?ll=7.019126,79.873043&z=16&t=m&hl=en&gl=MY&mapclient=embed&cid=12344592510637640890"
                background={location3background}
                hours="8.00 am – 5.30 pm"
                phone="+94114382881"
              />
              {/* <ContactCard
                title="Johannesburg Lube Oil Blending Plant"
                subtitle="Johannesburg, South Africa"
                address={[
                  "15 Foden Rd,",
                  "Aureus, Randfontein,",
                  "1759, South Africa.",
                ]}
                link="https://www.google.com/maps/place/HITEK+OILS+AND+LUBRICANTS/@-26.2019969,27.6801074,206m/data=!3m1!1e3!4m6!3m5!1s0x1e95bd726311177b:0x564c208465993d94!8m2!3d-26.2019675!4d27.6800781!16s%2Fg%2F11s8hlr404?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
                background={location4background}
                hours="8.30 am – 4.30 pm"
                phone="+27829560786"
              /> */}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            {/* TODO: FIX FORM */}
            <div className="contactFormWrapper">
              <div className="contactFormWrapperHalf">
                <h2 className="textRegular textL">Get in Touch With Us!</h2>

                <div className="contactFormDisplay">
                  <div className="footer-item">
                    <p className="textS textRegular">Head Office, Malaysia</p>
                    <a
                      href="https://www.google.com/maps/place/Hyrax+Oil+Sdn.+Bhd./data=!4m2!3m1!1s0x0:0x53085859f88dd00d?sa=X&ved=1t:2428&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="textLight textXXS"
                    >
                      A-8-1, Megan Avenue II,
                      <br />
                      12, Jalan Yap Kwan Seng,
                      <br />
                      Kampung Baru,
                      <br />
                      50450 Kuala Lumpur,
                      <br />
                      Wilayah Persekutuan Kuala Lumpur.
                    </a>
                  </div>

                  {/* FOOTER CONTACT */}
                  <div className="footer-item">
                    <p className="textS textRegular">Contact</p>
                    <span>
                      <a
                        href="tel:+60321635893"
                        className="textLight textXXS footer-item-content"
                      >
                        <PhoneIcon size={16} />
                        &#40;HQ&#41; +603-2163-5893
                      </a>
                    </span>
                    <span>
                      <a
                        href="tel:+60321646577"
                        className="textLight textXXS footer-item-content"
                      >
                        <PrinterIcon size={16} />
                        &#40;HQ&#41; +603-2164-6577
                      </a>
                    </span>
                    <span>
                      <a
                        href="mailto:hyrax@hyraxoil.com"
                        className="textLight textXXS footer-item-content"
                      >
                        <EnvelopeIcon size={16} />
                        hyrax@hyraxoil.com
                      </a>
                    </span>
                    <span>
                      <a
                        href="mailto:sales@hyraxoil.com"
                        className="textLight textXXS footer-item-content"
                      >
                        <EnvelopeIcon size={16} />
                        sales@hyraxoil.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="sectionLight" id="faq">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2 className="textRegular textL">Frequently Asked Questions</h2>
            <p className="textLight">
              It can be a challenging task to identify the most suitable
              lubricant for a specific use, considering the extensive range of
              available products. It may seem like maneuvering through a
              complicated maze of options. At Hyrax Oil, we have compiled a list
              of frequently asked questions on technical query and certain
              commercial interest that we receive from our clients to help you
              navigate the complexity of the issues.
            </p>

            <hr />

            <h3 className="textRegular textM">Technical Queries</h3>
            <ul className="faqList">
              {TechnicalFAQList.map((item, index) => (
                <li key={index} className="faqItem">
                  <button
                    className={`textRegular textXXS faqQuestion ${
                      activeIndex1 === index ? "active" : ""
                    }`}
                    onClick={() => toggleFAQ1(index)}
                  >
                    {item.question}
                    <span className="textS faqIcon">
                      {activeIndex1 === index ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeIndex1 === index && (
                      <motion.div
                        className="textLight textXXS faqAnswer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            <hr />

            <h3 className="textRegular textM">Commercial Queries</h3>
            <ul className="faqList">
              {CommercialFAQList.map((item, index) => (
                <li key={index} className="faqItem">
                  <button
                    className={`textRegular textXXS faqQuestion ${
                      activeIndex2 === index ? "active" : ""
                    }`}
                    onClick={() => toggleFAQ2(index)}
                  >
                    {item.question}
                    <span className="textS faqIcon">
                      {activeIndex2 === index ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeIndex2 === index && (
                      <motion.div
                        className="textLight textXXS faqAnswer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DiscoverNext subheading="Careers" cardData={pageSections[1]} />
    </main>
  );
}

export default Page;
