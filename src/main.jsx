import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Products from "./pages/products/Products.jsx";
import Services from "./pages/services/Services.jsx";
import Media from "./pages/media/Media.jsx";
import Careers from "./pages/careers/Careers.jsx";
import Contact from "./pages/contact/Contact.jsx";
import "./main.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="media" element={<Media />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
