import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import TheCompany from "./pages/about/the-company/TheCompany.jsx";
import OurLeaders from "./pages/about/our-leaders/OurLeaders.jsx";
import Products from "./pages/products/Products.jsx";
import PassengerCar from "./pages/products/passenger-car/PassengerCar.jsx";
import GasFuel from "./pages/products/gas-fuel/GasFuel.jsx";
import DieselEngineOil from "./pages/products/diesel-engine-oils/DieselEngineOil.jsx";
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

        {/* ABOUT */}
        <Route path="about" element={<About />} />
        <Route path="about/the-company" element={<TheCompany />} />
        <Route path="about/our-leaders" element={<OurLeaders />} />

        {/* PRODUCTS */}
        <Route path="products" element={<Products />} />
        <Route
          path="products/passenger-car-motor-oils"
          element={<PassengerCar />}
        />
        <Route path="products/gas-fuel-engine-oils" element={<GasFuel />} />
        <Route
          path="products/diesel-engine-oils"
          element={<DieselEngineOil />}
        />
        <Route path="products/tractor-fluids" element={<Products />} />
        <Route
          path="products/four-stroke-motorcycle-oils"
          element={<Products />}
        />
        <Route
          path="products/two-stroke-motorcycle-and-engine-oils"
          element={<Products />}
        />
        <Route
          path="products/marine-and-large-engine-oils"
          element={<Products />}
        />
        <Route path="products/gear-oils" element={<Products />} />
        <Route path="products/transmission-fluids" element={<Products />} />
        <Route path="products/industrial-oils" element={<Products />} />
        <Route
          path="products/transformer-and-electrical-oils"
          element={<Products />}
        />
        <Route path="products/specialty-oils" element={<Products />} />
        <Route path="products/brake-fluids" element={<Products />} />
        <Route path="products/greases" element={<Products />} />

        {/* SERVICES */}
        <Route path="services" element={<Services />} />

        {/* MEDIA */}
        <Route path="media" element={<Media />} />

        {/* CAREERS */}
        <Route path="careers" element={<Careers />} />

        {/* CONTACT */}
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
