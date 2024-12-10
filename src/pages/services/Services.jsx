import React, { useEffect } from "react";
import Layout from "../Layout";

function Services() {
  useEffect(() => {
    document.title = "Hyrax Oil | Services"; // Quick solution
  }, []);

  return (
    <div>
      <Layout />

      <h1>Services</h1>
    </div>
  );
}

export default Services;
