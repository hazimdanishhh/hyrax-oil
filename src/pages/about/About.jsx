import React, { useEffect } from "react";
import Layout from "../Layout";
import Footer from "../Footer";

function About() {
  useEffect(() => {
    document.title = "Hyrax Oil | About Us"; // Quick solution
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <Layout />

      <h1>About</h1>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default About;
