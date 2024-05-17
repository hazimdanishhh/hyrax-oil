import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout.jsx';
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Info from './pages/info/Info.jsx';
import Contact from './pages/contact/Contact.jsx';
import "./main.scss";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="info" element={<Info />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

