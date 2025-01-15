import React, { useEffect } from "react";
import Layout from "../Layout";
import Hero from "../components/hero/Hero";
import Footer from "../Footer";
import WorldMap from "../components/world-map/WorldMap";
import "./Contact.scss";

function Contact() {
  useEffect(() => {
    document.title = "Hyrax Oil | Contact Us"; // Quick solution
  }, []);

  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <Hero
        image='url("./contact/contact-us-background.webp")'
        crumble=""
        crumbleLink=""
        title="Contact Us"
        desc="Stay connected, stay ahead. Get in touch with us!"
      />

      <WorldMap />

      <div className="contact-section-background">
        <div className="contact-section-wrapper"></div>
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
}

export default Contact;
