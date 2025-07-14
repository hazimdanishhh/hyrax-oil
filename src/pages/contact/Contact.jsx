import React, { useEffect } from "react";
import Layout from "../Layout";
import Footer from "../Footer";
import "./Contact.scss";
import background from "/src/assets/contact/contact-us-background.webp";
import Hero from "../../components/hero/Hero";

function Contact() {
  useEffect(() => {
    document.title = "Hyrax Oil | Contact Us"; // Quick solution
  }, []);

  return (
    <>
      <Layout />

      {/* HERO SECTION */}
      <Hero
        image={`url(${background})`}
        crumble=""
        crumbleLink=""
        title="Contact Us"
        desc="Stay connected, stay ahead. Get in touch with us!"
      />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
}

export default Contact;
