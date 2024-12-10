import React, { useEffect } from "react";
import Layout from "../Layout";

function Careers() {
  useEffect(() => {
    document.title = "Hyrax Oil | Careers"; // Quick solution
  }, []);

  return (
    <div>
      <Layout />

      <h1>Careers</h1>
    </div>
  );
}

export default Careers;
