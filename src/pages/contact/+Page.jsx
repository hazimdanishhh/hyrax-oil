import "./Contact.scss";
import background from "/src/assets/contact/contact.webp";
import Hero from "../../components/hero/Hero";
import ContactCard from "../../components/contactCard/ContactCard";
import { motion } from "framer-motion";
import { staggerContainer } from "../../functions/motionUtils";
import location1background from "/src/assets/contact/locationHyraxOilKL.webp";
import location2background from "/src/assets/about/theCompany.webp";
import location3background from "/src/assets/contact/locationHyraxOilSL.webp";
import location4background from "/src/assets/contact/locationHyraxOilSA.webp";
import ContactForm from "../../components/contactForm/ContactForm";

function Page() {
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
              <ContactCard
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
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2 className="textRegular textL">Contact Form</h2>

            {/* TODO: FIX FORM */}

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="sectionLight" id="faq">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2 className="textRegular textL">FAQ</h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
