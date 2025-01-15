import React, { useEffect } from "react";
import Layout from "../Layout";
import Hero from "../components/hero/Hero";
import Footer from "../Footer";

function Contact() {
  useEffect(() => {
    document.title = "Hyrax Oil | Contact Us"; // Quick solution
  }, []);

  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <Hero
        image='url("./contact/contact-us.webp")'
        crumble=""
        crumbleLink=""
        title="Contact Us"
        desc="Stay connected, stay ahead. Get in touch with us!"
      />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4103.049972029473!2d101.71184350000001!3d3.1617352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d9f4094533%3A0x53085859f88dd00d!2sHyrax%20Oil%20Sdn.%20Bhd.!5e1!3m2!1sen!2smy!4v1736907919506!5m2!1sen!2smy"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
}

export default Contact;
