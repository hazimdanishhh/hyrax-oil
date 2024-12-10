import React, { useEffect } from "react";
import Layout from "../Layout";

function Media() {
  useEffect(() => {
    document.title = "Hyrax Oil | Media"; // Quick solution
  }, []);

  return (
    <div>
      <Layout />

      <h1>Media</h1>
    </div>
  );
}

export default Media;
