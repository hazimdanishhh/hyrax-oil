import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Products from "./pages/products/Products.jsx";
import PassengerCar from "./pages/products/passenger-car/PassengerCar.jsx";
import Services from "./pages/services/Services.jsx";
import Media from "./pages/media/Media.jsx";
import Careers from "./pages/careers/Careers.jsx";
import Contact from "./pages/contact/Contact.jsx";
import "./main.scss";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";

export default function App() {
  return (
    // Change from Router to BrowserRouter when deploying
    // GitHub Pages does not support BrowserRouter, so use HashRouter instead
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route
          path="products/passenger-car-motor-oils"
          element={<PassengerCar />}
        />
        <Route path="gas-fuel-engine-oils" element={<Products />} />
        <Route path="diesel-engine-oils" element={<Products />} />
        <Route path="tractor-fluids" element={<Products />} />
        <Route
          path="four-stroke-motorcycle-engine-oils"
          element={<Products />}
        />
        <Route
          path="two-stroke-motorcycle-and-engine-oils"
          element={<Products />}
        />
        <Route path="marine-and-large-engine-oils" element={<Products />} />

        <Route path="services" element={<Services />} />
        <Route path="media" element={<Media />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
