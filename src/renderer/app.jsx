import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../functions/ScrollToTop.jsx";
import useHydrated from "../functions/useHydrated.js";
import "./styles/main.scss";
import { HashRouter as Router } from "react-router-dom";

export default function App({ children }) {
  const hydrated = useHydrated();
  if (!hydrated) return null; // Skip render on SSR

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        
        {/* Fallback to Vike-rendered pages */}
        <Route path="*" element={children} />
      </Routes>
    </BrowserRouter>
  );
}
