// src/renderer/PageShell.jsx
import React, { useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";
import "./styles/main.scss"; // global styles
import Layout from "../pages/Layout";
import Footer from "../pages/Footer";

export function PageShell({ children, pageContext }) {
  const context = usePageContext() || pageContext;
  const { documentProps } = context;

  useEffect(() => {
    if (documentProps?.title) {
      document.title = documentProps.title;
    }
    if (documentProps?.description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", documentProps.description);
    }
  }, [documentProps?.title, documentProps?.description]);

  return (
    <>
      <Layout />
      {children}
      <Footer />
    </>
  );
}
