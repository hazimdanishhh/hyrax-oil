// src/renderer/PageShell.jsx
import React from "react";
import "./styles/main.scss";
import Layout from "../pages/Layout";
import Footer from "../pages/Footer";

export function PageShell({ children }) {
  return (
    <>
      <Layout />
      {children}
      <Footer />
    </>
  );
}
