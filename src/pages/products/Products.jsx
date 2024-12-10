import React, { useEffect } from "react";
import Layout from "../Layout";

function Products() {
  useEffect(() => {
    document.title = "Hyrax Oil | Products"; // Quick solution
  }, []);

  return (
    <div>
      <Layout />

      <h1>Products</h1>
    </div>
  );
}

export default Products;
