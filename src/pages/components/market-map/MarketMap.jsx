import React, { useEffect, useState, useRef } from "react";
import "./MarketMap.scss";
import WorldMapPopUp from "../../contact/components/world-map-pop-up/WorldMapPopUp";
import { AnimatePresence, motion } from "framer-motion";

function MarketMap() {
  const [activePopup, setActivePopup] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const countryRef = useRef(null);

  const openOverlay = (country) => {
    setActivePopup(country);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  // Track screen size
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 769);
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  //   Click Outside of Map
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setZoomed(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="world-map-background">
        <motion.div
          className="world-map"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="world-map-header">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Our Market Presence
            </motion.h2>

            <motion.h5
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Delivering high-quality, innovative lubricants and specialty
              fluids to diverse industries across Asia Pacific, the Middle East,
              and Africa.
            </motion.h5>
          </div>
          {/* <li>
              Our customer-focused approach ensures tailored solutions backed by
              strong relationships, cutting-edge research, and advanced
              technologies. With our latest blending plant in Muthurajawela, Sri
              Lanka, we produce efficient, reliable, and sustainable products
              for automotive, industrial, agricultural, mining, and marine
              applications.
            </li>
            <li>
              Trust Hyrax Oil as your partner in lubrication to optimize
              operations and drive success globally.
            </li> */}

          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox={isSmallScreen ? "800 -300 2160 2500" : "0 0 3840 2160"}
            xmlSpace="preserve"
          >
            <g>
              <circle className="st0" cx="1245.9" cy="294" r="7.5" />
              <circle className="st0" cx="1266.6" cy="294" r="7.5" />
              <circle className="st0" cx="1287.3" cy="294" r="7.5" />
              <circle className="st0" cx="1308.1" cy="294" r="7.5" />
              <circle className="st0" cx="1328.8" cy="294" r="7.5" />
              <circle className="st0" cx="1349.6" cy="294" r="7.5" />
              <circle className="st0" cx="1764.4" cy="294" r="7.5" />
              <circle className="st0" cx="1785.2" cy="294" r="7.5" />
              <circle className="st0" cx="1805.9" cy="294" r="7.5" />
              <circle className="st0" cx="1826.7" cy="294" r="7.5" />
              <circle className="st0" cx="1266.6" cy="315" r="7.5" />
              <circle className="st0" cx="1287.3" cy="315" r="7.5" />
              <circle className="st0" cx="1308.1" cy="315" r="7.5" />
              <circle className="st0" cx="1847.4" cy="315" r="7.5" />
              <circle className="st0" cx="1868.1" cy="315" r="7.5" />
              <circle className="st0" cx="1577.8" cy="336" r="7.5" />
              <circle className="st0" cx="1785.2" cy="336" r="7.5" />
              <circle className="st0" cx="1805.9" cy="336" r="7.5" />
              <circle className="st0" cx="1826.7" cy="336" r="7.5" />
              <circle className="st0" cx="1847.4" cy="336" r="7.5" />
              <circle className="st0" cx="1868.1" cy="336" r="7.5" />
              <circle className="st0" cx="1888.9" cy="336" r="7.5" />
              <circle className="st0" cx="1909.6" cy="336" r="7.5" />
              <circle className="st0" cx="1930.4" cy="336" r="7.5" />
              <circle className="st0" cx="1951.1" cy="336" r="7.5" />
              <circle className="st0" cx="1971.9" cy="336" r="7.5" />
              <circle className="st0" cx="2137.8" cy="336" r="7.5" />
              <circle className="st0" cx="2158.5" cy="336" r="7.5" />
              <circle className="st0" cx="2179.3" cy="336" r="7.5" />
              <circle className="st0" cx="2200" cy="336" r="7.5" />
              <circle className="st0" cx="1557" cy="357" r="7.5" />
              <circle className="st0" cx="1577.8" cy="357" r="7.5" />
              <circle className="st0" cx="1681.5" cy="357" r="7.5" />
              <circle className="st0" cx="1743.7" cy="357" r="7.5" />
              <circle className="st0" cx="1764.4" cy="357" r="7.5" />
              <circle className="st0" cx="1785.2" cy="357" r="7.5" />
              <circle className="st0" cx="1805.9" cy="357" r="7.5" />
              <circle className="st0" cx="1826.7" cy="357" r="7.5" />
              <circle className="st0" cx="1847.4" cy="357" r="7.5" />
              <circle className="st0" cx="1868.1" cy="357" r="7.5" />
              <circle className="st0" cx="1888.9" cy="357" r="7.5" />
              <circle className="st0" cx="1909.6" cy="357" r="7.5" />
              <circle className="st0" cx="1930.4" cy="357" r="7.5" />
              <circle className="st0" cx="1951.1" cy="357" r="7.5" />
              <circle className="st0" cx="1971.9" cy="357" r="7.5" />
              <circle className="st0" cx="1992.6" cy="357" r="7.5" />
              <circle className="st0" cx="2013.3" cy="357" r="7.5" />
              <circle className="st0" cx="2034.1" cy="357" r="7.5" />
              <circle className="st0" cx="2054.8" cy="357" r="7.5" />
              <circle className="st0" cx="2075.6" cy="357" r="7.5" />
              <circle className="st0" cx="2096.3" cy="357" r="7.5" />
              <circle className="st0" cx="2200" cy="357" r="7.5" />
              <circle className="st0" cx="1557" cy="378" r="7.5" />
              <circle className="st0" cx="1577.8" cy="378" r="7.5" />
              <circle className="st0" cx="1681.5" cy="378" r="7.5" />
              <circle className="st0" cx="1702.2" cy="378" r="7.5" />
              <circle className="st0" cx="1722.9" cy="378" r="7.5" />
              <circle className="st0" cx="1743.7" cy="378" r="7.5" />
              <circle className="st0" cx="1764.4" cy="378" r="7.5" />
              <circle className="st0" cx="1785.2" cy="378" r="7.5" />
              <circle className="st0" cx="1805.9" cy="378" r="7.5" />
              <circle className="st0" cx="1826.7" cy="378" r="7.5" />
              <circle className="st0" cx="1847.4" cy="378" r="7.5" />
              <circle className="st0" cx="1868.1" cy="378" r="7.5" />
              <circle className="st0" cx="1888.9" cy="378" r="7.5" />
              <circle className="st0" cx="1909.6" cy="378" r="7.5" />
              <circle className="st0" cx="1930.4" cy="378" r="7.5" />
              <circle className="st0" cx="1951.1" cy="378" r="7.5" />
              <circle className="st0" cx="1971.9" cy="378" r="7.5" />
              <circle className="st0" cx="1992.6" cy="378" r="7.5" />
              <circle className="st0" cx="2013.3" cy="378" r="7.5" />
              <circle className="st0" cx="2034.1" cy="378" r="7.5" />
              <circle className="st0" cx="2054.8" cy="378" r="7.5" />
              <circle className="st0" cx="2075.6" cy="378" r="7.5" />
              <circle className="st0" cx="2096.3" cy="378" r="7.5" />
              <circle className="st0" cx="2117.1" cy="378" r="7.5" />
              <circle className="st0" cx="2137.8" cy="378" r="7.5" />
              <circle className="st0" cx="2158.5" cy="378" r="7.5" />
              <circle className="st0" cx="2179.3" cy="378" r="7.5" />
              <circle className="st0" cx="2200" cy="378" r="7.5" />
              <circle className="st0" cx="2220.8" cy="378" r="7.5" />
              <circle className="st0" cx="2241.5" cy="378" r="7.5" />
              <circle className="st0" cx="2262.2" cy="378" r="7.5" />
              <circle className="st0" cx="2283" cy="378" r="7.5" />
              <circle className="st0" cx="2303.7" cy="378" r="7.5" />
              <circle className="st0" cx="2324.5" cy="378" r="7.5" />
              <circle className="st0" cx="2345.2" cy="378" r="7.5" />
              <circle className="st0" cx="2490.4" cy="378" r="7.5" />
              <circle className="st0" cx="2511.2" cy="378" r="7.5" />
              <circle className="st0" cx="1308.1" cy="399" r="7.5" />
              <circle className="st0" cx="1328.8" cy="399" r="7.5" />
              <circle className="st0" cx="1349.6" cy="399" r="7.5" />
              <circle className="st0" cx="1370.3" cy="399" r="7.5" />
              <circle className="st0" cx="1391.1" cy="399" r="7.5" />
              <circle className="st0" cx="1411.8" cy="399" r="7.5" />
              <circle className="st0" cx="1557" cy="399" r="7.5" />
              <circle className="st0" cx="1577.8" cy="399" r="7.5" />
              <circle className="st0" cx="1598.5" cy="399" r="7.5" />
              <circle className="st0" cx="1619.2" cy="399" r="7.5" />
              <circle className="st0" cx="1640" cy="399" r="7.5" />
              <circle className="st0" cx="1660.7" cy="399" r="7.5" />
              <circle className="st0" cx="1681.5" cy="399" r="7.5" />
              <circle className="st0" cx="1702.2" cy="399" r="7.5" />
              <circle className="st0" cx="1722.9" cy="399" r="7.5" />
              <circle className="st0" cx="1743.7" cy="399" r="7.5" />
              <circle className="st0" cx="1764.4" cy="399" r="7.5" />
              <circle className="st0" cx="1785.2" cy="399" r="7.5" />
              <circle className="st0" cx="1805.9" cy="399" r="7.5" />
              <circle className="st0" cx="1826.7" cy="399" r="7.5" />
              <circle className="st0" cx="1847.4" cy="399" r="7.5" />
              <circle className="st0" cx="1868.1" cy="399" r="7.5" />
              <circle className="st0" cx="1888.9" cy="399" r="7.5" />
              <circle className="st0" cx="1909.6" cy="399" r="7.5" />
              <circle className="st0" cx="1930.4" cy="399" r="7.5" />
              <circle className="st0" cx="1951.1" cy="399" r="7.5" />
              <circle className="st0" cx="1971.9" cy="399" r="7.5" />
              <circle className="st0" cx="1992.6" cy="399" r="7.5" />
              <circle className="st0" cx="2013.3" cy="399" r="7.5" />
              <circle className="st0" cx="2034.1" cy="399" r="7.5" />
              <circle className="st0" cx="2054.8" cy="399" r="7.5" />
              <circle className="st0" cx="2075.6" cy="399" r="7.5" />
              <circle className="st0" cx="2096.3" cy="399" r="7.5" />
              <circle className="st0" cx="2117.1" cy="399" r="7.5" />
              <circle className="st0" cx="2137.8" cy="399" r="7.5" />
              <circle className="st0" cx="2158.5" cy="399" r="7.5" />
              <circle className="st0" cx="2179.3" cy="399" r="7.5" />
              <circle className="st0" cx="2200" cy="399" r="7.5" />
              <circle className="st0" cx="2220.8" cy="399" r="7.5" />
              <circle className="st0" cx="2241.5" cy="399" r="7.5" />
              <circle className="st0" cx="2262.2" cy="399" r="7.5" />
              <circle className="st0" cx="2283" cy="399" r="7.5" />
              <circle className="st0" cx="2303.7" cy="399" r="7.5" />
              <circle className="st0" cx="2324.5" cy="399" r="7.5" />
              <circle className="st0" cx="2345.2" cy="399" r="7.5" />
              <circle className="st0" cx="2366" cy="399" r="7.5" />
              <circle className="st0" cx="2386.7" cy="399" r="7.5" />
              <circle className="st0" cx="2407.4" cy="399" r="7.5" />
              <circle className="st0" cx="2428.2" cy="399" r="7.5" />
              <circle className="st0" cx="2448.9" cy="399" r="7.5" />
              <circle className="st0" cx="2469.7" cy="399" r="7.5" />
              <circle className="st0" cx="2490.4" cy="399" r="7.5" />
              <circle className="st0" cx="2511.2" cy="399" r="7.5" />
              <circle className="st0" cx="2531.9" cy="399" r="7.5" />
              <circle className="st0" cx="1266.6" cy="420" r="7.5" />
              <circle className="st0" cx="1287.3" cy="420" r="7.5" />
              <circle className="st0" cx="1308.1" cy="420" r="7.5" />
              <circle className="st0" cx="1328.8" cy="420" r="7.5" />
              <circle className="st0" cx="1349.6" cy="420" r="7.5" />
              <circle className="st0" cx="1370.3" cy="420" r="7.5" />
              <circle className="st0" cx="1391.1" cy="420" r="7.5" />
              <circle className="st0" cx="1411.8" cy="420" r="7.5" />
              <circle className="st0" cx="1432.6" cy="420" r="7.5" />
              <circle className="st0" cx="1453.3" cy="420" r="7.5" />
              <circle className="st0" cx="1474" cy="420" r="7.5" />
              <circle className="st0" cx="1494.8" cy="420" r="7.5" />
              <circle className="st0" cx="1515.5" cy="420" r="7.5" />
              <circle className="st0" cx="1536.3" cy="420" r="7.5" />
              <circle className="st0" cx="1557" cy="420" r="7.5" />
              <circle className="st0" cx="1577.8" cy="420" r="7.5" />
              <circle className="st0" cx="1598.5" cy="420" r="7.5" />
              <circle className="st0" cx="1619.2" cy="420" r="7.5" />
              <circle className="st0" cx="1640" cy="420" r="7.5" />
              <circle className="st0" cx="1660.7" cy="420" r="7.5" />
              <circle className="st0" cx="1681.5" cy="420" r="7.5" />
              <circle className="st0" cx="1702.2" cy="420" r="7.5" />
              <circle className="st0" cx="1722.9" cy="420" r="7.5" />
              <circle className="st0" cx="1743.7" cy="420" r="7.5" />
              <circle className="st0" cx="1764.4" cy="420" r="7.5" />
              <circle className="st0" cx="1785.2" cy="420" r="7.5" />
              <circle className="st0" cx="1805.9" cy="420" r="7.5" />
              <circle className="st0" cx="1826.7" cy="420" r="7.5" />
              <circle className="st0" cx="1847.4" cy="420" r="7.5" />
              <circle className="st0" cx="1868.1" cy="420" r="7.5" />
              <circle className="st0" cx="1888.9" cy="420" r="7.5" />
              <circle className="st0" cx="1909.6" cy="420" r="7.5" />
              <circle className="st0" cx="1930.4" cy="420" r="7.5" />
              <circle className="st0" cx="1951.1" cy="420" r="7.5" />
              <circle className="st0" cx="1971.9" cy="420" r="7.5" />
              <circle className="st0" cx="1992.6" cy="420" r="7.5" />
              <circle className="st0" cx="2013.3" cy="420" r="7.5" />
              <circle className="st0" cx="2034.1" cy="420" r="7.5" />
              <circle className="st0" cx="2054.8" cy="420" r="7.5" />
              <circle className="st0" cx="2075.6" cy="420" r="7.5" />
              <circle className="st0" cx="2096.3" cy="420" r="7.5" />
              <circle className="st0" cx="2117.1" cy="420" r="7.5" />
              <circle className="st0" cx="2137.8" cy="420" r="7.5" />
              <circle className="st0" cx="2158.5" cy="420" r="7.5" />
              <circle className="st0" cx="2179.3" cy="420" r="7.5" />
              <circle className="st0" cx="2200" cy="420" r="7.5" />
              <circle className="st0" cx="2220.8" cy="420" r="7.5" />
              <circle className="st0" cx="2241.5" cy="420" r="7.5" />
              <circle className="st0" cx="2262.2" cy="420" r="7.5" />
              <circle className="st0" cx="2283" cy="420" r="7.5" />
              <circle className="st0" cx="2303.7" cy="420" r="7.5" />
              <circle className="st0" cx="2324.5" cy="420" r="7.5" />
              <circle className="st0" cx="2345.2" cy="420" r="7.5" />
              <circle className="st0" cx="2366" cy="420" r="7.5" />
              <circle className="st0" cx="2386.7" cy="420" r="7.5" />
              <circle className="st0" cx="2407.4" cy="420" r="7.5" />
              <circle className="st0" cx="2428.2" cy="420" r="7.5" />
              <circle className="st0" cx="2448.9" cy="420" r="7.5" />
              <circle className="st0" cx="2469.7" cy="420" r="7.5" />
              <circle className="st0" cx="2490.4" cy="420" r="7.5" />
              <circle className="st0" cx="2511.2" cy="420" r="7.5" />
              <circle className="st0" cx="2531.9" cy="420" r="7.5" />
              <circle className="st0" cx="2552.7" cy="420" r="7.5" />
              <circle className="st0" cx="2573.4" cy="420" r="7.5" />
              <circle className="st0" cx="2594.1" cy="420" r="7.5" />
              <circle className="st0" cx="2614.9" cy="420" r="7.5" />
              <circle className="st0" cx="2635.6" cy="420" r="7.5" />
              <circle className="st0" cx="1245.9" cy="441" r="7.5" />
              <circle className="st0" cx="1266.6" cy="441" r="7.5" />
              <circle className="st0" cx="1287.3" cy="441" r="7.5" />
              <circle className="st0" cx="1308.1" cy="441" r="7.5" />
              <circle className="st0" cx="1328.8" cy="441" r="7.5" />
              <circle className="st0" cx="1349.6" cy="441" r="7.5" />
              <circle className="st0" cx="1370.3" cy="441" r="7.5" />
              <circle className="st0" cx="1391.1" cy="441" r="7.5" />
              <circle className="st0" cx="1411.8" cy="441" r="7.5" />
              <circle className="st0" cx="1432.6" cy="441" r="7.5" />
              <circle className="st0" cx="1453.3" cy="441" r="7.5" />
              <circle className="st0" cx="1474" cy="441" r="7.5" />
              <circle className="st0" cx="1494.8" cy="441" r="7.5" />
              <circle className="st0" cx="1515.5" cy="441" r="7.5" />
              <circle className="st0" cx="1536.3" cy="441" r="7.5" />
              <circle className="st0" cx="1557" cy="441" r="7.5" />
              <circle className="st0" cx="1577.8" cy="441" r="7.5" />
              <circle className="st0" cx="1598.5" cy="441" r="7.5" />
              <circle className="st0" cx="1619.2" cy="441" r="7.5" />
              <circle className="st0" cx="1640" cy="441" r="7.5" />
              <circle className="st0" cx="1660.7" cy="441" r="7.5" />
              <circle className="st0" cx="1681.5" cy="441" r="7.5" />
              <circle className="st0" cx="1702.2" cy="441" r="7.5" />
              <circle className="st0" cx="1722.9" cy="441" r="7.5" />
              <circle className="st0" cx="1743.7" cy="441" r="7.5" />
              <circle className="st0" cx="1764.4" cy="441" r="7.5" />
              <circle className="st0" cx="1785.2" cy="441" r="7.5" />
              <circle className="st0" cx="1805.9" cy="441" r="7.5" />
              <circle className="st0" cx="1826.7" cy="441" r="7.5" />
              <circle className="st0" cx="1847.4" cy="441" r="7.5" />
              <circle className="st0" cx="1868.1" cy="441" r="7.5" />
              <circle className="st0" cx="1888.9" cy="441" r="7.5" />
              <circle className="st0" cx="1909.6" cy="441" r="7.5" />
              <circle className="st0" cx="1930.4" cy="441" r="7.5" />
              <circle className="st0" cx="1951.1" cy="441" r="7.5" />
              <circle className="st0" cx="1971.9" cy="441" r="7.5" />
              <circle className="st0" cx="1992.6" cy="441" r="7.5" />
              <circle className="st0" cx="2013.3" cy="441" r="7.5" />
              <circle className="st0" cx="2034.1" cy="441" r="7.5" />
              <circle className="st0" cx="2054.8" cy="441" r="7.5" />
              <circle className="st0" cx="2075.6" cy="441" r="7.5" />
              <circle className="st0" cx="2096.3" cy="441" r="7.5" />
              <circle className="st0" cx="2117.1" cy="441" r="7.5" />
              <circle className="st0" cx="2137.8" cy="441" r="7.5" />
              <circle className="st0" cx="2158.5" cy="441" r="7.5" />
              <circle className="st0" cx="2179.3" cy="441" r="7.5" />
              <circle className="st0" cx="2200" cy="441" r="7.5" />
              <circle className="st0" cx="2220.8" cy="441" r="7.5" />
              <circle className="st0" cx="2241.5" cy="441" r="7.5" />
              <circle className="st0" cx="2262.2" cy="441" r="7.5" />
              <circle className="st0" cx="2283" cy="441" r="7.5" />
              <circle className="st0" cx="2303.7" cy="441" r="7.5" />
              <circle className="st0" cx="2324.5" cy="441" r="7.5" />
              <circle className="st0" cx="2345.2" cy="441" r="7.5" />
              <circle className="st0" cx="2366" cy="441" r="7.5" />
              <circle className="st0" cx="2386.7" cy="441" r="7.5" />
              <circle className="st0" cx="2407.4" cy="441" r="7.5" />
              <circle className="st0" cx="2428.2" cy="441" r="7.5" />
              <circle className="st0" cx="2448.9" cy="441" r="7.5" />
              <circle className="st0" cx="2469.7" cy="441" r="7.5" />
              <circle className="st0" cx="2490.4" cy="441" r="7.5" />
              <circle className="st0" cx="2511.2" cy="441" r="7.5" />
              <circle className="st0" cx="2531.9" cy="441" r="7.5" />
              <circle className="st0" cx="2552.7" cy="441" r="7.5" />
              <circle className="st0" cx="2573.4" cy="441" r="7.5" />
              <circle className="st0" cx="2594.1" cy="441" r="7.5" />
              <circle className="st0" cx="1225.1" cy="462" r="7.5" />
              <circle className="st0" cx="1245.9" cy="462" r="7.5" />
              <circle className="st0" cx="1266.6" cy="462" r="7.5" />
              <circle className="st0" cx="1287.3" cy="462" r="7.5" />
              <circle className="st0" cx="1308.1" cy="462" r="7.5" />
              <circle className="st0" cx="1328.8" cy="462" r="7.5" />
              <circle className="st0" cx="1349.6" cy="462" r="7.5" />
              <circle className="st0" cx="1370.3" cy="462" r="7.5" />
              <circle className="st0" cx="1391.1" cy="462" r="7.5" />
              <circle className="st0" cx="1411.8" cy="462" r="7.5" />
              <circle className="st0" cx="1432.6" cy="462" r="7.5" />
              <circle className="st0" cx="1453.3" cy="462" r="7.5" />
              <circle className="st0" cx="1474" cy="462" r="7.5" />
              <circle className="st0" cx="1494.8" cy="462" r="7.5" />
              <circle className="st0" cx="1515.5" cy="462" r="7.5" />
              <circle className="st0" cx="1536.3" cy="462" r="7.5" />
              <circle className="st0" cx="1557" cy="462" r="7.5" />
              <circle className="st0" cx="1577.8" cy="462" r="7.5" />
              <circle className="st0" cx="1598.5" cy="462" r="7.5" />
              <circle className="st0" cx="1619.2" cy="462" r="7.5" />
              <circle className="st0" cx="1640" cy="462" r="7.5" />
              <circle className="st0" cx="1660.7" cy="462" r="7.5" />
              <circle className="st0" cx="1681.5" cy="462" r="7.5" />
              <circle className="st0" cx="1702.2" cy="462" r="7.5" />
              <circle className="st0" cx="1722.9" cy="462" r="7.5" />
              <circle className="st0" cx="1743.7" cy="462" r="7.5" />
              <circle className="st0" cx="1764.4" cy="462" r="7.5" />
              <circle className="st0" cx="1785.2" cy="462" r="7.5" />
              <circle className="st0" cx="1805.9" cy="462" r="7.5" />
              <circle className="st0" cx="1826.7" cy="462" r="7.5" />
              <circle className="st0" cx="1847.4" cy="462" r="7.5" />
              <circle className="st0" cx="1868.1" cy="462" r="7.5" />
              <circle className="st0" cx="1888.9" cy="462" r="7.5" />
              <circle className="st0" cx="1909.6" cy="462" r="7.5" />
              <circle className="st0" cx="1930.4" cy="462" r="7.5" />
              <circle className="st0" cx="1951.1" cy="462" r="7.5" />
              <circle className="st0" cx="1971.9" cy="462" r="7.5" />
              <circle className="st0" cx="1992.6" cy="462" r="7.5" />
              <circle className="st0" cx="2013.3" cy="462" r="7.5" />
              <circle className="st0" cx="2034.1" cy="462" r="7.5" />
              <circle className="st0" cx="2054.8" cy="462" r="7.5" />
              <circle className="st0" cx="2075.6" cy="462" r="7.5" />
              <circle className="st0" cx="2096.3" cy="462" r="7.5" />
              <circle className="st0" cx="2117.1" cy="462" r="7.5" />
              <circle className="st0" cx="2137.8" cy="462" r="7.5" />
              <circle className="st0" cx="2158.5" cy="462" r="7.5" />
              <circle className="st0" cx="2179.3" cy="462" r="7.5" />
              <circle className="st0" cx="2200" cy="462" r="7.5" />
              <circle className="st0" cx="2220.8" cy="462" r="7.5" />
              <circle className="st0" cx="2241.5" cy="462" r="7.5" />
              <circle className="st0" cx="2262.2" cy="462" r="7.5" />
              <circle className="st0" cx="2283" cy="462" r="7.5" />
              <circle className="st0" cx="2303.7" cy="462" r="7.5" />
              <circle className="st0" cx="2324.5" cy="462" r="7.5" />
              <circle className="st0" cx="2345.2" cy="462" r="7.5" />
              <circle className="st0" cx="2366" cy="462" r="7.5" />
              <circle className="st0" cx="2386.7" cy="462" r="7.5" />
              <circle className="st0" cx="2407.4" cy="462" r="7.5" />
              <circle className="st0" cx="2428.2" cy="462" r="7.5" />
              <circle className="st0" cx="2448.9" cy="462" r="7.5" />
              <circle className="st0" cx="2469.7" cy="462" r="7.5" />
              <circle className="st0" cx="2490.4" cy="462" r="7.5" />
              <circle className="st0" cx="2511.2" cy="462" r="7.5" />
              <circle className="st0" cx="2531.9" cy="462" r="7.5" />
              <circle className="st0" cx="2552.7" cy="462" r="7.5" />
              <circle className="st0" cx="2573.4" cy="462" r="7.5" />
              <circle className="st0" cx="2594.1" cy="462" r="7.5" />
              <circle className="st0" cx="1204.4" cy="483" r="7.5" />
              <circle className="st0" cx="1225.1" cy="483" r="7.5" />
              <circle className="st0" cx="1245.9" cy="483" r="7.5" />
              <circle className="st0" cx="1266.6" cy="483" r="7.5" />
              <circle className="st0" cx="1287.3" cy="483" r="7.5" />
              <circle className="st0" cx="1308.1" cy="483" r="7.5" />
              <circle className="st0" cx="1349.6" cy="483" r="7.5" />
              <circle className="st0" cx="1370.3" cy="483" r="7.5" />
              <circle className="st0" cx="1391.1" cy="483" r="7.5" />
              <circle className="st0" cx="1411.8" cy="483" r="7.5" />
              <circle className="st0" cx="1432.6" cy="483" r="7.5" />
              <circle className="st0" cx="1453.3" cy="483" r="7.5" />
              <circle className="st0" cx="1474" cy="483" r="7.5" />
              <circle className="st0" cx="1494.8" cy="483" r="7.5" />
              <circle className="st0" cx="1515.5" cy="483" r="7.5" />
              <circle className="st0" cx="1536.3" cy="483" r="7.5" />
              <circle className="st0" cx="1557" cy="483" r="7.5" />
              <circle className="st0" cx="1577.8" cy="483" r="7.5" />
              <circle className="st0" cx="1598.5" cy="483" r="7.5" />
              <circle className="st0" cx="1619.2" cy="483" r="7.5" />
              <circle className="st0" cx="1640" cy="483" r="7.5" />
              <circle className="st0" cx="1660.7" cy="483" r="7.5" />
              <circle className="st0" cx="1681.5" cy="483" r="7.5" />
              <circle className="st0" cx="1702.2" cy="483" r="7.5" />
              <circle className="st0" cx="1722.9" cy="483" r="7.5" />
              <circle className="st0" cx="1743.7" cy="483" r="7.5" />
              <circle className="st0" cx="1764.4" cy="483" r="7.5" />
              <circle className="st0" cx="1785.2" cy="483" r="7.5" />
              <circle className="st0" cx="1805.9" cy="483" r="7.5" />
              <circle className="st0" cx="1826.7" cy="483" r="7.5" />
              <circle className="st0" cx="1847.4" cy="483" r="7.5" />
              <circle className="st0" cx="1868.1" cy="483" r="7.5" />
              <circle className="st0" cx="1888.9" cy="483" r="7.5" />
              <circle className="st0" cx="1909.6" cy="483" r="7.5" />
              <circle className="st0" cx="1930.4" cy="483" r="7.5" />
              <circle className="st0" cx="1951.1" cy="483" r="7.5" />
              <circle className="st0" cx="1971.9" cy="483" r="7.5" />
              <circle className="st0" cx="1992.6" cy="483" r="7.5" />
              <circle className="st0" cx="2013.3" cy="483" r="7.5" />
              <circle className="st0" cx="2034.1" cy="483" r="7.5" />
              <circle className="st0" cx="2054.8" cy="483" r="7.5" />
              <circle className="st0" cx="2075.6" cy="483" r="7.5" />
              <circle className="st0" cx="2096.3" cy="483" r="7.5" />
              <circle className="st0" cx="2117.1" cy="483" r="7.5" />
              <circle className="st0" cx="2137.8" cy="483" r="7.5" />
              <circle className="st0" cx="2158.5" cy="483" r="7.5" />
              <circle className="st0" cx="2179.3" cy="483" r="7.5" />
              <circle className="st0" cx="2200" cy="483" r="7.5" />
              <circle className="st0" cx="2220.8" cy="483" r="7.5" />
              <circle className="st0" cx="2241.5" cy="483" r="7.5" />
              <circle className="st0" cx="2262.2" cy="483" r="7.5" />
              <circle className="st0" cx="2283" cy="483" r="7.5" />
              <circle className="st0" cx="2303.7" cy="483" r="7.5" />
              <circle className="st0" cx="2324.5" cy="483" r="7.5" />
              <circle className="st0" cx="2345.2" cy="483" r="7.5" />
              <circle className="st0" cx="2366" cy="483" r="7.5" />
              <circle className="st0" cx="2386.7" cy="483" r="7.5" />
              <circle className="st0" cx="2407.4" cy="483" r="7.5" />
              <circle className="st0" cx="2428.2" cy="483" r="7.5" />
              <circle className="st0" cx="2511.2" cy="483" r="7.5" />
              <circle className="st0" cx="2531.9" cy="483" r="7.5" />
              <circle className="st0" cx="2552.7" cy="483" r="7.5" />
              <circle className="st0" cx="2573.4" cy="483" r="7.5" />
              <circle className="st0" cx="1204.4" cy="504" r="7.5" />
              <circle className="st0" cx="1225.1" cy="504" r="7.5" />
              <circle className="st0" cx="1245.9" cy="504" r="7.5" />
              <circle className="st0" cx="1266.6" cy="504" r="7.5" />
              <circle className="st0" cx="1287.3" cy="504" r="7.5" />
              <circle className="st0" cx="1308.1" cy="504" r="7.5" />
              <circle className="st0" cx="1349.6" cy="504" r="7.5" />
              <circle className="st0" cx="1370.3" cy="504" r="7.5" />
              <circle className="st0" cx="1391.1" cy="504" r="7.5" />
              <circle className="st0" cx="1411.8" cy="504" r="7.5" />
              <circle className="st0" cx="1432.6" cy="504" r="7.5" />
              <circle className="st0" cx="1453.3" cy="504" r="7.5" />
              <circle className="st0" cx="1474" cy="504" r="7.5" />
              <circle className="st0" cx="1494.8" cy="504" r="7.5" />
              <circle className="st0" cx="1515.5" cy="504" r="7.5" />
              <circle className="st0" cx="1536.3" cy="504" r="7.5" />
              <circle className="st0" cx="1557" cy="504" r="7.5" />
              <circle className="st0" cx="1577.8" cy="504" r="7.5" />
              <circle className="st0" cx="1598.5" cy="504" r="7.5" />
              <circle className="st0" cx="1619.2" cy="504" r="7.5" />
              <circle className="st0" cx="1640" cy="504" r="7.5" />
              <circle className="st0" cx="1660.7" cy="504" r="7.5" />
              <circle className="st0" cx="1681.5" cy="504" r="7.5" />
              <circle className="st0" cx="1702.2" cy="504" r="7.5" />
              <circle className="st0" cx="1722.9" cy="504" r="7.5" />
              <circle className="st0" cx="1743.7" cy="504" r="7.5" />
              <circle className="st0" cx="1764.4" cy="504" r="7.5" />
              <circle className="st0" cx="1785.2" cy="504" r="7.5" />
              <circle className="st0" cx="1805.9" cy="504" r="7.5" />
              <circle className="st0" cx="1826.7" cy="504" r="7.5" />
              <circle className="st0" cx="1847.4" cy="504" r="7.5" />
              <circle className="st0" cx="1868.1" cy="504" r="7.5" />
              <circle className="st0" cx="1888.9" cy="504" r="7.5" />
              <circle className="st0" cx="1909.6" cy="504" r="7.5" />
              <circle className="st0" cx="1930.4" cy="504" r="7.5" />
              <circle className="st0" cx="1951.1" cy="504" r="7.5" />
              <circle className="st0" cx="1971.9" cy="504" r="7.5" />
              <circle className="st0" cx="1992.6" cy="504" r="7.5" />
              <circle className="st0" cx="2013.3" cy="504" r="7.5" />
              <circle className="st0" cx="2034.1" cy="504" r="7.5" />
              <circle className="st0" cx="2054.8" cy="504" r="7.5" />
              <circle className="st0" cx="2075.6" cy="504" r="7.5" />
              <circle className="st0" cx="2096.3" cy="504" r="7.5" />
              <circle className="st0" cx="2117.1" cy="504" r="7.5" />
              <circle className="st0" cx="2137.8" cy="504" r="7.5" />
              <circle className="st0" cx="2158.5" cy="504" r="7.5" />
              <circle className="st0" cx="2179.3" cy="504" r="7.5" />
              <circle className="st0" cx="2200" cy="504" r="7.5" />
              <circle className="st0" cx="2220.8" cy="504" r="7.5" />
              <circle className="st0" cx="2241.5" cy="504" r="7.5" />
              <circle className="st0" cx="2262.2" cy="504" r="7.5" />
              <circle className="st0" cx="2283" cy="504" r="7.5" />
              <circle className="st0" cx="2303.7" cy="504" r="7.5" />
              <circle className="st0" cx="2324.5" cy="504" r="7.5" />
              <circle className="st0" cx="2345.2" cy="504" r="7.5" />
              <circle className="st0" cx="2511.2" cy="504" r="7.5" />
              <circle className="st0" cx="2531.9" cy="504" r="7.5" />
              <circle className="st0" cx="2552.7" cy="504" r="7.5" />
              <circle className="st0" cx="1079.9" cy="525" r="7.5" />
              <circle className="st0" cx="1100.7" cy="525" r="7.5" />
              <circle className="st0" cx="1121.4" cy="525" r="7.5" />
              <circle className="st0" cx="1225.1" cy="525" r="7.5" />
              <circle className="st0" cx="1245.9" cy="525" r="7.5" />
              <circle className="st0" cx="1266.6" cy="525" r="7.5" />
              <circle className="st0" cx="1287.3" cy="525" r="7.5" />
              <circle className="st0" cx="1349.6" cy="525" r="7.5" />
              <circle className="st0" cx="1370.3" cy="525" r="7.5" />
              <circle className="st0" cx="1391.1" cy="525" r="7.5" />
              <circle className="st0" cx="1411.8" cy="525" r="7.5" />
              <circle className="st0" cx="1432.6" cy="525" r="7.5" />
              <circle className="st0" cx="1453.3" cy="525" r="7.5" />
              <circle className="st0" cx="1474" cy="525" r="7.5" />
              <circle className="st0" cx="1494.8" cy="525" r="7.5" />
              <circle className="st0" cx="1515.5" cy="525" r="7.5" />
              <circle className="st0" cx="1536.3" cy="525" r="7.5" />
              <circle className="st0" cx="1557" cy="525" r="7.5" />
              <circle className="st0" cx="1577.8" cy="525" r="7.5" />
              <circle className="st0" cx="1598.5" cy="525" r="7.5" />
              <circle className="st0" cx="1619.2" cy="525" r="7.5" />
              <circle className="st0" cx="1640" cy="525" r="7.5" />
              <circle className="st0" cx="1660.7" cy="525" r="7.5" />
              <circle className="st0" cx="1681.5" cy="525" r="7.5" />
              <circle className="st0" cx="1702.2" cy="525" r="7.5" />
              <circle className="st0" cx="1722.9" cy="525" r="7.5" />
              <circle className="st0" cx="1743.7" cy="525" r="7.5" />
              <circle className="st0" cx="1764.4" cy="525" r="7.5" />
              <circle className="st0" cx="1785.2" cy="525" r="7.5" />
              <circle className="st0" cx="1805.9" cy="525" r="7.5" />
              <circle className="st0" cx="1826.7" cy="525" r="7.5" />
              <circle className="st0" cx="1847.4" cy="525" r="7.5" />
              <circle className="st0" cx="1868.1" cy="525" r="7.5" />
              <circle className="st0" cx="1888.9" cy="525" r="7.5" />
              <circle className="st0" cx="1909.6" cy="525" r="7.5" />
              <circle className="st0" cx="1930.4" cy="525" r="7.5" />
              <circle className="st0" cx="1951.1" cy="525" r="7.5" />
              <circle className="st0" cx="1971.9" cy="525" r="7.5" />
              <circle className="st0" cx="1992.6" cy="525" r="7.5" />
              <circle className="st0" cx="2013.3" cy="525" r="7.5" />
              <circle className="st0" cx="2034.1" cy="525" r="7.5" />
              <circle className="st0" cx="2054.8" cy="525" r="7.5" />
              <circle className="st0" cx="2075.6" cy="525" r="7.5" />
              <circle className="st0" cx="2096.3" cy="525" r="7.5" />
              <circle className="st0" cx="2117.1" cy="525" r="7.5" />
              <circle className="st0" cx="2137.8" cy="525" r="7.5" />
              <circle className="st0" cx="2158.5" cy="525" r="7.5" />
              <circle className="st0" cx="2179.3" cy="525" r="7.5" />
              <circle className="st0" cx="2200" cy="525" r="7.5" />
              <circle className="st0" cx="2220.8" cy="525" r="7.5" />
              <circle className="st0" cx="2241.5" cy="525" r="7.5" />
              <circle className="st0" cx="2262.2" cy="525" r="7.5" />
              <circle className="st0" cx="2283" cy="525" r="7.5" />
              <circle className="st0" cx="2303.7" cy="525" r="7.5" />
              <circle className="st0" cx="2324.5" cy="525" r="7.5" />
              <circle className="st0" cx="2345.2" cy="525" r="7.5" />
              <circle className="st0" cx="2490.4" cy="525" r="7.5" />
              <circle className="st0" cx="2511.2" cy="525" r="7.5" />
              <circle className="st0" cx="2531.9" cy="525" r="7.5" />
              <circle className="st0" cx="2552.7" cy="525" r="7.5" />
              <circle className="st0" cx="1079.9" cy="546" r="7.5" />
              <circle className="st0" cx="1100.7" cy="546" r="7.5" />
              <circle className="st0" cx="1121.4" cy="546" r="7.5" />
              <circle className="st0" cx="1142.1" cy="546" r="7.5" />
              <circle className="st0" cx="1225.1" cy="546" r="7.5" />
              <circle className="st0" cx="1245.9" cy="546" r="7.5" />
              <circle className="st0" cx="1349.6" cy="546" r="7.5" />
              <circle className="st0" cx="1370.3" cy="546" r="7.5" />
              <circle className="st0" cx="1391.1" cy="546" r="7.5" />
              <circle className="st0" cx="1411.8" cy="546" r="7.5" />
              <circle className="st0" cx="1432.6" cy="546" r="7.5" />
              <circle className="st0" cx="1453.3" cy="546" r="7.5" />
              <circle className="st0" cx="1474" cy="546" r="7.5" />
              <circle className="st0" cx="1494.8" cy="546" r="7.5" />
              <circle className="st0" cx="1515.5" cy="546" r="7.5" />
              <circle className="st0" cx="1536.3" cy="546" r="7.5" />
              <circle className="st0" cx="1557" cy="546" r="7.5" />
              <circle className="st0" cx="1577.8" cy="546" r="7.5" />
              <circle className="st0" cx="1598.5" cy="546" r="7.5" />
              <circle className="st0" cx="1619.2" cy="546" r="7.5" />
              <circle className="st0" cx="1640" cy="546" r="7.5" />
              <circle className="st0" cx="1660.7" cy="546" r="7.5" />
              <circle className="st0" cx="1681.5" cy="546" r="7.5" />
              <circle className="st0" cx="1702.2" cy="546" r="7.5" />
              <circle className="st0" cx="1722.9" cy="546" r="7.5" />
              <circle className="st0" cx="1743.7" cy="546" r="7.5" />
              <circle className="st0" cx="1764.4" cy="546" r="7.5" />
              <circle className="st0" cx="1785.2" cy="546" r="7.5" />
              <circle className="st0" cx="1805.9" cy="546" r="7.5" />
              <circle className="st0" cx="1826.7" cy="546" r="7.5" />
              <circle className="st0" cx="1847.4" cy="546" r="7.5" />
              <circle className="st0" cx="1868.1" cy="546" r="7.5" />
              <circle className="st0" cx="1888.9" cy="546" r="7.5" />
              <circle className="st0" cx="1909.6" cy="546" r="7.5" />
              <circle className="st0" cx="1930.4" cy="546" r="7.5" />
              <circle className="st0" cx="1951.1" cy="546" r="7.5" />
              <circle className="st0" cx="1971.9" cy="546" r="7.5" />
              <circle className="st0" cx="1992.6" cy="546" r="7.5" />
              <circle className="st0" cx="2013.3" cy="546" r="7.5" />
              <circle className="st0" cx="2034.1" cy="546" r="7.5" />
              <circle className="st0" cx="2054.8" cy="546" r="7.5" />
              <circle className="st0" cx="2075.6" cy="546" r="7.5" />
              <circle className="st0" cx="2096.3" cy="546" r="7.5" />
              <circle className="st0" cx="2117.1" cy="546" r="7.5" />
              <circle className="st0" cx="2137.8" cy="546" r="7.5" />
              <circle className="st0" cx="2158.5" cy="546" r="7.5" />
              <circle className="st0" cx="2179.3" cy="546" r="7.5" />
              <circle className="st0" cx="2200" cy="546" r="7.5" />
              <circle className="st0" cx="2220.8" cy="546" r="7.5" />
              <circle className="st0" cx="2241.5" cy="546" r="7.5" />
              <circle className="st0" cx="2262.2" cy="546" r="7.5" />
              <circle className="st0" cx="2283" cy="546" r="7.5" />
              <circle className="st0" cx="2303.7" cy="546" r="7.5" />
              <circle className="st0" cx="2324.5" cy="546" r="7.5" />
              <circle className="st0" cx="2345.2" cy="546" r="7.5" />
              <circle className="st0" cx="2511.2" cy="546" r="7.5" />
              <circle className="st0" cx="2531.9" cy="546" r="7.5" />
              <circle className="st0" cx="2552.7" cy="546" r="7.5" />
              <circle className="st0" cx="1079.9" cy="567" r="7.5" />
              <circle className="st0" cx="1100.7" cy="567" r="7.5" />
              <circle className="st0" cx="1121.4" cy="567" r="7.5" />
              <circle className="st0" cx="1142.1" cy="567" r="7.5" />
              <circle className="st0" cx="1204.4" cy="567" r="7.5" />
              <circle className="st0" cx="1225.1" cy="567" r="7.5" />
              <circle className="st0" cx="1245.9" cy="567" r="7.5" />
              <circle className="st0" cx="1266.6" cy="567" r="7.5" />
              <circle className="st0" cx="1287.3" cy="567" r="7.5" />
              <circle className="st0" cx="1308.1" cy="567" r="7.5" />
              <circle className="st0" cx="1328.8" cy="567" r="7.5" />
              <circle className="st0" cx="1349.6" cy="567" r="7.5" />
              <circle className="st0" cx="1370.3" cy="567" r="7.5" />
              <circle className="st0" cx="1391.1" cy="567" r="7.5" />
              <circle className="st0" cx="1411.8" cy="567" r="7.5" />
              <circle className="st0" cx="1432.6" cy="567" r="7.5" />
              <circle className="st0" cx="1453.3" cy="567" r="7.5" />
              <circle className="st0" cx="1474" cy="567" r="7.5" />
              <circle className="st0" cx="1494.8" cy="567" r="7.5" />
              <circle className="st0" cx="1515.5" cy="567" r="7.5" />
              <circle className="st0" cx="1536.3" cy="567" r="7.5" />
              <circle className="st0" cx="1557" cy="567" r="7.5" />
              <circle className="st0" cx="1577.8" cy="567" r="7.5" />
              <circle className="st0" cx="1598.5" cy="567" r="7.5" />
              <circle className="st0" cx="1619.2" cy="567" r="7.5" />
              <circle className="st0" cx="1640" cy="567" r="7.5" />
              <circle className="st0" cx="1660.7" cy="567" r="7.5" />
              <circle className="st0" cx="1681.5" cy="567" r="7.5" />
              <circle className="st0" cx="1702.2" cy="567" r="7.5" />
              <circle className="st0" cx="1722.9" cy="567" r="7.5" />
              <circle className="st0" cx="1743.7" cy="567" r="7.5" />
              <circle className="st0" cx="1764.4" cy="567" r="7.5" />
              <circle className="st0" cx="1785.2" cy="567" r="7.5" />
              <circle className="st0" cx="1805.9" cy="567" r="7.5" />
              <circle className="st0" cx="1826.7" cy="567" r="7.5" />
              <circle className="st0" cx="1847.4" cy="567" r="7.5" />
              <circle className="st0" cx="1868.1" cy="567" r="7.5" />
              <circle className="st0" cx="1888.9" cy="567" r="7.5" />
              <circle className="st0" cx="1909.6" cy="567" r="7.5" />
              <circle className="st0" cx="1930.4" cy="567" r="7.5" />
              <circle className="st0" cx="1951.1" cy="567" r="7.5" />
              <circle className="st0" cx="1971.9" cy="567" r="7.5" />
              <circle className="st0" cx="1992.6" cy="567" r="7.5" />
              <circle className="st0" cx="2013.3" cy="567" r="7.5" />
              <circle className="st0" cx="2034.1" cy="567" r="7.5" />
              <circle className="st0" cx="2054.8" cy="567" r="7.5" />
              <circle className="st0" cx="2075.6" cy="567" r="7.5" />
              <circle className="st0" cx="2096.3" cy="567" r="7.5" />
              <circle className="st0" cx="2117.1" cy="567" r="7.5" />
              <circle className="st0" cx="2137.8" cy="567" r="7.5" />
              <circle className="st0" cx="2158.5" cy="567" r="7.5" />
              <circle className="st0" cx="2179.3" cy="567" r="7.5" />
              <circle className="st0" cx="2200" cy="567" r="7.5" />
              <circle className="st0" cx="2220.8" cy="567" r="7.5" />
              <circle className="st0" cx="2241.5" cy="567" r="7.5" />
              <circle className="st0" cx="2262.2" cy="567" r="7.5" />
              <circle className="st0" cx="2283" cy="567" r="7.5" />
              <circle className="st0" cx="2303.7" cy="567" r="7.5" />
              <circle className="st0" cx="2324.5" cy="567" r="7.5" />
              <circle className="st0" cx="2345.2" cy="567" r="7.5" />
              <circle className="st0" cx="2366" cy="567" r="7.5" />
              <circle className="st0" cx="2386.7" cy="567" r="7.5" />
              <circle className="st0" cx="2407.4" cy="567" r="7.5" />
              <circle className="st0" cx="2531.9" cy="567" r="7.5" />
              <circle className="st0" cx="2552.7" cy="567" r="7.5" />
              <circle className="st0" cx="1079.9" cy="588" r="7.5" />
              <circle className="st0" cx="1100.7" cy="588" r="7.5" />
              <circle className="st0" cx="1121.4" cy="588" r="7.5" />
              <circle className="st0" cx="1142.1" cy="588" r="7.5" />
              <circle className="st0" cx="1162.9" cy="588" r="7.5" />
              <circle className="st0" cx="1183.6" cy="588" r="7.5" />
              <circle className="st0" cx="1204.4" cy="588" r="7.5" />
              <circle className="st0" cx="1225.1" cy="588" r="7.5" />
              <circle className="st0" cx="1245.9" cy="588" r="7.5" />
              <circle className="st0" cx="1266.6" cy="588" r="7.5" />
              <circle className="st0" cx="1287.3" cy="588" r="7.5" />
              <circle className="st0" cx="1308.1" cy="588" r="7.5" />
              <circle className="st0" cx="1328.8" cy="588" r="7.5" />
              <circle className="st0" cx="1349.6" cy="588" r="7.5" />
              <circle className="st0" cx="1370.3" cy="588" r="7.5" />
              <circle className="st0" cx="1391.1" cy="588" r="7.5" />
              <circle className="st0" cx="1411.8" cy="588" r="7.5" />
              <circle className="st0" cx="1432.6" cy="588" r="7.5" />
              <circle className="st0" cx="1453.3" cy="588" r="7.5" />
              <circle className="st0" cx="1474" cy="588" r="7.5" />
              <circle className="st0" cx="1494.8" cy="588" r="7.5" />
              <circle className="st0" cx="1515.5" cy="588" r="7.5" />
              <circle className="st0" cx="1536.3" cy="588" r="7.5" />
              <circle className="st0" cx="1557" cy="588" r="7.5" />
              <circle className="st0" cx="1577.8" cy="588" r="7.5" />
              <circle className="st0" cx="1598.5" cy="588" r="7.5" />
              <circle className="st0" cx="1619.2" cy="588" r="7.5" />
              <circle className="st0" cx="1640" cy="588" r="7.5" />
              <circle className="st0" cx="1660.7" cy="588" r="7.5" />
              <circle className="st0" cx="1681.5" cy="588" r="7.5" />
              <circle className="st0" cx="1702.2" cy="588" r="7.5" />
              <circle className="st0" cx="1722.9" cy="588" r="7.5" />
              <circle className="st0" cx="1743.7" cy="588" r="7.5" />
              <circle className="st0" cx="1764.4" cy="588" r="7.5" />
              <circle className="st0" cx="1785.2" cy="588" r="7.5" />
              <circle className="st0" cx="1805.9" cy="588" r="7.5" />
              <circle className="st0" cx="1826.7" cy="588" r="7.5" />
              <circle className="st0" cx="1847.4" cy="588" r="7.5" />
              <circle className="st0" cx="1868.1" cy="588" r="7.5" />
              <circle className="st0" cx="1888.9" cy="588" r="7.5" />
              <circle className="st0" cx="1909.6" cy="588" r="7.5" />
              <circle className="st0" cx="1930.4" cy="588" r="7.5" />
              <circle className="st0" cx="1951.1" cy="588" r="7.5" />
              <circle className="st0" cx="1971.9" cy="588" r="7.5" />
              <circle className="st0" cx="1992.6" cy="588" r="7.5" />
              <circle className="st0" cx="2013.3" cy="588" r="7.5" />
              <circle className="st0" cx="2034.1" cy="588" r="7.5" />
              <circle className="st0" cx="2054.8" cy="588" r="7.5" />
              <circle className="st0" cx="2075.6" cy="588" r="7.5" />
              <circle className="st0" cx="2096.3" cy="588" r="7.5" />
              <circle className="st0" cx="2117.1" cy="588" r="7.5" />
              <circle className="st0" cx="2137.8" cy="588" r="7.5" />
              <circle className="st0" cx="2158.5" cy="588" r="7.5" />
              <circle className="st0" cx="2179.3" cy="588" r="7.5" />
              <circle className="st0" cx="2200" cy="588" r="7.5" />
              <circle className="st0" cx="2220.8" cy="588" r="7.5" />
              <circle className="st0" cx="2241.5" cy="588" r="7.5" />
              <circle className="st0" cx="2262.2" cy="588" r="7.5" />
              <circle className="st1" cx="2283" cy="588" r="7.5" />
              <circle className="st1" cx="2303.7" cy="588" r="7.5" />
              <circle className="st1" cx="2324.5" cy="588" r="7.5" />
              <circle className="st1" cx="2345.2" cy="588" r="7.5" />
              <circle className="st1" cx="2366" cy="588" r="7.5" />
              <circle className="st1" cx="2386.7" cy="588" r="7.5" />
              <circle className="st0" cx="2407.4" cy="588" r="7.5" />
              <circle className="st0" cx="2428.2" cy="588" r="7.5" />
              <circle className="st0" cx="2448.9" cy="588" r="7.5" />
              <circle className="st0" cx="2552.7" cy="588" r="7.5" />
              <circle className="st0" cx="1121.4" cy="609" r="7.5" />
              <circle className="st0" cx="1142.1" cy="609" r="7.5" />
              <circle className="st0" cx="1162.9" cy="609" r="7.5" />
              <circle className="st0" cx="1183.6" cy="609" r="7.5" />
              <circle className="st0" cx="1204.4" cy="609" r="7.5" />
              <circle className="st0" cx="1225.1" cy="609" r="7.5" />
              <circle className="st0" cx="1245.9" cy="609" r="7.5" />
              <circle className="st0" cx="1266.6" cy="609" r="7.5" />
              <circle className="st0" cx="1287.3" cy="609" r="7.5" />
              <circle className="st0" cx="1308.1" cy="609" r="7.5" />
              <circle className="st0" cx="1328.8" cy="609" r="7.5" />
              <circle className="st0" cx="1349.6" cy="609" r="7.5" />
              <circle className="st0" cx="1370.3" cy="609" r="7.5" />
              <circle className="st0" cx="1391.1" cy="609" r="7.5" />
              <circle className="st0" cx="1411.8" cy="609" r="7.5" />
              <circle className="st0" cx="1432.6" cy="609" r="7.5" />
              <circle className="st0" cx="1453.3" cy="609" r="7.5" />
              <circle className="st0" cx="1474" cy="609" r="7.5" />
              <circle className="st0" cx="1494.8" cy="609" r="7.5" />
              <circle className="st0" cx="1515.5" cy="609" r="7.5" />
              <circle className="st0" cx="1536.3" cy="609" r="7.5" />
              <circle className="st0" cx="1557" cy="609" r="7.5" />
              <circle className="st0" cx="1577.8" cy="609" r="7.5" />
              <circle className="st0" cx="1598.5" cy="609" r="7.5" />
              <circle className="st0" cx="1619.2" cy="609" r="7.5" />
              <circle className="st0" cx="1640" cy="609" r="7.5" />
              <circle className="st0" cx="1660.7" cy="609" r="7.5" />
              <circle className="st0" cx="1681.5" cy="609" r="7.5" />
              <circle className="st0" cx="1702.2" cy="609" r="7.5" />
              <circle className="st0" cx="1722.9" cy="609" r="7.5" />
              <circle className="st0" cx="1743.7" cy="609" r="7.5" />
              <circle className="st0" cx="1764.4" cy="609" r="7.5" />
              <circle className="st0" cx="1785.2" cy="609" r="7.5" />
              <circle className="st0" cx="1805.9" cy="609" r="7.5" />
              <circle className="st0" cx="1826.7" cy="609" r="7.5" />
              <circle className="st0" cx="1847.4" cy="609" r="7.5" />
              <circle className="st0" cx="1868.1" cy="609" r="7.5" />
              <circle className="st0" cx="1888.9" cy="609" r="7.5" />
              <circle className="st0" cx="1909.6" cy="609" r="7.5" />
              <circle className="st0" cx="1930.4" cy="609" r="7.5" />
              <circle className="st0" cx="1951.1" cy="609" r="7.5" />
              <circle className="st0" cx="1971.9" cy="609" r="7.5" />
              <circle className="st0" cx="1992.6" cy="609" r="7.5" />
              <circle className="st0" cx="2013.3" cy="609" r="7.5" />
              <circle className="st0" cx="2034.1" cy="609" r="7.5" />
              <circle className="st0" cx="2054.8" cy="609" r="7.5" />
              <circle className="st0" cx="2075.6" cy="609" r="7.5" />
              <circle className="st0" cx="2096.3" cy="609" r="7.5" />
              <circle className="st0" cx="2117.1" cy="609" r="7.5" />
              <circle className="st0" cx="2137.8" cy="609" r="7.5" />
              <circle className="st0" cx="2158.5" cy="609" r="7.5" />
              <circle className="st0" cx="2179.3" cy="609" r="7.5" />
              <circle className="st0" cx="2200" cy="609" r="7.5" />
              <circle className="st0" cx="2220.8" cy="609" r="7.5" />
              <circle className="st0" cx="2241.5" cy="609" r="7.5" />
              <circle className="st0" cx="2262.2" cy="609" r="7.5" />
              <circle className="st1" cx="2283" cy="609" r="7.5" />
              <circle className="st1" cx="2303.7" cy="609" r="7.5" />
              <circle className="st1" cx="2324.5" cy="609" r="7.5" />
              <circle className="st1" cx="2345.2" cy="609" r="7.5" />
              <circle className="st1" cx="2366" cy="609" r="7.5" />
              <circle className="st1" cx="2386.7" cy="609" r="7.5" />
              <circle className="st0" cx="2407.4" cy="609" r="7.5" />
              <circle className="st0" cx="2428.2" cy="609" r="7.5" />
              <circle className="st0" cx="2448.9" cy="609" r="7.5" />
              <circle className="st0" cx="1121.4" cy="630" r="7.5" />
              <circle className="st0" cx="1142.1" cy="630" r="7.5" />
              <circle className="st0" cx="1162.9" cy="630" r="7.5" />
              <circle className="st0" cx="1183.6" cy="630" r="7.5" />
              <circle className="st0" cx="1204.4" cy="630" r="7.5" />
              <circle className="st0" cx="1225.1" cy="630" r="7.5" />
              <circle className="st0" cx="1245.9" cy="630" r="7.5" />
              <circle className="st0" cx="1266.6" cy="630" r="7.5" />
              <circle className="st0" cx="1287.3" cy="630" r="7.5" />
              <circle className="st0" cx="1308.1" cy="630" r="7.5" />
              <circle className="st0" cx="1328.8" cy="630" r="7.5" />
              <circle className="st0" cx="1349.6" cy="630" r="7.5" />
              <circle className="st0" cx="1370.3" cy="630" r="7.5" />
              <circle className="st0" cx="1391.1" cy="630" r="7.5" />
              <circle className="st0" cx="1411.8" cy="630" r="7.5" />
              <circle className="st0" cx="1432.6" cy="630" r="7.5" />
              <circle className="st0" cx="1453.3" cy="630" r="7.5" />
              <circle className="st0" cx="1474" cy="630" r="7.5" />
              <circle className="st0" cx="1494.8" cy="630" r="7.5" />
              <circle className="st0" cx="1515.5" cy="630" r="7.5" />
              <circle className="st0" cx="1536.3" cy="630" r="7.5" />
              <circle className="st0" cx="1557" cy="630" r="7.5" />
              <circle className="st0" cx="1577.8" cy="630" r="7.5" />
              <circle className="st0" cx="1598.5" cy="630" r="7.5" />
              <circle className="st0" cx="1619.2" cy="630" r="7.5" />
              <circle className="st0" cx="1640" cy="630" r="7.5" />
              <circle className="st0" cx="1660.7" cy="630" r="7.5" />
              <circle className="st0" cx="1681.5" cy="630" r="7.5" />
              <circle className="st0" cx="1702.2" cy="630" r="7.5" />
              <circle className="st0" cx="1722.9" cy="630" r="7.5" />
              <circle className="st0" cx="1743.7" cy="630" r="7.5" />
              <circle className="st0" cx="1764.4" cy="630" r="7.5" />
              <circle className="st0" cx="1785.2" cy="630" r="7.5" />
              <circle className="st0" cx="1805.9" cy="630" r="7.5" />
              <circle className="st0" cx="1826.7" cy="630" r="7.5" />
              <circle className="st0" cx="1847.4" cy="630" r="7.5" />
              <circle className="st0" cx="1868.1" cy="630" r="7.5" />
              <circle className="st0" cx="1888.9" cy="630" r="7.5" />
              <circle className="st0" cx="1909.6" cy="630" r="7.5" />
              <circle className="st1" cx="1930.4" cy="630" r="7.5" />
              <circle className="st1" cx="1951.1" cy="630" r="7.5" />
              <circle className="st1" cx="1971.9" cy="630" r="7.5" />
              <circle className="st1" cx="1992.6" cy="630" r="7.5" />
              <circle className="st1" cx="2013.3" cy="630" r="7.5" />
              <circle className="st1" cx="2034.1" cy="630" r="7.5" />
              <circle className="st1" cx="2054.8" cy="630" r="7.5" />
              <circle className="st0" cx="2075.6" cy="630" r="7.5" />
              <circle className="st0" cx="2096.3" cy="630" r="7.5" />
              <circle className="st0" cx="2117.1" cy="630" r="7.5" />
              <circle className="st0" cx="2137.8" cy="630" r="7.5" />
              <circle className="st0" cx="2158.5" cy="630" r="7.5" />
              <circle className="st0" cx="2179.3" cy="630" r="7.5" />
              <circle className="st0" cx="2200" cy="630" r="7.5" />
              <circle className="st0" cx="2220.8" cy="630" r="7.5" />
              <circle className="st0" cx="2241.5" cy="630" r="7.5" />
              <circle className="st1" cx="2262.2" cy="630" r="7.5" />
              <circle className="st1" cx="2283" cy="630" r="7.5" />
              <circle className="st1" cx="2303.7" cy="630" r="7.5" />
              <circle className="st1" cx="2324.5" cy="630" r="7.5" />
              <circle className="st1" cx="2345.2" cy="630" r="7.5" />
              <circle className="st1" cx="2366" cy="630" r="7.5" />
              <circle className="st1" cx="2386.7" cy="630" r="7.5" />
              <circle className="st0" cx="2407.4" cy="630" r="7.5" />
              <circle className="st0" cx="2428.2" cy="630" r="7.5" />
              <circle className="st0" cx="2448.9" cy="630" r="7.5" />
              <circle className="st0" cx="1142.1" cy="651" r="7.5" />
              <circle className="st0" cx="1162.9" cy="651" r="7.5" />
              <circle className="st0" cx="1183.6" cy="651" r="7.5" />
              <circle className="st0" cx="1204.4" cy="651" r="7.5" />
              <circle className="st0" cx="1225.1" cy="651" r="7.5" />
              <circle className="st0" cx="1245.9" cy="651" r="7.5" />
              <circle className="st0" cx="1266.6" cy="651" r="7.5" />
              <circle className="st0" cx="1287.3" cy="651" r="7.5" />
              <circle className="st0" cx="1308.1" cy="651" r="7.5" />
              <circle className="st0" cx="1328.8" cy="651" r="7.5" />
              <circle className="st0" cx="1349.6" cy="651" r="7.5" />
              <circle className="st0" cx="1370.3" cy="651" r="7.5" />
              <circle className="st0" cx="1391.1" cy="651" r="7.5" />
              <circle className="st0" cx="1411.8" cy="651" r="7.5" />
              <circle className="st0" cx="1432.6" cy="651" r="7.5" />
              <circle className="st0" cx="1453.3" cy="651" r="7.5" />
              <circle className="st0" cx="1474" cy="651" r="7.5" />
              <circle className="st0" cx="1515.5" cy="651" r="7.5" />
              <circle className="st0" cx="1536.3" cy="651" r="7.5" />
              <circle className="st0" cx="1557" cy="651" r="7.5" />
              <circle className="st0" cx="1577.8" cy="651" r="7.5" />
              <circle className="st0" cx="1598.5" cy="651" r="7.5" />
              <circle className="st0" cx="1640" cy="651" r="7.5" />
              <circle className="st0" cx="1660.7" cy="651" r="7.5" />
              <circle className="st0" cx="1681.5" cy="651" r="7.5" />
              <circle className="st0" cx="1702.2" cy="651" r="7.5" />
              <circle className="st0" cx="1722.9" cy="651" r="7.5" />
              <circle className="st0" cx="1743.7" cy="651" r="7.5" />
              <circle className="st0" cx="1764.4" cy="651" r="7.5" />
              <circle className="st0" cx="1785.2" cy="651" r="7.5" />
              <circle className="st0" cx="1805.9" cy="651" r="7.5" />
              <circle className="st0" cx="1826.7" cy="651" r="7.5" />
              <circle className="st0" cx="1847.4" cy="651" r="7.5" />
              <circle className="st0" cx="1868.1" cy="651" r="7.5" />
              <circle className="st0" cx="1888.9" cy="651" r="7.5" />
              <circle className="st0" cx="1909.6" cy="651" r="7.5" />
              <circle className="st1" cx="1930.4" cy="651" r="7.5" />
              <circle className="st1" cx="1951.1" cy="651" r="7.5" />
              <circle className="st1" cx="1971.9" cy="651" r="7.5" />
              <circle className="st1" cx="1992.6" cy="651" r="7.5" />
              <circle className="st1" cx="2013.3" cy="651" r="7.5" />
              <circle className="st1" cx="2034.1" cy="651" r="7.5" />
              <circle className="st1" cx="2054.8" cy="651" r="7.5" />
              <circle className="st1" cx="2075.6" cy="651" r="7.5" />
              <circle className="st1" cx="2096.3" cy="651" r="7.5" />
              <circle className="st1" cx="2117.1" cy="651" r="7.5" />
              <circle className="st1" cx="2137.8" cy="651" r="7.5" />
              <circle className="st1" cx="2158.5" cy="651" r="7.5" />
              <circle className="st0" cx="2179.3" cy="651" r="7.5" />
              <circle className="st0" cx="2200" cy="651" r="7.5" />
              <circle className="st0" cx="2220.8" cy="651" r="7.5" />
              <circle className="st1" cx="2241.5" cy="651" r="7.5" />
              <circle className="st1" cx="2262.2" cy="651" r="7.5" />
              <circle className="st1" cx="2283" cy="651" r="7.5" />
              <circle className="st1" cx="2303.7" cy="651" r="7.5" />
              <circle className="st1" cx="2324.5" cy="651" r="7.5" />
              <circle className="st1" cx="2345.2" cy="651" r="7.5" />
              <circle className="st1" cx="2366" cy="651" r="7.5" />
              <circle className="st0" cx="2386.7" cy="651" r="7.5" />
              <circle className="st0" cx="2407.4" cy="651" r="7.5" />
              <circle className="st0" cx="2428.2" cy="651" r="7.5" />
              <circle className="st0" cx="2448.9" cy="651" r="7.5" />
              <circle className="st0" cx="2469.7" cy="651" r="7.5" />
              <circle className="st0" cx="1142.1" cy="672" r="7.5" />
              <circle className="st0" cx="1162.9" cy="672" r="7.5" />
              <circle className="st0" cx="1183.6" cy="672" r="7.5" />
              <circle className="st0" cx="1204.4" cy="672" r="7.5" />
              <circle className="st0" cx="1225.1" cy="672" r="7.5" />
              <circle className="st0" cx="1245.9" cy="672" r="7.5" />
              <circle className="st0" cx="1266.6" cy="672" r="7.5" />
              <circle className="st0" cx="1308.1" cy="672" r="7.5" />
              <circle className="st0" cx="1328.8" cy="672" r="7.5" />
              <circle className="st0" cx="1349.6" cy="672" r="7.5" />
              <circle className="st0" cx="1370.3" cy="672" r="7.5" />
              <circle className="st0" cx="1391.1" cy="672" r="7.5" />
              <circle className="st0" cx="1411.8" cy="672" r="7.5" />
              <circle className="st0" cx="1515.5" cy="672" r="7.5" />
              <circle className="st0" cx="1536.3" cy="672" r="7.5" />
              <circle className="st0" cx="1557" cy="672" r="7.5" />
              <circle className="st0" cx="1577.8" cy="672" r="7.5" />
              <circle className="st0" cx="1640" cy="672" r="7.5" />
              <circle className="st0" cx="1660.7" cy="672" r="7.5" />
              <circle className="st0" cx="1681.5" cy="672" r="7.5" />
              <circle className="st0" cx="1702.2" cy="672" r="7.5" />
              <circle className="st0" cx="1722.9" cy="672" r="7.5" />
              <circle className="st0" cx="1743.7" cy="672" r="7.5" />
              <circle className="st0" cx="1764.4" cy="672" r="7.5" />
              <circle className="st0" cx="1785.2" cy="672" r="7.5" />
              <circle className="st0" cx="1805.9" cy="672" r="7.5" />
              <circle className="st0" cx="1826.7" cy="672" r="7.5" />
              <circle className="st0" cx="1847.4" cy="672" r="7.5" />
              <circle className="st0" cx="1868.1" cy="672" r="7.5" />
              <circle className="st0" cx="1888.9" cy="672" r="7.5" />
              <circle className="st0" cx="1909.6" cy="672" r="7.5" />
              <circle className="st1" cx="1930.4" cy="672" r="7.5" />
              <circle className="st1" cx="1951.1" cy="672" r="7.5" />
              <circle className="st1" cx="1971.9" cy="672" r="7.5" />
              <circle className="st1" cx="1992.6" cy="672" r="7.5" />
              <circle className="st1" cx="2013.3" cy="672" r="7.5" />
              <circle className="st1" cx="2034.1" cy="672" r="7.5" />
              <circle className="st1" cx="2054.8" cy="672" r="7.5" />
              <circle className="st1" cx="2075.6" cy="672" r="7.5" />
              <circle className="st1" cx="2096.3" cy="672" r="7.5" />
              <circle className="st1" cx="2117.1" cy="672" r="7.5" />
              <circle className="st1" cx="2137.8" cy="672" r="7.5" />
              <circle className="st1" cx="2158.5" cy="672" r="7.5" />
              <circle className="st1" cx="2179.3" cy="672" r="7.5" />
              <circle className="st1" cx="2200" cy="672" r="7.5" />
              <circle className="st1" cx="2220.8" cy="672" r="7.5" />
              <circle className="st1" cx="2241.5" cy="672" r="7.5" />
              <circle className="st1" cx="2262.2" cy="672" r="7.5" />
              <circle className="st1" cx="2283" cy="672" r="7.5" />
              <circle className="st1" cx="2303.7" cy="672" r="7.5" />
              <circle className="st1" cx="2324.5" cy="672" r="7.5" />
              <circle className="st1" cx="2345.2" cy="672" r="7.5" />
              <circle className="st0" cx="2366" cy="672" r="7.5" />
              <circle className="st0" cx="2386.7" cy="672" r="7.5" />
              <circle className="st0" cx="2407.4" cy="672" r="7.5" />
              <circle className="st0" cx="2428.2" cy="672" r="7.5" />
              <circle className="st0" cx="2448.9" cy="672" r="7.5" />
              <circle className="st0" cx="2469.7" cy="672" r="7.5" />
              <circle className="st0" cx="2490.4" cy="672" r="7.5" />
              <circle className="st0" cx="2511.2" cy="672" r="7.5" />
              <circle className="st0" cx="1059.2" cy="693" r="7.5" />
              <circle className="st0" cx="1079.9" cy="693" r="7.5" />
              <circle className="st0" cx="1100.7" cy="693" r="7.5" />
              <circle className="st0" cx="1121.4" cy="693" r="7.5" />
              <circle className="st0" cx="1142.1" cy="693" r="7.5" />
              <circle className="st0" cx="1162.9" cy="693" r="7.5" />
              <circle className="st0" cx="1245.9" cy="693" r="7.5" />
              <circle className="st0" cx="1266.6" cy="693" r="7.5" />
              <circle className="st0" cx="1287.3" cy="693" r="7.5" />
              <circle className="st0" cx="1328.8" cy="693" r="7.5" />
              <circle className="st0" cx="1349.6" cy="693" r="7.5" />
              <circle className="st0" cx="1370.3" cy="693" r="7.5" />
              <circle className="st0" cx="1391.1" cy="693" r="7.5" />
              <circle className="st1" cx="1411.8" cy="693" r="7.5" />
              <circle className="st0" cx="1536.3" cy="693" r="7.5" />
              <circle className="st0" cx="1557" cy="693" r="7.5" />
              <circle className="st0" cx="1577.8" cy="693" r="7.5" />
              <circle className="st0" cx="1598.5" cy="693" r="7.5" />
              <circle className="st0" cx="1660.7" cy="693" r="7.5" />
              <circle className="st0" cx="1681.5" cy="693" r="7.5" />
              <circle className="st0" cx="1702.2" cy="693" r="7.5" />
              <circle className="st0" cx="1722.9" cy="693" r="7.5" />
              <circle className="st0" cx="1743.7" cy="693" r="7.5" />
              <circle className="st0" cx="1764.4" cy="693" r="7.5" />
              <circle className="st0" cx="1785.2" cy="693" r="7.5" />
              <circle className="st0" cx="1805.9" cy="693" r="7.5" />
              <circle className="st0" cx="1826.7" cy="693" r="7.5" />
              <circle className="st0" cx="1847.4" cy="693" r="7.5" />
              <circle className="st0" cx="1868.1" cy="693" r="7.5" />
              <circle className="st0" cx="1888.9" cy="693" r="7.5" />
              <circle className="st0" cx="1909.6" cy="693" r="7.5" />
              <circle className="st1" cx="1930.4" cy="693" r="7.5" />
              <circle className="st1" cx="1951.1" cy="693" r="7.5" />
              <circle className="st1" cx="1971.9" cy="693" r="7.5" />
              <circle className="st1" cx="1992.6" cy="693" r="7.5" />
              <circle className="st1" cx="2013.3" cy="693" r="7.5" />
              <circle className="st1" cx="2034.1" cy="693" r="7.5" />
              <circle className="st1" cx="2054.8" cy="693" r="7.5" />
              <circle className="st1" cx="2075.6" cy="693" r="7.5" />
              <circle className="st1" cx="2096.3" cy="693" r="7.5" />
              <circle className="st1" cx="2117.1" cy="693" r="7.5" />
              <circle className="st1" cx="2137.8" cy="693" r="7.5" />
              <circle className="st1" cx="2158.5" cy="693" r="7.5" />
              <circle className="st1" cx="2179.3" cy="693" r="7.5" />
              <circle className="st1" cx="2200" cy="693" r="7.5" />
              <circle className="st1" cx="2220.8" cy="693" r="7.5" />
              <circle className="st1" cx="2241.5" cy="693" r="7.5" />
              <circle className="st1" cx="2262.2" cy="693" r="7.5" />
              <circle className="st1" cx="2283" cy="693" r="7.5" />
              <circle className="st1" cx="2303.7" cy="693" r="7.5" />
              <circle className="st1" cx="2324.5" cy="693" r="7.5" />
              <circle className="st1" cx="2345.2" cy="693" r="7.5" />
              <circle className="st0" cx="2366" cy="693" r="7.5" />
              <circle className="st0" cx="2386.7" cy="693" r="7.5" />
              <circle className="st0" cx="2407.4" cy="693" r="7.5" />
              <circle className="st0" cx="2428.2" cy="693" r="7.5" />
              <circle className="st0" cx="2448.9" cy="693" r="7.5" />
              <circle className="st1" cx="2469.7" cy="693" r="7.5" />
              <circle className="st1" cx="2490.4" cy="693" r="7.5" />
              <circle className="st0" cx="2511.2" cy="693" r="7.5" />
              <circle className="st0" cx="1059.2" cy="714" r="7.5" />
              <circle className="st0" cx="1079.9" cy="714" r="7.5" />
              <circle className="st0" cx="1100.7" cy="714" r="7.5" />
              <circle className="st0" cx="1121.4" cy="714" r="7.5" />
              <circle className="st0" cx="1142.1" cy="714" r="7.5" />
              <circle className="st0" cx="1287.3" cy="714" r="7.5" />
              <circle className="st0" cx="1308.1" cy="714" r="7.5" />
              <circle className="st0" cx="1349.6" cy="714" r="7.5" />
              <circle className="st0" cx="1370.3" cy="714" r="7.5" />
              <circle className="st1" cx="1391.1" cy="714" r="7.5" />
              <circle className="st1" cx="1411.8" cy="714" r="7.5" />
              <circle className="st1" cx="1432.6" cy="714" r="7.5" />
              <circle className="st1" cx="1453.3" cy="714" r="7.5" />
              <circle className="st1" cx="1474" cy="714" r="7.5" />
              <circle className="st1" cx="1494.8" cy="714" r="7.5" />
              <circle className="st1" cx="1515.5" cy="714" r="7.5" />
              <circle className="st1" cx="1536.3" cy="714" r="7.5" />
              <circle className="st1" cx="1557" cy="714" r="7.5" />
              <circle className="st1" cx="1577.8" cy="714" r="7.5" />
              <circle className="st1" cx="1598.5" cy="714" r="7.5" />
              <circle className="st0" cx="1619.2" cy="714" r="7.5" />
              <circle className="st0" cx="1660.7" cy="714" r="7.5" />
              <circle className="st0" cx="1681.5" cy="714" r="7.5" />
              <circle className="st0" cx="1702.2" cy="714" r="7.5" />
              <circle className="st0" cx="1722.9" cy="714" r="7.5" />
              <circle className="st0" cx="1743.7" cy="714" r="7.5" />
              <circle className="st0" cx="1764.4" cy="714" r="7.5" />
              <circle className="st0" cx="1785.2" cy="714" r="7.5" />
              <circle className="st0" cx="1805.9" cy="714" r="7.5" />
              <circle className="st0" cx="1826.7" cy="714" r="7.5" />
              <circle className="st0" cx="1847.4" cy="714" r="7.5" />
              <circle className="st0" cx="1868.1" cy="714" r="7.5" />
              <circle className="st0" cx="1888.9" cy="714" r="7.5" />
              <circle className="st0" cx="1909.6" cy="714" r="7.5" />
              <circle className="st1" cx="1930.4" cy="714" r="7.5" />
              <circle className="st1" cx="1951.1" cy="714" r="7.5" />
              <circle className="st1" cx="1971.9" cy="714" r="7.5" />
              <circle className="st1" cx="1992.6" cy="714" r="7.5" />
              <circle className="st1" cx="2013.3" cy="714" r="7.5" />
              <circle className="st1" cx="2034.1" cy="714" r="7.5" />
              <circle className="st1" cx="2054.8" cy="714" r="7.5" />
              <circle className="st1" cx="2075.6" cy="714" r="7.5" />
              <circle className="st1" cx="2096.3" cy="714" r="7.5" />
              <circle className="st1" cx="2117.1" cy="714" r="7.5" />
              <circle className="st1" cx="2137.8" cy="714" r="7.5" />
              <circle className="st1" cx="2158.5" cy="714" r="7.5" />
              <circle className="st1" cx="2179.3" cy="714" r="7.5" />
              <circle className="st1" cx="2200" cy="714" r="7.5" />
              <circle className="st1" cx="2220.8" cy="714" r="7.5" />
              <circle className="st1" cx="2241.5" cy="714" r="7.5" />
              <circle className="st1" cx="2262.2" cy="714" r="7.5" />
              <circle className="st1" cx="2283" cy="714" r="7.5" />
              <circle className="st1" cx="2303.7" cy="714" r="7.5" />
              <circle className="st1" cx="2324.5" cy="714" r="7.5" />
              <circle className="st1" cx="2345.2" cy="714" r="7.5" />
              <circle className="st0" cx="2366" cy="714" r="7.5" />
              <circle className="st0" cx="2386.7" cy="714" r="7.5" />
              <circle className="st0" cx="2407.4" cy="714" r="7.5" />
              <circle className="st0" cx="2428.2" cy="714" r="7.5" />
              <circle className="st1" cx="2448.9" cy="714" r="7.5" />
              <circle className="st1" cx="2469.7" cy="714" r="7.5" />
              <circle className="st1" cx="2490.4" cy="714" r="7.5" />
              <circle className="st1" cx="2511.2" cy="714" r="7.5" />
              <circle className="st0" cx="1059.2" cy="735" r="7.5" />
              <circle className="st0" cx="1079.9" cy="735" r="7.5" />
              <circle className="st0" cx="1100.7" cy="735" r="7.5" />
              <circle className="st0" cx="1121.4" cy="735" r="7.5" />
              <circle className="st0" cx="1142.1" cy="735" r="7.5" />
              <circle className="st0" cx="1225.1" cy="735" r="7.5" />
              <circle className="st0" cx="1308.1" cy="735" r="7.5" />
              <circle className="st0" cx="1349.6" cy="735" r="7.5" />
              <circle className="st0" cx="1370.3" cy="735" r="7.5" />
              <circle className="st1" cx="1411.8" cy="735" r="7.5" />
              <circle className="st1" cx="1432.6" cy="735" r="7.5" />
              <circle className="st1" cx="1453.3" cy="735" r="7.5" />
              <circle className="st1" cx="1474" cy="735" r="7.5" />
              <circle className="st1" cx="1494.8" cy="735" r="7.5" />
              <circle className="st1" cx="1515.5" cy="735" r="7.5" />
              <circle className="st1" cx="1536.3" cy="735" r="7.5" />
              <circle className="st1" cx="1557" cy="735" r="7.5" />
              <circle className="st1" cx="1577.8" cy="735" r="7.5" />
              <circle className="st1" cx="1598.5" cy="735" r="7.5" />
              <circle className="st0" cx="1619.2" cy="735" r="7.5" />
              <circle className="st0" cx="1660.7" cy="735" r="7.5" />
              <circle className="st0" cx="1681.5" cy="735" r="7.5" />
              <circle className="st0" cx="1702.2" cy="735" r="7.5" />
              <circle className="st0" cx="1722.9" cy="735" r="7.5" />
              <circle className="st0" cx="1743.7" cy="735" r="7.5" />
              <circle className="st0" cx="1764.4" cy="735" r="7.5" />
              <circle className="st0" cx="1785.2" cy="735" r="7.5" />
              <circle className="st0" cx="1805.9" cy="735" r="7.5" />
              <circle className="st0" cx="1826.7" cy="735" r="7.5" />
              <circle className="st0" cx="1847.4" cy="735" r="7.5" />
              <circle className="st0" cx="1868.1" cy="735" r="7.5" />
              <circle className="st1" cx="1888.9" cy="735" r="7.5" />
              <circle className="st1" cx="1909.6" cy="735" r="7.5" />
              <circle className="st1" cx="1930.4" cy="735" r="7.5" />
              <circle className="st1" cx="1951.1" cy="735" r="7.5" />
              <circle className="st1" cx="1971.9" cy="735" r="7.5" />
              <circle className="st1" cx="1992.6" cy="735" r="7.5" />
              <circle className="st1" cx="2013.3" cy="735" r="7.5" />
              <circle className="st1" cx="2034.1" cy="735" r="7.5" />
              <circle className="st1" cx="2054.8" cy="735" r="7.5" />
              <circle className="st1" cx="2075.6" cy="735" r="7.5" />
              <circle className="st1" cx="2096.3" cy="735" r="7.5" />
              <circle className="st1" cx="2117.1" cy="735" r="7.5" />
              <circle className="st1" cx="2137.8" cy="735" r="7.5" />
              <circle className="st1" cx="2158.5" cy="735" r="7.5" />
              <circle className="st1" cx="2179.3" cy="735" r="7.5" />
              <circle className="st1" cx="2200" cy="735" r="7.5" />
              <circle className="st1" cx="2220.8" cy="735" r="7.5" />
              <circle className="st1" cx="2241.5" cy="735" r="7.5" />
              <circle className="st1" cx="2262.2" cy="735" r="7.5" />
              <circle className="st1" cx="2283" cy="735" r="7.5" />
              <circle className="st0" cx="2366" cy="735" r="7.5" />
              <circle className="st0" cx="2386.7" cy="735" r="7.5" />
              <circle className="st0" cx="2407.4" cy="735" r="7.5" />
              <circle className="st0" cx="2428.2" cy="735" r="7.5" />
              <circle className="st1" cx="2448.9" cy="735" r="7.5" />
              <circle className="st1" cx="2469.7" cy="735" r="7.5" />
              <circle className="st1" cx="2490.4" cy="735" r="7.5" />
              <circle className="st1" cx="2511.2" cy="735" r="7.5" />
              <circle className="st0" cx="1059.2" cy="756" r="7.5" />
              <circle className="st0" cx="1079.9" cy="756" r="7.5" />
              <circle className="st0" cx="1100.7" cy="756" r="7.5" />
              <circle className="st0" cx="1183.6" cy="756" r="7.5" />
              <circle className="st0" cx="1204.4" cy="756" r="7.5" />
              <circle className="st0" cx="1225.1" cy="756" r="7.5" />
              <circle className="st0" cx="1245.9" cy="756" r="7.5" />
              <circle className="st0" cx="1370.3" cy="756" r="7.5" />
              <circle className="st1" cx="1411.8" cy="756" r="7.5" />
              <circle className="st1" cx="1432.6" cy="756" r="7.5" />
              <circle className="st1" cx="1453.3" cy="756" r="7.5" />
              <circle className="st1" cx="1474" cy="756" r="7.5" />
              <circle className="st1" cx="1494.8" cy="756" r="7.5" />
              <circle className="st1" cx="1515.5" cy="756" r="7.5" />
              <circle className="st1" cx="1536.3" cy="756" r="7.5" />
              <circle className="st1" cx="1557" cy="756" r="7.5" />
              <circle className="st1" cx="1577.8" cy="756" r="7.5" />
              <circle className="st1" cx="1598.5" cy="756" r="7.5" />
              <circle className="st0" cx="1619.2" cy="756" r="7.5" />
              <circle className="st0" cx="1640" cy="756" r="7.5" />
              <circle className="st0" cx="1660.7" cy="756" r="7.5" />
              <circle className="st0" cx="1681.5" cy="756" r="7.5" />
              <circle className="st0" cx="1702.2" cy="756" r="7.5" />
              <circle className="st0" cx="1722.9" cy="756" r="7.5" />
              <circle className="st0" cx="1743.7" cy="756" r="7.5" />
              <circle className="st0" cx="1764.4" cy="756" r="7.5" />
              <circle className="st0" cx="1785.2" cy="756" r="7.5" />
              <circle className="st0" cx="1805.9" cy="756" r="7.5" />
              <circle className="st0" cx="1826.7" cy="756" r="7.5" />
              <circle className="st0" cx="1847.4" cy="756" r="7.5" />
              <circle className="st0" cx="1868.1" cy="756" r="7.5" />
              <circle className="st1" cx="1888.9" cy="756" r="7.5" />
              <circle className="st1" cx="1909.6" cy="756" r="7.5" />
              <circle className="st1" cx="1930.4" cy="756" r="7.5" />
              <circle className="st1" cx="1951.1" cy="756" r="7.5" />
              <circle className="st1" cx="1971.9" cy="756" r="7.5" />
              <circle className="st1" cx="1992.6" cy="756" r="7.5" />
              <circle className="st1" cx="2013.3" cy="756" r="7.5" />
              <circle className="st1" cx="2034.1" cy="756" r="7.5" />
              <circle className="st1" cx="2054.8" cy="756" r="7.5" />
              <circle className="st1" cx="2075.6" cy="756" r="7.5" />
              <circle className="st1" cx="2096.3" cy="756" r="7.5" />
              <circle className="st1" cx="2117.1" cy="756" r="7.5" />
              <circle className="st1" cx="2137.8" cy="756" r="7.5" />
              <circle className="st1" cx="2158.5" cy="756" r="7.5" />
              <circle className="st1" cx="2179.3" cy="756" r="7.5" />
              <circle className="st1" cx="2200" cy="756" r="7.5" />
              <circle className="st1" cx="2220.8" cy="756" r="7.5" />
              <circle className="st1" cx="2241.5" cy="756" r="7.5" />
              <circle className="st1" cx="2262.2" cy="756" r="7.5" />
              <circle className="st1" cx="2283" cy="756" r="7.5" />
              <circle className="st1" cx="2303.7" cy="756" r="7.5" />
              <circle className="st1" cx="2324.5" cy="756" r="7.5" />
              <circle className="st0" cx="2386.7" cy="756" r="7.5" />
              <circle className="st0" cx="2407.4" cy="756" r="7.5" />
              <circle className="st1" cx="2428.2" cy="756" r="7.5" />
              <circle className="st1" cx="2448.9" cy="756" r="7.5" />
              <circle className="st1" cx="2469.7" cy="756" r="7.5" />
              <circle className="st1" cx="2490.4" cy="756" r="7.5" />
              <circle className="st1" cx="2511.2" cy="756" r="7.5" />
              <circle className="st0" cx="1079.9" cy="777" r="7.5" />
              <circle className="st0" cx="1100.7" cy="777" r="7.5" />
              <circle className="st0" cx="1121.4" cy="777" r="7.5" />
              <circle className="st0" cx="1142.1" cy="777" r="7.5" />
              <circle className="st0" cx="1162.9" cy="777" r="7.5" />
              <circle className="st0" cx="1183.6" cy="777" r="7.5" />
              <circle className="st0" cx="1204.4" cy="777" r="7.5" />
              <circle className="st0" cx="1225.1" cy="777" r="7.5" />
              <circle className="st0" cx="1245.9" cy="777" r="7.5" />
              <circle className="st0" cx="1494.8" cy="777" r="7.5" />
              <circle className="st0" cx="1515.5" cy="777" r="7.5" />
              <circle className="st1" cx="1536.3" cy="777" r="7.5" />
              <circle className="st1" cx="1557" cy="777" r="7.5" />
              <circle className="st1" cx="1577.8" cy="777" r="7.5" />
              <circle className="st1" cx="1598.5" cy="777" r="7.5" />
              <circle className="st0" cx="1619.2" cy="777" r="7.5" />
              <circle className="st0" cx="1640" cy="777" r="7.5" />
              <circle className="st0" cx="1660.7" cy="777" r="7.5" />
              <circle className="st0" cx="1681.5" cy="777" r="7.5" />
              <circle className="st0" cx="1702.2" cy="777" r="7.5" />
              <circle className="st0" cx="1722.9" cy="777" r="7.5" />
              <circle className="st0" cx="1743.7" cy="777" r="7.5" />
              <circle className="st0" cx="1764.4" cy="777" r="7.5" />
              <circle className="st0" cx="1785.2" cy="777" r="7.5" />
              <circle className="st0" cx="1805.9" cy="777" r="7.5" />
              <circle className="st0" cx="1826.7" cy="777" r="7.5" />
              <circle className="st1" cx="1847.4" cy="777" r="7.5" />
              <circle className="st1" cx="1868.1" cy="777" r="7.5" />
              <circle className="st1" cx="1888.9" cy="777" r="7.5" />
              <circle className="st1" cx="1909.6" cy="777" r="7.5" />
              <circle className="st1" cx="1930.4" cy="777" r="7.5" />
              <circle className="st1" cx="1951.1" cy="777" r="7.5" />
              <circle className="st1" cx="1971.9" cy="777" r="7.5" />
              <circle className="st1" cx="1992.6" cy="777" r="7.5" />
              <circle className="st1" cx="2013.3" cy="777" r="7.5" />
              <circle className="st1" cx="2034.1" cy="777" r="7.5" />
              <circle className="st1" cx="2054.8" cy="777" r="7.5" />
              <circle className="st1" cx="2075.6" cy="777" r="7.5" />
              <circle className="st1" cx="2096.3" cy="777" r="7.5" />
              <circle className="st1" cx="2117.1" cy="777" r="7.5" />
              <circle className="st1" cx="2137.8" cy="777" r="7.5" />
              <circle className="st1" cx="2158.5" cy="777" r="7.5" />
              <circle className="st1" cx="2179.3" cy="777" r="7.5" />
              <circle className="st1" cx="2200" cy="777" r="7.5" />
              <circle className="st1" cx="2220.8" cy="777" r="7.5" />
              <circle className="st1" cx="2241.5" cy="777" r="7.5" />
              <circle className="st1" cx="2262.2" cy="777" r="7.5" />
              <circle className="st1" cx="2283" cy="777" r="7.5" />
              <circle className="st1" cx="2303.7" cy="777" r="7.5" />
              <circle className="st1" cx="2324.5" cy="777" r="7.5" />
              <circle className="st0" cx="2386.7" cy="777" r="7.5" />
              <circle className="st0" cx="2407.4" cy="777" r="7.5" />
              <circle className="st1" cx="2428.2" cy="777" r="7.5" />
              <circle className="st1" cx="2448.9" cy="777" r="7.5" />
              <circle className="st1" cx="2469.7" cy="777" r="7.5" />
              <circle className="st1" cx="2490.4" cy="777" r="7.5" />
              <circle className="st1" cx="2511.2" cy="777" r="7.5" />
              <circle className="st0" cx="1059.2" cy="798" r="7.5" />
              <circle className="st0" cx="1079.9" cy="798" r="7.5" />
              <circle className="st0" cx="1100.7" cy="798" r="7.5" />
              <circle className="st0" cx="1121.4" cy="798" r="7.5" />
              <circle className="st0" cx="1142.1" cy="798" r="7.5" />
              <circle className="st0" cx="1162.9" cy="798" r="7.5" />
              <circle className="st0" cx="1183.6" cy="798" r="7.5" />
              <circle className="st0" cx="1204.4" cy="798" r="7.5" />
              <circle className="st0" cx="1225.1" cy="798" r="7.5" />
              <circle className="st0" cx="1245.9" cy="798" r="7.5" />
              <circle className="st0" cx="1494.8" cy="798" r="7.5" />
              <circle className="st0" cx="1515.5" cy="798" r="7.5" />
              <circle className="st1" cx="1536.3" cy="798" r="7.5" />
              <circle className="st1" cx="1453.3" cy="798" r="7.5" />
              <circle className="st1" cx="1557" cy="798" r="7.5" />
              <circle className="st1" cx="1577.8" cy="798" r="7.5" />
              <circle className="st1" cx="1598.5" cy="798" r="7.5" />
              <circle className="st0" cx="1619.2" cy="798" r="7.5" />
              <circle className="st0" cx="1640" cy="798" r="7.5" />
              <circle className="st0" cx="1660.7" cy="798" r="7.5" />
              <circle className="st0" cx="1681.5" cy="798" r="7.5" />
              <circle className="st0" cx="1702.2" cy="798" r="7.5" />
              <circle className="st0" cx="1722.9" cy="798" r="7.5" />
              <circle className="st0" cx="1743.7" cy="798" r="7.5" />
              <circle className="st0" cx="1764.4" cy="798" r="7.5" />
              <circle className="st0" cx="1785.2" cy="798" r="7.5" />
              <circle className="st0" cx="1805.9" cy="798" r="7.5" />
              <circle className="st0" cx="1826.7" cy="798" r="7.5" />
              <circle className="st1" cx="1847.4" cy="798" r="7.5" />
              <circle className="st1" cx="1868.1" cy="798" r="7.5" />
              <circle className="st1" cx="1888.9" cy="798" r="7.5" />
              <circle className="st1" cx="1909.6" cy="798" r="7.5" />
              <circle className="st1" cx="1930.4" cy="798" r="7.5" />
              <circle className="st1" cx="1951.1" cy="798" r="7.5" />
              <circle className="st1" cx="1971.9" cy="798" r="7.5" />
              <circle className="st1" cx="1992.6" cy="798" r="7.5" />
              <circle className="st1" cx="2013.3" cy="798" r="7.5" />
              <circle className="st1" cx="2034.1" cy="798" r="7.5" />
              <circle className="st1" cx="2054.8" cy="798" r="7.5" />
              <circle className="st1" cx="2075.6" cy="798" r="7.5" />
              <circle className="st1" cx="2096.3" cy="798" r="7.5" />
              <circle className="st1" cx="2117.1" cy="798" r="7.5" />
              <circle className="st1" cx="2137.8" cy="798" r="7.5" />
              <circle className="st1" cx="2158.5" cy="798" r="7.5" />
              <circle className="st1" cx="2179.3" cy="798" r="7.5" />
              <circle className="st1" cx="2200" cy="798" r="7.5" />
              <circle className="st1" cx="2220.8" cy="798" r="7.5" />
              <circle className="st1" cx="2241.5" cy="798" r="7.5" />
              <circle className="st1" cx="2262.2" cy="798" r="7.5" />
              <circle className="st1" cx="2283" cy="798" r="7.5" />
              <circle className="st1" cx="2303.7" cy="798" r="7.5" />
              <circle className="st1" cx="2324.5" cy="798" r="7.5" />
              <circle className="st1" cx="2448.9" cy="798" r="7.5" />
              <circle className="st1" cx="2469.7" cy="798" r="7.5" />
              <circle className="st1" cx="2490.4" cy="798" r="7.5" />
              <circle className="st0" cx="1059.2" cy="819" r="7.5" />
              <circle className="st0" cx="1079.9" cy="819" r="7.5" />
              <circle className="st0" cx="1100.7" cy="819" r="7.5" />
              <circle className="st0" cx="1121.4" cy="819" r="7.5" />
              <circle className="st0" cx="1142.1" cy="819" r="7.5" />
              <circle className="st0" cx="1162.9" cy="819" r="7.5" />
              <circle className="st0" cx="1183.6" cy="819" r="7.5" />
              <circle className="st0" cx="1204.4" cy="819" r="7.5" />
              <circle className="st0" cx="1225.1" cy="819" r="7.5" />
              <circle className="st0" cx="1245.9" cy="819" r="7.5" />
              <circle className="st1" cx="1266.6" cy="819" r="7.5" />
              <circle className="st1" cx="1287.3" cy="819" r="7.5" />
              <circle className="st1" cx="1308.1" cy="819" r="7.5" />
              <circle className="st1" cx="1328.8" cy="819" r="7.5" />
              <circle className="st1" cx="1349.6" cy="819" r="7.5" />
              <circle className="st1" cx="1370.3" cy="819" r="7.5" />
              <circle className="st1" cx="1391.1" cy="819" r="7.5" />
              <circle className="st0" cx="1411.8" cy="819" r="7.5" />
              <circle className="st0" cx="1494.8" cy="819" r="7.5" />
              <circle className="st0" cx="1515.5" cy="819" r="7.5" />
              <circle className="st1" cx="1536.3" cy="819" r="7.5" />
              <circle className="st1" cx="1557" cy="819" r="7.5" />
              <circle className="st1" cx="1577.8" cy="819" r="7.5" />
              <circle className="st1" cx="1598.5" cy="819" r="7.5" />
              <circle className="st0" cx="1619.2" cy="819" r="7.5" />
              <circle className="st0" cx="1640" cy="819" r="7.5" />
              <circle className="st0" cx="1660.7" cy="819" r="7.5" />
              <circle className="st0" cx="1681.5" cy="819" r="7.5" />
              <circle className="st0" cx="1702.2" cy="819" r="7.5" />
              <circle className="st0" cx="1722.9" cy="819" r="7.5" />
              <circle className="st0" cx="1743.7" cy="819" r="7.5" />
              <circle className="st0" cx="1764.4" cy="819" r="7.5" />
              <circle className="st1" cx="1785.2" cy="819" r="7.5" />
              <circle className="st1" cx="1805.9" cy="819" r="7.5" />
              <circle className="st1" cx="1826.7" cy="819" r="7.5" />
              <circle className="st1" cx="1847.4" cy="819" r="7.5" />
              <circle className="st1" cx="1868.1" cy="819" r="7.5" />
              <circle className="st1" cx="1888.9" cy="819" r="7.5" />
              <circle className="st1" cx="1909.6" cy="819" r="7.5" />
              <circle className="st0" cx="1930.4" cy="819" r="7.5" />
              <circle className="st0" cx="1951.1" cy="819" r="7.5" />
              <circle className="st1" cx="1971.9" cy="819" r="7.5" />
              <circle className="st1" cx="1992.6" cy="819" r="7.5" />
              <circle className="st1" cx="2013.3" cy="819" r="7.5" />
              <circle className="st1" cx="2034.1" cy="819" r="7.5" />
              <circle className="st1" cx="2054.8" cy="819" r="7.5" />
              <circle className="st1" cx="2075.6" cy="819" r="7.5" />
              <circle className="st1" cx="2096.3" cy="819" r="7.5" />
              <circle className="st1" cx="2117.1" cy="819" r="7.5" />
              <circle className="st1" cx="2137.8" cy="819" r="7.5" />
              <circle className="st1" cx="2158.5" cy="819" r="7.5" />
              <circle className="st1" cx="2179.3" cy="819" r="7.5" />
              <circle className="st1" cx="2200" cy="819" r="7.5" />
              <circle className="st1" cx="2220.8" cy="819" r="7.5" />
              <circle className="st1" cx="2241.5" cy="819" r="7.5" />
              <circle className="st1" cx="2262.2" cy="819" r="7.5" />
              <circle className="st1" cx="2283" cy="819" r="7.5" />
              <circle className="st1" cx="2303.7" cy="819" r="7.5" />
              <circle className="st1" cx="2324.5" cy="819" r="7.5" />
              <circle className="st1" cx="2345.2" cy="819" r="7.5" />
              <circle className="st1" cx="2448.9" cy="819" r="7.5" />
              <circle className="st0" cx="1038.4" cy="840" r="7.5" />
              <circle className="st0" cx="1059.2" cy="840" r="7.5" />
              <circle className="st0" cx="1079.9" cy="840" r="7.5" />
              <circle className="st0" cx="1100.7" cy="840" r="7.5" />
              <circle className="st0" cx="1121.4" cy="840" r="7.5" />
              <circle className="st0" cx="1142.1" cy="840" r="7.5" />
              <circle className="st0" cx="1162.9" cy="840" r="7.5" />
              <circle className="st0" cx="1183.6" cy="840" r="7.5" />
              <circle className="st0" cx="1204.4" cy="840" r="7.5" />
              <circle className="st0" cx="1225.1" cy="840" r="7.5" />
              <circle className="st1" cx="1245.9" cy="840" r="7.5" />
              <circle className="st1" cx="1266.6" cy="840" r="7.5" />
              <circle className="st1" cx="1287.3" cy="840" r="7.5" />
              <circle className="st1" cx="1308.1" cy="840" r="7.5" />
              <circle className="st1" cx="1328.8" cy="840" r="7.5" />
              <circle className="st1" cx="1349.6" cy="840" r="7.5" />
              <circle className="st1" cx="1370.3" cy="840" r="7.5" />
              <circle className="st1" cx="1391.1" cy="840" r="7.5" />
              <circle className="st0" cx="1411.8" cy="840" r="7.5" />
              <circle className="st0" cx="1432.6" cy="840" r="7.5" />
              <circle className="st0" cx="1453.3" cy="840" r="7.5" />
              <circle className="st0" cx="1474" cy="840" r="7.5" />
              <circle className="st0" cx="1494.8" cy="840" r="7.5" />
              <circle className="st1" cx="1515.5" cy="840" r="7.5" />
              <circle className="st1" cx="1536.3" cy="840" r="7.5" />
              <circle className="st1" cx="1557" cy="840" r="7.5" />
              <circle className="st1" cx="1577.8" cy="840" r="7.5" />
              <circle className="st1" cx="1598.5" cy="840" r="7.5" />
              <circle className="st1" cx="1619.2" cy="840" r="7.5" />
              <circle className="st0" cx="1640" cy="840" r="7.5" />
              <circle className="st0" cx="1660.7" cy="840" r="7.5" />
              <circle className="st0" cx="1681.5" cy="840" r="7.5" />
              <circle className="st0" cx="1702.2" cy="840" r="7.5" />
              <circle className="st0" cx="1722.9" cy="840" r="7.5" />
              <circle className="st0" cx="1743.7" cy="840" r="7.5" />
              <circle className="st0" cx="1764.4" cy="840" r="7.5" />
              <circle className="st1" cx="1785.2" cy="840" r="7.5" />
              <circle className="st1" cx="1805.9" cy="840" r="7.5" />
              <circle className="st1" cx="1826.7" cy="840" r="7.5" />
              <circle className="st1" cx="1847.4" cy="840" r="7.5" />
              <circle className="st1" cx="1868.1" cy="840" r="7.5" />
              <circle className="st1" cx="1888.9" cy="840" r="7.5" />
              <circle className="st0" cx="1909.6" cy="840" r="7.5" />
              <circle className="st0" cx="1930.4" cy="840" r="7.5" />
              <circle className="st0" cx="1951.1" cy="840" r="7.5" />
              <circle className="st0" cx="1971.9" cy="840" r="7.5" />
              <circle className="st1" cx="1992.6" cy="840" r="7.5" />
              <circle className="st1" cx="2013.3" cy="840" r="7.5" />
              <circle className="st1" cx="2034.1" cy="840" r="7.5" />
              <circle className="st1" cx="2054.8" cy="840" r="7.5" />
              <circle className="st1" cx="2075.6" cy="840" r="7.5" />
              <circle className="st1" cx="2096.3" cy="840" r="7.5" />
              <circle className="st1" cx="2117.1" cy="840" r="7.5" />
              <circle className="st1" cx="2137.8" cy="840" r="7.5" />
              <circle className="st1" cx="2158.5" cy="840" r="7.5" />
              <circle className="st1" cx="2179.3" cy="840" r="7.5" />
              <circle className="st1" cx="2200" cy="840" r="7.5" />
              <circle className="st1" cx="2220.8" cy="840" r="7.5" />
              <circle className="st1" cx="2241.5" cy="840" r="7.5" />
              <circle className="st1" cx="2262.2" cy="840" r="7.5" />
              <circle className="st1" cx="2283" cy="840" r="7.5" />
              <circle className="st1" cx="2303.7" cy="840" r="7.5" />
              <circle className="st1" cx="2324.5" cy="840" r="7.5" />
              <circle className="st1" cx="2345.2" cy="840" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -120.9348 1554.2136)"
                className="st0"
                cx="1017.7"
                cy="861"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="861" r="7.5" />
              <circle className="st0" cx="1059.2" cy="861" r="7.5" />
              <circle className="st0" cx="1079.9" cy="861" r="7.5" />
              <circle className="st0" cx="1100.7" cy="861" r="7.5" />
              <circle className="st0" cx="1121.4" cy="861" r="7.5" />
              <circle className="st0" cx="1142.1" cy="861" r="7.5" />
              <circle className="st0" cx="1162.9" cy="861" r="7.5" />
              <circle className="st0" cx="1183.6" cy="861" r="7.5" />
              <circle className="st0" cx="1204.4" cy="861" r="7.5" />
              <circle className="st0" cx="1225.1" cy="861" r="7.5" />
              <circle className="st1" cx="1245.9" cy="861" r="7.5" />
              <circle className="st1" cx="1266.6" cy="861" r="7.5" />
              <circle className="st1" cx="1287.3" cy="861" r="7.5" />
              <circle className="st1" cx="1308.1" cy="861" r="7.5" />
              <circle className="st1" cx="1328.8" cy="861" r="7.5" />
              <circle className="st1" cx="1349.6" cy="861" r="7.5" />
              <circle className="st1" cx="1370.3" cy="861" r="7.5" />
              <circle className="st1" cx="1391.1" cy="861" r="7.5" />
              <circle className="st0" cx="1411.8" cy="861" r="7.5" />
              <circle className="st0" cx="1432.6" cy="861" r="7.5" />
              <circle className="st0" cx="1453.3" cy="861" r="7.5" />
              <circle className="st0" cx="1474" cy="861" r="7.5" />
              <circle className="st0" cx="1494.8" cy="861" r="7.5" />
              <circle className="st1" cx="1515.5" cy="861" r="7.5" />
              <circle className="st1" cx="1536.3" cy="861" r="7.5" />
              <circle className="st1" cx="1557" cy="861" r="7.5" />
              <circle className="st1" cx="1577.8" cy="861" r="7.5" />
              <circle className="st1" cx="1598.5" cy="861" r="7.5" />
              <circle className="st1" cx="1619.2" cy="861" r="7.5" />
              <circle className="st0" cx="1660.7" cy="861" r="7.5" />
              <circle className="st0" cx="1681.5" cy="861" r="7.5" />
              <circle className="st0" cx="1702.2" cy="861" r="7.5" />
              <circle className="st0" cx="1722.9" cy="861" r="7.5" />
              <circle className="st0" cx="1743.7" cy="861" r="7.5" />
              <circle className="st0" cx="1764.4" cy="861" r="7.5" />
              <circle className="st1" cx="1785.2" cy="861" r="7.5" />
              <circle className="st1" cx="1805.9" cy="861" r="7.5" />
              <circle className="st1" cx="1826.7" cy="861" r="7.5" />
              <circle className="st1" cx="1847.4" cy="861" r="7.5" />
              <circle className="st0" cx="1868.1" cy="861" r="7.5" />
              <circle className="st0" cx="1888.9" cy="861" r="7.5" />
              <circle className="st0" cx="1909.6" cy="861" r="7.5" />
              <circle className="st0" cx="1930.4" cy="861" r="7.5" />
              <circle className="st0" cx="1951.1" cy="861" r="7.5" />
              <circle className="st0" cx="1971.9" cy="861" r="7.5" />
              <circle className="st0" cx="1992.6" cy="861" r="7.5" />
              <circle className="st0" cx="2013.3" cy="861" r="7.5" />
              <circle className="st0" cx="2034.1" cy="861" r="7.5" />
              <circle className="st0" cx="2054.8" cy="861" r="7.5" />
              <circle className="st0" cx="2075.6" cy="861" r="7.5" />
              <circle className="st0" cx="2096.3" cy="861" r="7.5" />
              <circle className="st1" cx="2117.1" cy="861" r="7.5" />
              <circle className="st1" cx="2137.8" cy="861" r="7.5" />
              <circle className="st1" cx="2158.5" cy="861" r="7.5" />
              <circle className="st1" cx="2179.3" cy="861" r="7.5" />
              <circle className="st1" cx="2200" cy="861" r="7.5" />
              <circle className="st1" cx="2220.8" cy="861" r="7.5" />
              <circle className="st1" cx="2241.5" cy="861" r="7.5" />
              <circle className="st1" cx="2262.2" cy="861" r="7.5" />
              <circle className="st1" cx="2283" cy="861" r="7.5" />
              <circle className="st1" cx="2303.7" cy="861" r="7.5" />
              <circle className="st1" cx="2324.5" cy="861" r="7.5" />
              <circle className="st1" cx="2345.2" cy="861" r="7.5" />
              <circle className="st0" cx="997" cy="882" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -140.8572 1568.5729)"
                className="st0"
                cx="1017.7"
                cy="882"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="882" r="7.5" />
              <circle className="st0" cx="1059.2" cy="882" r="7.5" />
              <circle className="st0" cx="1079.9" cy="882" r="7.5" />
              <circle className="st0" cx="1100.7" cy="882" r="7.5" />
              <circle className="st0" cx="1121.4" cy="882" r="7.5" />
              <circle className="st0" cx="1142.1" cy="882" r="7.5" />
              <circle className="st0" cx="1162.9" cy="882" r="7.5" />
              <circle className="st0" cx="1183.6" cy="882" r="7.5" />
              <circle className="st0" cx="1204.4" cy="882" r="7.5" />
              <circle className="st0" cx="1225.1" cy="882" r="7.5" />
              <circle className="st0" cx="1245.9" cy="882" r="7.5" />
              <circle className="st1" cx="1266.6" cy="882" r="7.5" />
              <circle className="st1" cx="1287.3" cy="882" r="7.5" />
              <circle className="st1" cx="1308.1" cy="882" r="7.5" />
              <circle className="st1" cx="1328.8" cy="882" r="7.5" />
              <circle className="st1" cx="1349.6" cy="882" r="7.5" />
              <circle className="st1" cx="1370.3" cy="882" r="7.5" />
              <circle className="st1" cx="1391.1" cy="882" r="7.5" />
              <circle className="st0" cx="1411.8" cy="882" r="7.5" />
              <circle className="st0" cx="1432.6" cy="882" r="7.5" />
              <circle className="st0" cx="1453.3" cy="882" r="7.5" />
              <circle className="st0" cx="1474" cy="882" r="7.5" />
              <circle className="st1" cx="1515.5" cy="882" r="7.5" />
              <circle className="st1" cx="1536.3" cy="882" r="7.5" />
              <circle className="st1" cx="1557" cy="882" r="7.5" />
              <circle className="st1" cx="1577.8" cy="882" r="7.5" />
              <circle className="st1" cx="1598.5" cy="882" r="7.5" />
              <circle className="st1" cx="1619.2" cy="882" r="7.5" />
              <circle className="st1" cx="1640" cy="882" r="7.5" />
              <circle className="st0" cx="1722.9" cy="882" r="7.5" />
              <circle className="st0" cx="1743.7" cy="882" r="7.5" />
              <circle className="st0" cx="1764.4" cy="882" r="7.5" />
              <circle className="st1" cx="1785.2" cy="882" r="7.5" />
              <circle className="st1" cx="1805.9" cy="882" r="7.5" />
              <circle className="st0" cx="1826.7" cy="882" r="7.5" />
              <circle className="st0" cx="1847.4" cy="882" r="7.5" />
              <circle className="st0" cx="1868.1" cy="882" r="7.5" />
              <circle className="st0" cx="1888.9" cy="882" r="7.5" />
              <circle className="st0" cx="1909.6" cy="882" r="7.5" />
              <circle className="st0" cx="1930.4" cy="882" r="7.5" />
              <circle className="st0" cx="1951.1" cy="882" r="7.5" />
              <circle className="st0" cx="1971.9" cy="882" r="7.5" />
              <circle className="st0" cx="1992.6" cy="882" r="7.5" />
              <circle className="st0" cx="2013.3" cy="882" r="7.5" />
              <circle className="st0" cx="2034.1" cy="882" r="7.5" />
              <circle className="st1" cx="2054.8" cy="882" r="7.5" />
              <circle className="st1" cx="2075.6" cy="882" r="7.5" />
              <circle className="st1" cx="2096.3" cy="882" r="7.5" />
              <circle className="st1" cx="2117.1" cy="882" r="7.5" />
              <circle className="st1" cx="2137.8" cy="882" r="7.5" />
              <circle className="st1" cx="2158.5" cy="882" r="7.5" />
              <circle className="st1" cx="2179.3" cy="882" r="7.5" />
              <circle className="st1" cx="2200" cy="882" r="7.5" />
              <circle className="st1" cx="2220.8" cy="882" r="7.5" />
              <circle className="st1" cx="2241.5" cy="882" r="7.5" />
              <circle className="st1" cx="2262.2" cy="882" r="7.5" />
              <circle className="st1" cx="2283" cy="882" r="7.5" />
              <circle className="st1" cx="2303.7" cy="882" r="7.5" />
              <circle className="st1" cx="2324.5" cy="882" r="7.5" />
              <circle className="st1" cx="2345.2" cy="882" r="7.5" />
              <circle className="st0" cx="976.2" cy="903" r="7.5" />
              <circle className="st0" cx="997" cy="903" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -160.7797 1582.9324)"
                className="st0"
                cx="1017.7"
                cy="903"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="903" r="7.5" />
              <circle className="st0" cx="1059.2" cy="903" r="7.5" />
              <circle className="st0" cx="1079.9" cy="903" r="7.5" />
              <circle className="st0" cx="1100.7" cy="903" r="7.5" />
              <circle className="st0" cx="1121.4" cy="903" r="7.5" />
              <circle className="st0" cx="1142.1" cy="903" r="7.5" />
              <circle className="st0" cx="1162.9" cy="903" r="7.5" />
              <circle className="st0" cx="1183.6" cy="903" r="7.5" />
              <circle className="st0" cx="1204.4" cy="903" r="7.5" />
              <circle className="st0" cx="1225.1" cy="903" r="7.5" />
              <circle className="st0" cx="1245.9" cy="903" r="7.5" />
              <circle className="st0" cx="1266.6" cy="903" r="7.5" />
              <circle className="st1" cx="1287.3" cy="903" r="7.5" />
              <circle className="st1" cx="1308.1" cy="903" r="7.5" />
              <circle className="st1" cx="1328.8" cy="903" r="7.5" />
              <circle className="st1" cx="1349.6" cy="903" r="7.5" />
              <circle className="st1" cx="1370.3" cy="903" r="7.5" />
              <circle className="st1" cx="1391.1" cy="903" r="7.5" />
              <circle className="st0" cx="1411.8" cy="903" r="7.5" />
              <circle className="st0" cx="1432.6" cy="903" r="7.5" />
              <circle className="st0" cx="1453.3" cy="903" r="7.5" />
              <circle className="st0" cx="1474" cy="903" r="7.5" />
              <circle className="st0" cx="1494.8" cy="903" r="7.5" />
              <circle className="st1" cx="1536.3" cy="903" r="7.5" />
              <circle className="st1" cx="1557" cy="903" r="7.5" />
              <circle className="st1" cx="1577.8" cy="903" r="7.5" />
              <circle className="st1" cx="1598.5" cy="903" r="7.5" />
              <circle className="st1" cx="1619.2" cy="903" r="7.5" />
              <circle className="st1" cx="1640" cy="903" r="7.5" />
              <circle className="st1" cx="1660.7" cy="903" r="7.5" />
              <circle className="st1" cx="1702.2" cy="903" r="7.5" />
              <circle className="st0" cx="1826.7" cy="903" r="7.5" />
              <circle className="st0" cx="1847.4" cy="903" r="7.5" />
              <circle className="st0" cx="1868.1" cy="903" r="7.5" />
              <circle className="st0" cx="1888.9" cy="903" r="7.5" />
              <circle className="st0" cx="1909.6" cy="903" r="7.5" />
              <circle className="st0" cx="1930.4" cy="903" r="7.5" />
              <circle className="st0" cx="1951.1" cy="903" r="7.5" />
              <circle className="st0" cx="1971.9" cy="903" r="7.5" />
              <circle className="st0" cx="1992.6" cy="903" r="7.5" />
              <circle className="st0" cx="2013.3" cy="903" r="7.5" />
              <circle className="st0" cx="2034.1" cy="903" r="7.5" />
              <circle className="st1" cx="2054.8" cy="903" r="7.5" />
              <circle className="st1" cx="2075.6" cy="903" r="7.5" />
              <circle className="st1" cx="2096.3" cy="903" r="7.5" />
              <circle className="st1" cx="2117.1" cy="903" r="7.5" />
              <circle className="st1" cx="2137.8" cy="903" r="7.5" />
              <circle className="st1" cx="2158.5" cy="903" r="7.5" />
              <circle className="st1" cx="2179.3" cy="903" r="7.5" />
              <circle className="st1" cx="2200" cy="903" r="7.5" />
              <circle className="st1" cx="2220.8" cy="903" r="7.5" />
              <circle className="st1" cx="2241.5" cy="903" r="7.5" />
              <circle className="st1" cx="2262.2" cy="903" r="7.5" />
              <circle className="st1" cx="2283" cy="903" r="7.5" />
              <circle className="st1" cx="2303.7" cy="903" r="7.5" />
              <circle className="st1" cx="2324.5" cy="903" r="7.5" />
              <circle className="st1" cx="2366" cy="903" r="7.5" />
              <circle className="st0" cx="976.2" cy="924" r="7.5" />
              <circle className="st0" cx="997" cy="924" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -180.702 1597.2917)"
                className="st0"
                cx="1017.7"
                cy="924"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="924" r="7.5" />
              <circle className="st0" cx="1059.2" cy="924" r="7.5" />
              <circle className="st0" cx="1079.9" cy="924" r="7.5" />
              <circle className="st0" cx="1100.7" cy="924" r="7.5" />
              <circle className="st0" cx="1121.4" cy="924" r="7.5" />
              <circle className="st0" cx="1142.1" cy="924" r="7.5" />
              <circle className="st0" cx="1162.9" cy="924" r="7.5" />
              <circle className="st0" cx="1183.6" cy="924" r="7.5" />
              <circle className="st0" cx="1204.4" cy="924" r="7.5" />
              <circle className="st0" cx="1225.1" cy="924" r="7.5" />
              <circle className="st0" cx="1245.9" cy="924" r="7.5" />
              <circle className="st0" cx="1266.6" cy="924" r="7.5" />
              <circle className="st0" cx="1287.3" cy="924" r="7.5" />
              <circle className="st0" cx="1308.1" cy="924" r="7.5" />
              <circle className="st0" cx="1328.8" cy="924" r="7.5" />
              <circle className="st1" cx="1349.6" cy="924" r="7.5" />
              <circle className="st1" cx="1370.3" cy="924" r="7.5" />
              <circle className="st1" cx="1391.1" cy="924" r="7.5" />
              <circle className="st0" cx="1411.8" cy="924" r="7.5" />
              <circle className="st0" cx="1432.6" cy="924" r="7.5" />
              <circle className="st0" cx="1453.3" cy="924" r="7.5" />
              <circle className="st0" cx="1474" cy="924" r="7.5" />
              <circle className="st0" cx="1494.8" cy="924" r="7.5" />
              <circle className="st1" cx="1536.3" cy="924" r="7.5" />
              <circle className="st1" cx="1557" cy="924" r="7.5" />
              <circle className="st1" cx="1577.8" cy="924" r="7.5" />
              <circle className="st1" cx="1598.5" cy="924" r="7.5" />
              <circle className="st1" cx="1619.2" cy="924" r="7.5" />
              <circle className="st1" cx="1640" cy="924" r="7.5" />
              <circle className="st1" cx="1660.7" cy="924" r="7.5" />
              <circle className="st1" cx="1681.5" cy="924" r="7.5" />
              <circle className="st1" cx="1702.2" cy="924" r="7.5" />
              <circle className="st1" cx="1722.9" cy="924" r="7.5" />
              <circle className="st1" cx="1743.7" cy="924" r="7.5" />
              <circle className="st0" cx="1847.4" cy="924" r="7.5" />
              <circle className="st0" cx="1868.1" cy="924" r="7.5" />
              <circle className="st0" cx="1888.9" cy="924" r="7.5" />
              <circle className="st0" cx="1909.6" cy="924" r="7.5" />
              <circle className="st0" cx="1930.4" cy="924" r="7.5" />
              <circle className="st0" cx="1951.1" cy="924" r="7.5" />
              <circle className="st0" cx="1971.9" cy="924" r="7.5" />
              <circle className="st0" cx="1992.6" cy="924" r="7.5" />
              <circle className="st0" cx="2013.3" cy="924" r="7.5" />
              <circle className="st0" cx="2034.1" cy="924" r="7.5" />
              <circle className="st1" cx="2054.8" cy="924" r="7.5" />
              <circle className="st1" cx="2075.6" cy="924" r="7.5" />
              <circle className="st1" cx="2096.3" cy="924" r="7.5" />
              <circle className="st1" cx="2117.1" cy="924" r="7.5" />
              <circle className="st1" cx="2137.8" cy="924" r="7.5" />
              <circle className="st1" cx="2158.5" cy="924" r="7.5" />
              <circle className="st1" cx="2179.3" cy="924" r="7.5" />
              <circle className="st1" cx="2200" cy="924" r="7.5" />
              <circle className="st1" cx="2220.8" cy="924" r="7.5" />
              <circle className="st1" cx="2241.5" cy="924" r="7.5" />
              <circle className="st1" cx="2262.2" cy="924" r="7.5" />
              <circle className="st1" cx="2283" cy="924" r="7.5" />
              <circle className="st1" cx="2303.7" cy="924" r="7.5" />
              <circle className="st1" cx="2324.5" cy="924" r="7.5" />
              <circle className="st1" cx="2366" cy="924" r="7.5" />
              <circle className="st0" cx="976.2" cy="945" r="7.5" />
              <circle className="st0" cx="997" cy="945" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -200.6245 1611.6511)"
                className="st0"
                cx="1017.7"
                cy="945"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="945" r="7.5" />
              <circle className="st0" cx="1059.2" cy="945" r="7.5" />
              <circle className="st0" cx="1079.9" cy="945" r="7.5" />
              <circle className="st0" cx="1100.7" cy="945" r="7.5" />
              <circle className="st0" cx="1121.4" cy="945" r="7.5" />
              <circle className="st0" cx="1142.1" cy="945" r="7.5" />
              <circle className="st0" cx="1162.9" cy="945" r="7.5" />
              <circle className="st0" cx="1183.6" cy="945" r="7.5" />
              <circle className="st0" cx="1204.4" cy="945" r="7.5" />
              <circle className="st0" cx="1225.1" cy="945" r="7.5" />
              <circle className="st0" cx="1245.9" cy="945" r="7.5" />
              <circle className="st0" cx="1266.6" cy="945" r="7.5" />
              <circle className="st0" cx="1287.3" cy="945" r="7.5" />
              <circle className="st0" cx="1308.1" cy="945" r="7.5" />
              <circle className="st0" cx="1328.8" cy="945" r="7.5" />
              <circle className="st0" cx="1349.6" cy="945" r="7.5" />
              <circle className="st0" cx="1370.3" cy="945" r="7.5" />
              <circle className="st0" cx="1391.1" cy="945" r="7.5" />
              <circle className="st0" cx="1411.8" cy="945" r="7.5" />
              <circle className="st0" cx="1432.6" cy="945" r="7.5" />
              <circle className="st0" cx="1453.3" cy="945" r="7.5" />
              <circle className="st0" cx="1474" cy="945" r="7.5" />
              <circle className="st0" cx="1494.8" cy="945" r="7.5" />
              <circle className="st0" cx="1515.5" cy="945" r="7.5" />
              <circle className="st1" cx="1557" cy="945" r="7.5" />
              <circle className="st1" cx="1577.8" cy="945" r="7.5" />
              <circle className="st1" cx="1598.5" cy="945" r="7.5" />
              <circle className="st1" cx="1619.2" cy="945" r="7.5" />
              <circle className="st1" cx="1640" cy="945" r="7.5" />
              <circle className="st1" cx="1660.7" cy="945" r="7.5" />
              <circle className="st1" cx="1681.5" cy="945" r="7.5" />
              <circle className="st1" cx="1702.2" cy="945" r="7.5" />
              <circle className="st1" cx="1722.9" cy="945" r="7.5" />
              <circle className="st1" cx="1743.7" cy="945" r="7.5" />
              <circle className="st0" cx="1868.1" cy="945" r="7.5" />
              <circle className="st0" cx="1888.9" cy="945" r="7.5" />
              <circle className="st0" cx="1909.6" cy="945" r="7.5" />
              <circle className="st0" cx="1930.4" cy="945" r="7.5" />
              <circle className="st0" cx="1951.1" cy="945" r="7.5" />
              <circle className="st0" cx="1971.9" cy="945" r="7.5" />
              <circle className="st0" cx="1992.6" cy="945" r="7.5" />
              <circle className="st0" cx="2013.3" cy="945" r="7.5" />
              <circle className="st1" cx="2096.3" cy="945" r="7.5" />
              <circle className="st1" cx="2117.1" cy="945" r="7.5" />
              <circle className="st1" cx="2137.8" cy="945" r="7.5" />
              <circle className="st1" cx="2158.5" cy="945" r="7.5" />
              <circle className="st1" cx="2179.3" cy="945" r="7.5" />
              <circle className="st1" cx="2200" cy="945" r="7.5" />
              <circle className="st1" cx="2220.8" cy="945" r="7.5" />
              <circle className="st1" cx="2241.5" cy="945" r="7.5" />
              <circle className="st1" cx="2366" cy="945" r="7.5" />
              <circle className="st0" cx="976.2" cy="966" r="7.5" />
              <circle className="st0" cx="997" cy="966" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -220.5469 1626.0105)"
                className="st0"
                cx="1017.7"
                cy="966"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="966" r="7.5" />
              <circle className="st0" cx="1059.2" cy="966" r="7.5" />
              <circle className="st0" cx="1079.9" cy="966" r="7.5" />
              <circle className="st0" cx="1100.7" cy="966" r="7.5" />
              <circle className="st0" cx="1121.4" cy="966" r="7.5" />
              <circle className="st0" cx="1142.1" cy="966" r="7.5" />
              <circle className="st0" cx="1162.9" cy="966" r="7.5" />
              <circle className="st0" cx="1183.6" cy="966" r="7.5" />
              <circle className="st0" cx="1204.4" cy="966" r="7.5" />
              <circle className="st0" cx="1225.1" cy="966" r="7.5" />
              <circle className="st0" cx="1245.9" cy="966" r="7.5" />
              <circle className="st0" cx="1266.6" cy="966" r="7.5" />
              <circle className="st0" cx="1287.3" cy="966" r="7.5" />
              <circle className="st0" cx="1308.1" cy="966" r="7.5" />
              <circle className="st0" cx="1328.8" cy="966" r="7.5" />
              <circle className="st0" cx="1349.6" cy="966" r="7.5" />
              <circle className="st0" cx="1370.3" cy="966" r="7.5" />
              <circle className="st0" cx="1391.1" cy="966" r="7.5" />
              <circle className="st0" cx="1411.8" cy="966" r="7.5" />
              <circle className="st0" cx="1432.6" cy="966" r="7.5" />
              <circle className="st0" cx="1453.3" cy="966" r="7.5" />
              <circle className="st0" cx="1474" cy="966" r="7.5" />
              <circle className="st0" cx="1494.8" cy="966" r="7.5" />
              <circle className="st0" cx="1515.5" cy="966" r="7.5" />
              <circle className="st1" cx="1557" cy="966" r="7.5" />
              <circle className="st1" cx="1577.8" cy="966" r="7.5" />
              <circle className="st1" cx="1598.5" cy="966" r="7.5" />
              <circle className="st1" cx="1619.2" cy="966" r="7.5" />
              <circle className="st1" cx="1640" cy="966" r="7.5" />
              <circle className="st1" cx="1660.7" cy="966" r="7.5" />
              <circle className="st1" cx="1681.5" cy="966" r="7.5" />
              <circle className="st1" cx="1702.2" cy="966" r="7.5" />
              <circle className="st1" cx="1722.9" cy="966" r="7.5" />
              <circle className="st0" cx="1888.9" cy="966" r="7.5" />
              <circle className="st0" cx="1909.6" cy="966" r="7.5" />
              <circle className="st0" cx="1930.4" cy="966" r="7.5" />
              <circle className="st0" cx="1951.1" cy="966" r="7.5" />
              <circle className="st0" cx="1971.9" cy="966" r="7.5" />
              <circle className="st0" cx="1992.6" cy="966" r="7.5" />
              <circle className="st0" cx="2013.3" cy="966" r="7.5" />
              <circle className="st1" cx="2117.1" cy="966" r="7.5" />
              <circle className="st1" cx="2137.8" cy="966" r="7.5" />
              <circle className="st1" cx="2158.5" cy="966" r="7.5" />
              <circle className="st1" cx="2179.3" cy="966" r="7.5" />
              <circle className="st1" cx="2200" cy="966" r="7.5" />
              <circle className="st1" cx="2220.8" cy="966" r="7.5" />
              <circle className="st1" cx="2262.2" cy="966" r="7.5" />
              <circle className="st1" cx="2386.7" cy="966" r="7.5" />
              <circle className="st0" cx="976.2" cy="987" r="7.5" />
              <circle className="st0" cx="997" cy="987" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -240.4694 1640.37)"
                className="st0"
                cx="1017.7"
                cy="987"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="987" r="7.5" />
              <circle className="st0" cx="1059.2" cy="987" r="7.5" />
              <circle className="st0" cx="1079.9" cy="987" r="7.5" />
              <circle className="st0" cx="1100.7" cy="987" r="7.5" />
              <circle className="st0" cx="1121.4" cy="987" r="7.5" />
              <circle className="st0" cx="1142.1" cy="987" r="7.5" />
              <circle className="st0" cx="1162.9" cy="987" r="7.5" />
              <circle className="st0" cx="1183.6" cy="987" r="7.5" />
              <circle className="st0" cx="1204.4" cy="987" r="7.5" />
              <circle className="st0" cx="1225.1" cy="987" r="7.5" />
              <circle className="st0" cx="1245.9" cy="987" r="7.5" />
              <circle className="st0" cx="1266.6" cy="987" r="7.5" />
              <circle className="st0" cx="1287.3" cy="987" r="7.5" />
              <circle className="st0" cx="1308.1" cy="987" r="7.5" />
              <circle className="st0" cx="1328.8" cy="987" r="7.5" />
              <circle className="st0" cx="1349.6" cy="987" r="7.5" />
              <circle className="st0" cx="1370.3" cy="987" r="7.5" />
              <circle className="st0" cx="1391.1" cy="987" r="7.5" />
              <circle className="st0" cx="1411.8" cy="987" r="7.5" />
              <circle className="st0" cx="1432.6" cy="987" r="7.5" />
              <circle className="st0" cx="1453.3" cy="987" r="7.5" />
              <circle className="st0" cx="1474" cy="987" r="7.5" />
              <circle className="st0" cx="1494.8" cy="987" r="7.5" />
              <circle className="st0" cx="1515.5" cy="987" r="7.5" />
              <circle className="st0" cx="1536.3" cy="987" r="7.5" />
              <circle className="st1" cx="1577.8" cy="987" r="7.5" />
              <circle className="st1" cx="1598.5" cy="987" r="7.5" />
              <circle className="st1" cx="1619.2" cy="987" r="7.5" />
              <circle className="st1" cx="1640" cy="987" r="7.5" />
              <circle className="st1" cx="1660.7" cy="987" r="7.5" />
              <circle className="st1" cx="1681.5" cy="987" r="7.5" />
              <circle className="st1" cx="1702.2" cy="987" r="7.5" />
              <circle className="st0" cx="1888.9" cy="987" r="7.5" />
              <circle className="st0" cx="1909.6" cy="987" r="7.5" />
              <circle className="st0" cx="1930.4" cy="987" r="7.5" />
              <circle className="st0" cx="1951.1" cy="987" r="7.5" />
              <circle className="st0" cx="1971.9" cy="987" r="7.5" />
              <circle className="st1" cx="2117.1" cy="987" r="7.5" />
              <circle className="st1" cx="2137.8" cy="987" r="7.5" />
              <circle className="st1" cx="2158.5" cy="987" r="7.5" />
              <circle className="st1" cx="2179.3" cy="987" r="7.5" />
              <circle className="st1" cx="2200" cy="987" r="7.5" />
              <circle className="st1" cx="2220.8" cy="987" r="7.5" />
              <circle className="st1" cx="2386.7" cy="987" r="7.5" />
              <circle className="st0" cx="976.2" cy="1008" r="7.5" />
              <circle className="st0" cx="997" cy="1008" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -260.3917 1654.7294)"
                className="st0"
                cx="1017.7"
                cy="1008"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="1008" r="7.5" />
              <circle className="st0" cx="1059.2" cy="1008" r="7.5" />
              <circle className="st0" cx="1079.9" cy="1008" r="7.5" />
              <circle className="st0" cx="1100.7" cy="1008" r="7.5" />
              <circle className="st0" cx="1121.4" cy="1008" r="7.5" />
              <circle className="st0" cx="1142.1" cy="1008" r="7.5" />
              <circle className="st0" cx="1162.9" cy="1008" r="7.5" />
              <circle className="st0" cx="1183.6" cy="1008" r="7.5" />
              <circle className="st0" cx="1204.4" cy="1008" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1008" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1008" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1008" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1008" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1008" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1008" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1008" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1008" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1008" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1008" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1008" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1008" r="7.5" />
              <circle className="st0" cx="1474" cy="1008" r="7.5" />
              <circle className="st0" cx="1494.8" cy="1008" r="7.5" />
              <circle className="st0" cx="1515.5" cy="1008" r="7.5" />
              <circle className="st0" cx="1536.3" cy="1008" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1008" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1008" r="7.5" />
              <circle className="st1" cx="1640" cy="1008" r="7.5" />
              <circle className="st1" cx="1660.7" cy="1008" r="7.5" />
              <circle className="st0" cx="1909.6" cy="1008" r="7.5" />
              <circle className="st0" cx="1930.4" cy="1008" r="7.5" />
              <circle className="st0" cx="1951.1" cy="1008" r="7.5" />
              <circle className="st1" cx="2117.1" cy="1008" r="7.5" />
              <circle className="st1" cx="2137.8" cy="1008" r="7.5" />
              <circle className="st1" cx="2158.5" cy="1008" r="7.5" />
              <circle className="st1" cx="2179.3" cy="1008" r="7.5" />
              <circle className="st1" cx="2200" cy="1008" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1008" r="7.5" />
              <circle className="st1" cx="2241.5" cy="1008" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1008" r="7.5" />
              <circle className="st0" cx="976.2" cy="1029" r="7.5" />
              <circle className="st0" cx="997" cy="1029" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -280.314 1669.0887)"
                className="st0"
                cx="1017.7"
                cy="1029"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="1029" r="7.5" />
              <circle className="st0" cx="1059.2" cy="1029" r="7.5" />
              <circle className="st0" cx="1079.9" cy="1029" r="7.5" />
              <circle className="st0" cx="1100.7" cy="1029" r="7.5" />
              <circle className="st0" cx="1121.4" cy="1029" r="7.5" />
              <circle className="st0" cx="1142.1" cy="1029" r="7.5" />
              <circle className="st0" cx="1162.9" cy="1029" r="7.5" />
              <circle className="st0" cx="1183.6" cy="1029" r="7.5" />
              <circle className="st0" cx="1204.4" cy="1029" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1029" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1029" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1029" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1029" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1029" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1029" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1029" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1029" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1029" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1029" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1029" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1029" r="7.5" />
              <circle className="st0" cx="1474" cy="1029" r="7.5" />
              <circle className="st0" cx="1494.8" cy="1029" r="7.5" />
              <circle className="st0" cx="1515.5" cy="1029" r="7.5" />
              <circle className="st0" cx="1536.3" cy="1029" r="7.5" />
              <circle className="st0" cx="1557" cy="1029" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1029" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1029" r="7.5" />
              <circle className="st0" cx="1909.6" cy="1029" r="7.5" />
              <circle className="st0" cx="1930.4" cy="1029" r="7.5" />
              <circle className="st0" cx="1951.1" cy="1029" r="7.5" />
              <circle className="st1" cx="2158.5" cy="1029" r="7.5" />
              <circle className="st1" cx="2179.3" cy="1029" r="7.5" />
              <circle className="st1" cx="2200" cy="1029" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1029" r="7.5" />
              <circle className="st1" cx="2241.5" cy="1029" r="7.5" />
              <circle className="st1" cx="2262.2" cy="1029" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1029" r="7.5" />
              <circle className="st0" cx="976.2" cy="1050" r="7.5" />
              <circle className="st1" cx="997" cy="1050" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -300.2365 1683.4481)"
                className="st1"
                cx="1017.7"
                cy="1050"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st1" cx="1038.4" cy="1050" r="7.5" />
              <circle className="st1" cx="1059.2" cy="1050" r="7.5" />
              <circle className="st0" cx="1079.9" cy="1050" r="7.5" />
              <circle className="st0" cx="1100.7" cy="1050" r="7.5" />
              <circle className="st0" cx="1121.4" cy="1050" r="7.5" />
              <circle className="st0" cx="1142.1" cy="1050" r="7.5" />
              <circle className="st0" cx="1162.9" cy="1050" r="7.5" />
              <circle className="st0" cx="1183.6" cy="1050" r="7.5" />
              <circle className="st0" cx="1204.4" cy="1050" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1050" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1050" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1050" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1050" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1050" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1050" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1050" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1050" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1050" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1050" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1050" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1050" r="7.5" />
              <circle className="st0" cx="1474" cy="1050" r="7.5" />
              <circle className="st0" cx="1494.8" cy="1050" r="7.5" />
              <circle className="st0" cx="1515.5" cy="1050" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1050" r="7.5" />
              <circle className="st1" cx="1557" cy="1050" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1050" r="7.5" />
              <circle className="st1" cx="1660.7" cy="1050" r="7.5" />
              <circle className="st0" cx="1930.4" cy="1050" r="7.5" />
              <circle className="st0" cx="1951.1" cy="1050" r="7.5" />
              <circle className="st1" cx="2179.3" cy="1050" r="7.5" />
              <circle className="st1" cx="2200" cy="1050" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1050" r="7.5" />
              <circle className="st1" cx="2241.5" cy="1050" r="7.5" />
              <circle className="st1" cx="2262.2" cy="1050" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1050" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1050" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1050" r="7.5" />
              <circle className="st1" cx="997" cy="1071" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -320.1589 1697.8075)"
                className="st1"
                cx="1017.7"
                cy="1071"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st1" cx="1038.4" cy="1071" r="7.5" />
              <circle className="st1" cx="1059.2" cy="1071" r="7.5" />
              <circle className="st1" cx="1079.9" cy="1071" r="7.5" />
              <circle className="st0" cx="1100.7" cy="1071" r="7.5" />
              <circle className="st0" cx="1121.4" cy="1071" r="7.5" />
              <circle className="st0" cx="1142.1" cy="1071" r="7.5" />
              <circle className="st0" cx="1162.9" cy="1071" r="7.5" />
              <circle className="st1" cx="1183.6" cy="1071" r="7.5" />
              <circle className="st1" cx="1204.4" cy="1071" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1071" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1071" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1071" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1071" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1071" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1071" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1071" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1071" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1071" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1071" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1071" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1071" r="7.5" />
              <circle className="st0" cx="1474" cy="1071" r="7.5" />
              <circle className="st0" cx="1494.8" cy="1071" r="7.5" />
              <circle className="st0" cx="1515.5" cy="1071" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1071" r="7.5" />
              <circle className="st1" cx="1557" cy="1071" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1071" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1071" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1071" r="7.5" />
              <circle className="st1" cx="1640" cy="1071" r="7.5" />
              <circle className="st1" cx="1660.7" cy="1071" r="7.5" />
              <circle className="st0" cx="1930.4" cy="1071" r="7.5" />
              <circle className="st0" cx="1951.1" cy="1071" r="7.5" />
              <circle className="st1" cx="2158.5" cy="1071" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1071" r="7.5" />
              <circle className="st1" cx="2241.5" cy="1071" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1071" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1071" r="7.5" />
              <circle className="st0" cx="997" cy="1092" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -340.0813 1712.167)"
                className="st0"
                cx="1017.7"
                cy="1092"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="1092" r="7.5" />
              <circle className="st1" cx="1059.2" cy="1092" r="7.5" />
              <circle className="st1" cx="1079.9" cy="1092" r="7.5" />
              <circle className="st0" cx="1100.7" cy="1092" r="7.5" />
              <circle className="st0" cx="1121.4" cy="1092" r="7.5" />
              <circle className="st0" cx="1142.1" cy="1092" r="7.5" />
              <circle className="st0" cx="1162.9" cy="1092" r="7.5" />
              <circle className="st1" cx="1183.6" cy="1092" r="7.5" />
              <circle className="st1" cx="1204.4" cy="1092" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1092" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1092" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1092" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1092" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1092" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1092" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1092" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1092" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1092" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1092" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1092" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1092" r="7.5" />
              <circle className="st1" cx="1474" cy="1092" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1092" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1092" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1092" r="7.5" />
              <circle className="st1" cx="1557" cy="1092" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1092" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1092" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1092" r="7.5" />
              <circle className="st1" cx="1640" cy="1092" r="7.5" />
              <circle className="st1" cx="1660.7" cy="1092" r="7.5" />
              <circle className="st0" cx="1930.4" cy="1092" r="7.5" />
              <circle className="st1" cx="1971.9" cy="1092" r="7.5" />
              <circle className="st1" cx="2179.3" cy="1092" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1092" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1092" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1092" r="7.5" />

              <ellipse
                transform="matrix(0.3162 -0.9487 0.9487 0.3162 -360.0038 1726.5262)"
                className="st0"
                cx="1017.7"
                cy="1113"
                rx="7.5"
                ry="7.5"
              />
              <circle className="st0" cx="1038.4" cy="1113" r="7.5" />
              <circle className="st0" cx="1059.2" cy="1113" r="7.5" />
              <circle className="st1" cx="1079.9" cy="1113" r="7.5" />
              <circle className="st0" cx="1100.7" cy="1113" r="7.5" />
              <circle className="st0" cx="1121.4" cy="1113" r="7.5" />
              <circle className="st0" cx="1142.1" cy="1113" r="7.5" />
              <circle className="st0" cx="1162.9" cy="1113" r="7.5" />
              <circle className="st1" cx="1183.6" cy="1113" r="7.5" />
              <circle className="st1" cx="1204.4" cy="1113" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1113" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1113" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1113" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1113" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1113" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1113" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1113" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1113" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1113" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1113" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1113" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1113" r="7.5" />
              <circle className="st1" cx="1474" cy="1113" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1113" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1113" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1113" r="7.5" />
              <circle className="st1" cx="1557" cy="1113" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1113" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1113" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1113" r="7.5" />
              <circle className="st1" cx="1640" cy="1113" r="7.5" />
              <circle className="st1" cx="1971.9" cy="1113" r="7.5" />
              <circle className="st1" cx="2179.3" cy="1113" r="7.5" />
              <circle className="st1" cx="2200" cy="1113" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1113" r="7.5" />
              <circle className="st1" cx="2366" cy="1113" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1113" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1113" r="7.5" />
              <circle className="st0" cx="1038.4" cy="1134" r="7.5" />
              <circle className="st0" cx="1059.2" cy="1134" r="7.5" />
              <circle className="st0" cx="1079.9" cy="1134" r="7.5" />
              <circle className="st0" cx="1100.7" cy="1134" r="7.5" />
              <circle className="st0" cx="1121.4" cy="1134" r="7.5" />
              <circle className="st0" cx="1142.1" cy="1134" r="7.5" />
              <circle className="st0" cx="1162.9" cy="1134" r="7.5" />
              <circle className="st1" cx="1183.6" cy="1134" r="7.5" />
              <circle className="st1" cx="1204.4" cy="1134" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1134" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1134" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1134" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1134" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1134" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1134" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1134" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1134" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1134" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1134" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1134" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1134" r="7.5" />
              <circle className="st1" cx="1474" cy="1134" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1134" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1134" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1134" r="7.5" />
              <circle className="st1" cx="1557" cy="1134" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1134" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1134" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1134" r="7.5" />
              <circle className="st1" cx="1640" cy="1134" r="7.5" />
              <circle className="st1" cx="2137.8" cy="1134" r="7.5" />
              <circle className="st1" cx="2158.5" cy="1134" r="7.5" />
              <circle className="st1" cx="2200" cy="1134" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1134" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1134" r="7.5" />
              <circle className="st1" cx="2366" cy="1134" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1155" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1155" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1155" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1155" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1155" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1155" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1155" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1155" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1155" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1155" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1155" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1155" r="7.5" />
              <circle className="st1" cx="1474" cy="1155" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1155" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1155" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1155" r="7.5" />
              <circle className="st1" cx="1557" cy="1155" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1155" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1155" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1155" r="7.5" />
              <circle className="st1" cx="2158.5" cy="1155" r="7.5" />
              <circle className="st1" cx="2200" cy="1155" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1155" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1155" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1155" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1155" r="7.5" />
              <circle className="st1" cx="2366" cy="1155" r="7.5" />
              <circle className="st0" cx="1225.1" cy="1176" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1176" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1176" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1176" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1176" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1176" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1176" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1176" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1176" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1176" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1176" r="7.5" />
              <circle className="st0" cx="1453.3" cy="1176" r="7.5" />
              <circle className="st1" cx="1474" cy="1176" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1176" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1176" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1176" r="7.5" />
              <circle className="st1" cx="1557" cy="1176" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1176" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1176" r="7.5" />
              <circle className="st1" cx="2158.5" cy="1176" r="7.5" />
              <circle className="st1" cx="2179.3" cy="1176" r="7.5" />
              <circle className="st1" cx="2200" cy="1176" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1176" r="7.5" />
              <circle className="st1" cx="2283" cy="1176" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1176" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1176" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1176" r="7.5" />
              <circle className="st1" cx="2366" cy="1176" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1176" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1176" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1176" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1176" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1197" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1197" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1197" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1197" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1197" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1197" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1197" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1197" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1197" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1197" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1197" r="7.5" />
              <circle className="st1" cx="1474" cy="1197" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1197" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1197" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1197" r="7.5" />
              <circle className="st1" cx="1557" cy="1197" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1197" r="7.5" />
              <circle className="st1" cx="2179.3" cy="1197" r="7.5" />
              <circle className="st1" cx="1903.8" cy="1197" r="7.5" />
              <circle className="st1" cx="2200" cy="1197" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1197" r="7.5" />
              <circle className="st1" cx="2283" cy="1197" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1197" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1197" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1197" r="7.5" />
              <circle className="st1" cx="2366" cy="1197" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1197" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1197" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1197" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1197" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1197" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1197" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1218" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1218" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1218" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1218" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1218" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1218" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1218" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1218" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1218" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1218" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1218" r="7.5" />
              <circle className="st1" cx="1474" cy="1218" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1218" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1218" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1218" r="7.5" />
              <circle className="st1" cx="1557" cy="1218" r="7.5" />
              <circle className="st1" cx="2200" cy="1218" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1218" r="7.5" />
              <circle className="st1" cx="2283" cy="1218" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1218" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1218" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1218" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1218" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1218" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1218" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1218" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1218" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1218" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1218" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1218" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1218" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1218" r="7.5" />
              <circle className="st0" cx="1245.9" cy="1239" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1239" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1239" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1239" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1239" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1239" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1239" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1239" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1239" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1239" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1239" r="7.5" />
              <circle className="st1" cx="1474" cy="1239" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1239" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1239" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1239" r="7.5" />
              <circle className="st1" cx="2200" cy="1239" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1239" r="7.5" />
              <circle className="st1" cx="2241.5" cy="1239" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1239" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1239" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1239" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1239" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1239" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1239" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1239" r="7.5" />
              <circle className="st0" cx="2614.9" cy="1239" r="7.5" />
              <circle className="st0" cx="2635.6" cy="1239" r="7.5" />
              <circle className="st0" cx="2718.6" cy="1239" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1260" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1260" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1260" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1260" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1260" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1260" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1260" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1260" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1260" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1260" r="7.5" />
              <circle className="st1" cx="1474" cy="1260" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1260" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1260" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1260" r="7.5" />
              <circle className="st1" cx="2220.8" cy="1260" r="7.5" />
              <circle className="st1" cx="2241.5" cy="1260" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1260" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1260" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1260" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1260" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1260" r="7.5" />
              <circle className="st0" cx="2614.9" cy="1260" r="7.5" />
              <circle className="st0" cx="2635.6" cy="1260" r="7.5" />
              <circle className="st0" cx="2656.4" cy="1260" r="7.5" />
              <circle className="st0" cx="2677.1" cy="1260" r="7.5" />
              <circle className="st0" cx="2697.9" cy="1260" r="7.5" />
              <circle className="st0" cx="2718.6" cy="1260" r="7.5" />
              <circle className="st0" cx="2739.3" cy="1260" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1281" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1281" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1281" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1281" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1281" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1281" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1281" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1281" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1281" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1281" r="7.5" />
              <circle className="st1" cx="1474" cy="1281" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1281" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1281" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1281" r="7.5" />
              <circle className="st1" cx="2241.5" cy="1281" r="7.5" />
              <circle className="st1" cx="2262.2" cy="1281" r="7.5" />
              <circle className="st1" cx="2283" cy="1281" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1281" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1281" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1281" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1281" r="7.5" />
              <circle className="st0" cx="2614.9" cy="1281" r="7.5" />
              <circle className="st0" cx="2635.6" cy="1281" r="7.5" />
              <circle className="st0" cx="2656.4" cy="1281" r="7.5" />
              <circle className="st0" cx="2677.1" cy="1281" r="7.5" />
              <circle className="st0" cx="2697.9" cy="1281" r="7.5" />
              <circle className="st0" cx="2718.6" cy="1281" r="7.5" />
              <circle className="st0" cx="2739.3" cy="1281" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1302" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1302" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1302" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1302" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1302" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1302" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1302" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1302" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1302" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1302" r="7.5" />
              <circle className="st1" cx="1474" cy="1302" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1302" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1302" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1302" r="7.5" />
              <circle className="st1" cx="2366" cy="1302" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1302" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1302" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1302" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1302" r="7.5" />
              <circle className="st0" cx="2614.9" cy="1302" r="7.5" />
              <circle className="st0" cx="2677.1" cy="1302" r="7.5" />
              <circle className="st0" cx="2697.9" cy="1302" r="7.5" />
              <circle className="st0" cx="2718.6" cy="1302" r="7.5" />
              <circle className="st0" cx="2739.3" cy="1302" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1323" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1323" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1323" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1323" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1323" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1323" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1323" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1323" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1323" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1323" r="7.5" />
              <circle className="st1" cx="1474" cy="1323" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1323" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1323" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1323" r="7.5" />
              <circle className="st1" cx="1557" cy="1323" r="7.5" />
              <circle className="st0" cx="2697.9" cy="1323" r="7.5" />
              <circle className="st0" cx="2718.6" cy="1323" r="7.5" />
              <circle className="st0" cx="2739.3" cy="1323" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1344" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1344" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1344" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1344" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1344" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1344" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1344" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1344" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1344" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1344" r="7.5" />
              <circle className="st1" cx="1474" cy="1344" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1344" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1344" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1344" r="7.5" />
              <circle className="st1" cx="1557" cy="1344" r="7.5" />
              <circle className="st1" cx="1640" cy="1344" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1344" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1344" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1344" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1344" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1344" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1344" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1365" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1365" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1365" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1365" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1365" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1365" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1365" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1365" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1365" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1365" r="7.5" />
              <circle className="st1" cx="1474" cy="1365" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1365" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1365" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1365" r="7.5" />
              <circle className="st1" cx="1557" cy="1365" r="7.5" />
              <circle className="st1" cx="1640" cy="1365" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1365" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1365" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1365" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1365" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1365" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1365" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1365" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1386" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1386" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1386" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1386" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1386" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1386" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1386" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1386" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1386" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1386" r="7.5" />
              <circle className="st1" cx="1474" cy="1386" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1386" r="7.5" />
              <circle className="st1" cx="1515.5" cy="1386" r="7.5" />
              <circle className="st1" cx="1536.3" cy="1386" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1386" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1386" r="7.5" />
              <circle className="st1" cx="1640" cy="1386" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1386" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1386" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1386" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1386" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1386" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1386" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1386" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1386" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1386" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1386" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1386" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1407" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1407" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1407" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1407" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1407" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1407" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1407" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1407" r="7.5" />
              <circle className="st0" cx="1432.6" cy="1407" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1407" r="7.5" />
              <circle className="st1" cx="1474" cy="1407" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1407" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1407" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1407" r="7.5" />
              <circle className="st1" cx="1640" cy="1407" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1407" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1407" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1407" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1407" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1407" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1407" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1407" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1407" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1407" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1407" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1407" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1407" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1407" r="7.5" />
              <circle className="st0" cx="1266.6" cy="1428" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1428" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1428" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1428" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1428" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1428" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1428" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1428" r="7.5" />
              <circle className="st1" cx="1432.6" cy="1428" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1428" r="7.5" />
              <circle className="st1" cx="1474" cy="1428" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1428" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1428" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1428" r="7.5" />
              <circle className="st1" cx="1640" cy="1428" r="7.5" />
              <circle className="st1" cx="2366" cy="1428" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1428" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1428" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1428" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1428" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1428" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1428" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1428" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1428" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1428" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1428" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1428" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1428" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1428" r="7.5" />
              <circle className="st1" cx="2656.4" cy="1428" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1449" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1449" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1449" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1449" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1449" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1449" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1449" r="7.5" />
              <circle className="st1" cx="1432.6" cy="1449" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1449" r="7.5" />
              <circle className="st1" cx="1474" cy="1449" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1449" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1449" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1449" r="7.5" />
              <circle className="st1" cx="1774.8" cy="1449" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1449" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1449" r="7.5" />
              <circle className="st1" cx="2366" cy="1449" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1449" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1449" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1449" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1449" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1449" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1449" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1449" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1449" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1449" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1449" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1449" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1449" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1449" r="7.5" />
              <circle className="st1" cx="2656.4" cy="1449" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1470" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1470" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1470" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1470" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1470" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1470" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1470" r="7.5" />
              <circle className="st1" cx="1432.6" cy="1470" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1470" r="7.5" />
              <circle className="st1" cx="1474" cy="1470" r="7.5" />
              <circle className="st1" cx="1494.8" cy="1470" r="7.5" />
              <circle className="st1" cx="1577.8" cy="1470" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1470" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1470" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1470" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1470" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1470" r="7.5" />
              <circle className="st1" cx="2366" cy="1470" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1470" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1470" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1470" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1470" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1470" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1470" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1470" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1470" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1470" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1470" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1470" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1470" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1470" r="7.5" />
              <circle className="st1" cx="2656.4" cy="1470" r="7.5" />
              <circle className="st1" cx="2677.1" cy="1470" r="7.5" />
              <circle className="st0" cx="1287.3" cy="1491" r="7.5" />
              <circle className="st0" cx="1308.1" cy="1491" r="7.5" />
              <circle className="st0" cx="1328.8" cy="1491" r="7.5" />
              <circle className="st0" cx="1349.6" cy="1491" r="7.5" />
              <circle className="st0" cx="1370.3" cy="1491" r="7.5" />
              <circle className="st0" cx="1391.1" cy="1491" r="7.5" />
              <circle className="st0" cx="1411.8" cy="1491" r="7.5" />
              <circle className="st1" cx="1432.6" cy="1491" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1491" r="7.5" />
              <circle className="st1" cx="1474" cy="1491" r="7.5" />
              <circle className="st1" cx="1598.5" cy="1491" r="7.5" />
              <circle className="st1" cx="1619.2" cy="1491" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1491" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1491" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1491" r="7.5" />
              <circle className="st1" cx="2366" cy="1491" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1491" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1491" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1491" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1491" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1491" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1491" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1491" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1491" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1491" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1491" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1491" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1491" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1491" r="7.5" />
              <circle className="st1" cx="2656.4" cy="1491" r="7.5" />
              <circle className="st1" cx="2677.1" cy="1491" r="7.5" />
              <circle className="st1" cx="1287.3" cy="1512" r="7.5" />
              <circle className="st1" cx="1308.1" cy="1512" r="7.5" />
              <circle className="st1" cx="1328.8" cy="1512" r="7.5" />
              <circle className="st1" cx="1349.6" cy="1512" r="7.5" />
              <circle className="st1" cx="1370.3" cy="1512" r="7.5" />
              <circle className="st1" cx="1391.1" cy="1512" r="7.5" />
              <circle className="st1" cx="1411.8" cy="1512" r="7.5" />
              <circle className="st1" cx="1432.6" cy="1512" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1512" r="7.5" />
              <circle className="st1" cx="1474" cy="1512" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1512" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1512" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1512" r="7.5" />
              <circle className="st1" cx="2366" cy="1512" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1512" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1512" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1512" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1512" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1512" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1512" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1512" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1512" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1512" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1512" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1512" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1512" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1512" r="7.5" />
              <circle className="st1" cx="2656.4" cy="1512" r="7.5" />
              <circle className="st1" cx="2677.1" cy="1512" r="7.5" />
              <circle className="st1" cx="1308.1" cy="1533" r="7.5" />
              <circle className="st1" cx="1328.8" cy="1533" r="7.5" />
              <circle className="st1" cx="1349.6" cy="1533" r="7.5" />
              <circle className="st1" cx="1370.3" cy="1533" r="7.5" />
              <circle className="st1" cx="1391.1" cy="1533" r="7.5" />
              <circle className="st1" cx="1411.8" cy="1533" r="7.5" />
              <circle className="st1" cx="1432.6" cy="1533" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1533" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1533" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1533" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1533" r="7.5" />
              <circle className="st1" cx="2366" cy="1533" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1533" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1533" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1533" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1533" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1533" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1533" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1533" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1533" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1533" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1533" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1533" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1533" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1533" r="7.5" />
              <circle className="st1" cx="2656.4" cy="1533" r="7.5" />
              <circle className="st1" cx="2677.1" cy="1533" r="7.5" />
              <circle className="st1" cx="1308.1" cy="1554" r="7.5" />
              <circle className="st1" cx="1328.8" cy="1554" r="7.5" />
              <circle className="st1" cx="1349.6" cy="1554" r="7.5" />
              <circle className="st1" cx="1370.3" cy="1554" r="7.5" />
              <circle className="st1" cx="1391.1" cy="1554" r="7.5" />
              <circle className="st1" cx="1411.8" cy="1554" r="7.5" />
              <circle className="st1" cx="1432.6" cy="1554" r="7.5" />
              <circle className="st1" cx="1453.3" cy="1554" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1554" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1554" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1554" r="7.5" />
              <circle className="st1" cx="2366" cy="1554" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1554" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1554" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1554" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1554" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1554" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1554" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1554" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1554" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1554" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1554" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1554" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1554" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1554" r="7.5" />
              <circle className="st1" cx="2656.4" cy="1554" r="7.5" />
              <circle className="st1" cx="2677.1" cy="1554" r="7.5" />
              <circle className="st1" cx="1328.8" cy="1575" r="7.5" />
              <circle className="st1" cx="1349.6" cy="1575" r="7.5" />
              <circle className="st1" cx="1370.3" cy="1575" r="7.5" />
              <circle className="st1" cx="1391.1" cy="1575" r="7.5" />
              <circle className="st1" cx="1411.8" cy="1575" r="7.5" />
              <circle className="st1" cx="1432.6" cy="1575" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1575" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1575" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1575" r="7.5" />
              <circle className="st1" cx="2366" cy="1575" r="7.5" />
              <circle className="st1" cx="2386.7" cy="1575" r="7.5" />
              <circle className="st1" cx="2407.4" cy="1575" r="7.5" />
              <circle className="st1" cx="2428.2" cy="1575" r="7.5" />
              <circle className="st1" cx="2448.9" cy="1575" r="7.5" />
              <circle className="st1" cx="2469.7" cy="1575" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1575" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1575" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1575" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1575" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1575" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1575" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1575" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1575" r="7.5" />
              <circle className="st1" cx="2656.4" cy="1575" r="7.5" />
              <circle className="st1" cx="1328.8" cy="1596" r="7.5" />
              <circle className="st1" cx="1349.6" cy="1596" r="7.5" />
              <circle className="st1" cx="1370.3" cy="1596" r="7.5" />
              <circle className="st1" cx="1391.1" cy="1596" r="7.5" />
              <circle className="st1" cx="2283" cy="1596" r="7.5" />
              <circle className="st1" cx="2303.7" cy="1596" r="7.5" />
              <circle className="st1" cx="2324.5" cy="1596" r="7.5" />
              <circle className="st1" cx="2345.2" cy="1596" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1596" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1596" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1596" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1596" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1596" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1596" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1596" r="7.5" />
              <circle className="st1" cx="2635.6" cy="1596" r="7.5" />
              <circle className="st1" cx="2490.4" cy="1617" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1617" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1617" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1617" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1617" r="7.5" />
              <circle className="st1" cx="2594.1" cy="1617" r="7.5" />
              <circle className="st1" cx="2614.9" cy="1617" r="7.5" />
              <circle className="st1" cx="2843.1" cy="1617" r="7.5" />
              <circle className="st1" cx="2863.8" cy="1617" r="7.5" />
              <circle className="st1" cx="2511.2" cy="1638" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1638" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1638" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1638" r="7.5" />
              <circle className="st1" cx="2843.1" cy="1638" r="7.5" />
              <circle className="st1" cx="2863.8" cy="1638" r="7.5" />
              <circle className="st1" cx="2822.3" cy="1659" r="7.5" />
              <circle className="st1" cx="2843.1" cy="1659" r="7.5" />
              <circle className="st1" cx="2863.8" cy="1659" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1680" r="7.5" />
              <circle className="st1" cx="2573.4" cy="1680" r="7.5" />
              <circle className="st1" cx="2780.8" cy="1680" r="7.5" />
              <circle className="st1" cx="2801.6" cy="1680" r="7.5" />
              <circle className="st1" cx="2822.3" cy="1680" r="7.5" />
              <circle className="st1" cx="2531.9" cy="1701" r="7.5" />
              <circle className="st1" cx="2552.7" cy="1701" r="7.5" />
              <circle className="st1" cx="2739.3" cy="1701" r="7.5" />
              <circle className="st1" cx="2760.1" cy="1701" r="7.5" />
              <circle className="st1" cx="2780.8" cy="1701" r="7.5" />
              <circle className="st1" cx="2801.6" cy="1701" r="7.5" />
              <circle className="st1" cx="2718.6" cy="1722" r="7.5" />
              <circle className="st1" cx="2739.3" cy="1722" r="7.5" />
              <circle className="st1" cx="2760.1" cy="1722" r="7.5" />
              <circle className="st1" cx="2697.9" cy="1743" r="7.5" />
              <circle className="st1" cx="2718.6" cy="1743" r="7.5" />
            </g>
            <motion.g
              id="turkiye"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1519.2,662.9H1411c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2c6.9,0,12.5,5.6,12.5,12.5
			l0,0C1531.7,657.3,1526.1,662.9,1519.2,662.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1442.7,643.8v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1442.7z"
                  />
                  <path
                    className="st4"
                    d="M1451.1,654.2c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1452.3,652.6,1451.9,653.5,1451.1,654.2z"
                  />
                  <path
                    className="st4"
                    d="M1460.1,655l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-0.9,1-1.5,1.4l2.4,4.1H1460.1z M1456.7,646.2v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4
				c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L1456.7,646.2L1456.7,646.2z"
                  />
                  <path
                    className="st4"
                    d="M1473.1,655h-2.9l-3.6-5.2v5.2h-2.6v-11.2h2.6v4.9l3.4-4.9h2.9l-3.8,5.5L1473.1,655z"
                  />
                  <path className="st4" d="M1474,643.8h2.6V655h-2.6V643.8z" />
                  <path
                    className="st4"
                    d="M1487.6,643.8l-3.8,6.9v4.3h-2.6v-4.3l-3.8-6.9h2.9l2.1,4.3l2.1-4.3H1487.6z"
                  />
                  <path
                    className="st4"
                    d="M1491.2,652.5h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1491.2,652.5L1491.2,652.5z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1465.1,666.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1479.1,666.8,1465.1,666.8z
				 M1476.8,703.8c-17,13-36.3-6.3-23.3-23.3l0,0C1470.5,667.5,1489.8,686.8,1476.8,703.8L1476.8,703.8z"
                  />
                </g>
                <circle className="st6" cx="1465.1" cy="692.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="guinea"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1092.5,990.4H984.4c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2c6.9,0,12.5,5.6,12.5,12.5
			l0,0C1105,984.8,1099.4,990.4,1092.5,990.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1021.7,976.3v1c0,1.7-0.5,3-1.6,4c-1,1-2.4,1.5-4,1.5c-1.7,0-3.2-0.6-4.3-1.7c-1.1-1.1-1.7-2.5-1.7-4.1
				s0.6-3,1.7-4.1c1.1-1.1,2.5-1.7,4.2-1.7c1,0,2,0.2,2.9,0.7s1.5,1.1,2,1.9l-2.2,1.2c-0.2-0.4-0.6-0.7-1.1-0.9s-1-0.4-1.6-0.4
				c-0.9,0-1.7,0.3-2.4,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,1,2.4c0.6,0.6,1.5,0.9,2.6,0.9c1.5,0,2.4-0.6,2.9-1.7h-3v-2.2h5.5
				V976.3z"
                  />
                  <path
                    className="st4"
                    d="M1030.4,981.7c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1031.7,980.1,1031.3,981,1030.4,981.7z"
                  />
                  <path
                    className="st4"
                    d="M1033.5,971.3h2.6v11.2h-2.6V971.3z"
                  />
                  <path
                    className="st4"
                    d="M1044.2,971.3h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V971.3z"
                  />
                  <path
                    className="st4"
                    d="M1051.3,980h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1051.3,980L1051.3,980z"
                  />
                  <path
                    className="st4"
                    d="M1064.6,982.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1064.6z M1060.5,978.3h2.7l-1.4-4.1
				L1060.5,978.3z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1038.4,994.3c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1052.4,994.3,1038.4,994.3z
				 M1050.1,1031.3c-17,13-36.3-6.3-23.3-23.3l0,0C1043.8,995,1063.1,1014.3,1050.1,1031.3L1050.1,1031.3z"
                  />
                </g>
                <circle className="st6" cx="1038.4" cy="1020" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="ghana"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1251,1027.4h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5H1251c6.9,0,12.5,5.6,12.5,12.5
			l0,0C1263.5,1021.8,1257.9,1027.4,1251,1027.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1181.1,1013.3v1c0,1.7-0.5,3-1.6,4c-1,1-2.4,1.5-4,1.5c-1.7,0-3.2-0.6-4.3-1.7c-1.1-1.1-1.7-2.5-1.7-4.1
				s0.6-3,1.7-4.1s2.5-1.7,4.2-1.7c1,0,2,0.2,2.9,0.7s1.5,1.1,2,1.9l-2.2,1.2c-0.2-0.4-0.6-0.7-1.1-0.9s-1-0.4-1.6-0.4
				c-0.9,0-1.7,0.3-2.4,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,1,2.4c0.6,0.6,1.5,0.9,2.6,0.9c1.5,0,2.4-0.6,2.9-1.7h-3v-2.2h5.5
				V1013.3z"
                  />
                  <path
                    className="st4"
                    d="M1188.7,1008.3h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V1008.3z"
                  />
                  <path
                    className="st4"
                    d="M1200.4,1019.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1200.4z M1196.3,1015.3h2.7l-1.4-4.1
				L1196.3,1015.3z"
                  />
                  <path
                    className="st4"
                    d="M1210.3,1008.3h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1008.3z"
                  />
                  <path
                    className="st4"
                    d="M1222,1019.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1222z M1217.9,1015.3h2.7l-1.4-4.1
				L1217.9,1015.3z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1196.9,1031.3c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1210.9,1031.3,1196.9,1031.3z
				 M1208.5,1068.3c-17,13-36.3-6.3-23.3-23.3l0,0C1202.3,1032,1221.5,1051.3,1208.5,1068.3L1208.5,1068.3z"
                  />
                </g>
                <circle className="st6" cx="1196.9" cy="1057" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="south-africa"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1416.9,1502.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1429.4,1497.3,1423.8,1502.9,1416.9,1502.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1312,1495.2c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C1314.2,1494.9,1313.2,1495.2,1312,1495.2z"
                  />
                  <path
                    className="st4"
                    d="M1326.8,1493.5c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7
				s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S1327.9,1492.4,1326.8,1493.5z M1320.3,1491.8c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9
				c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4s-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9s-0.9,1.4-0.9,2.4S1319.7,1491.2,1320.3,1491.8z"
                  />
                  <path
                    className="st4"
                    d="M1337.2,1494.2c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1338.4,1492.6,1338,1493.5,1337.2,1494.2z"
                  />
                  <path
                    className="st4"
                    d="M1347.8,1483.8v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1347.8z"
                  />
                  <path
                    className="st4"
                    d="M1355,1483.8h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V1483.8z"
                  />
                  <path
                    className="st4"
                    d="M1370.8,1495l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1370.8z M1366.6,1490.8h2.7l-1.4-4.1
				L1366.6,1490.8z"
                  />
                  <path
                    className="st4"
                    d="M1381.1,1486.3h-4.2v2.2h4.2v2.5h-4.2v4.1h-2.6v-11.2h6.8L1381.1,1486.3L1381.1,1486.3z"
                  />
                  <path
                    className="st4"
                    d="M1388.5,1495l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1s1.1,1.7,1.1,2.7c0,0.7-0.2,1.3-0.6,1.9
				s-0.9,1-1.5,1.4l2.4,4.1H1388.5z M1385.2,1486.2v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1
				s-0.6-0.4-0.9-0.4L1385.2,1486.2L1385.2,1486.2z"
                  />
                  <path
                    className="st4"
                    d="M1392.5,1483.8h2.6v11.2h-2.6V1483.8z"
                  />
                  <path
                    className="st4"
                    d="M1402.3,1495.2c-1.7,0-3.1-0.6-4.2-1.7s-1.7-2.5-1.7-4.2s0.6-3,1.7-4.2c1.1-1.1,2.5-1.7,4.2-1.7
				c1,0,1.9,0.2,2.8,0.7s1.5,1.1,2,1.9l-2.2,1.3c-0.2-0.4-0.6-0.8-1.1-1s-1-0.4-1.5-0.4c-1,0-1.8,0.3-2.4,0.9s-0.9,1.4-0.9,2.4
				s0.3,1.8,0.9,2.4s1.4,0.9,2.4,0.9c0.6,0,1.1-0.1,1.5-0.4c0.5-0.2,0.8-0.6,1-1l2.2,1.3c-0.5,0.8-1.1,1.4-2,1.9
				C1404.3,1495,1403.3,1495.2,1402.3,1495.2z"
                  />
                  <path
                    className="st4"
                    d="M1415.6,1495l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1415.6z M1411.5,1490.8h2.7l-1.4-4.1
				L1411.5,1490.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1362.8,1506.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1376.8,1506.8,1362.8,1506.8z
				 M1374.5,1543.8c-17,13-36.3-6.3-23.3-23.3l0,0C1368.2,1507.5,1387.5,1526.8,1374.5,1543.8L1374.5,1543.8z"
                  />
                </g>
                <circle className="st6" cx="1362.8" cy="1532.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="mauritius"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1828.9,1373.2h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1841.4,1367.6,1835.8,1373.2,1828.9,1373.2z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1746.1,1354.1v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1746.1z"
                  />
                  <path
                    className="st4"
                    d="M1755.4,1365.3l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1755.4z M1751.2,1361.2h2.7l-1.4-4.1
				L1751.2,1361.2z"
                  />
                  <path
                    className="st4"
                    d="M1766,1364.5c-0.8,0.7-1.8,1-3.1,1s-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1767.2,1362.9,1766.8,1363.8,1766,1364.5z"
                  />
                  <path
                    className="st4"
                    d="M1774.9,1365.3l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1s1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9s-0.9,1-1.5,1.4l2.4,4.1H1774.9z M1771.6,1356.5v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4c0.2-0.3,0.4-0.6,0.4-1
				s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L1771.6,1356.5L1771.6,1356.5z"
                  />
                  <path
                    className="st4"
                    d="M1778.9,1354.1h2.6v11.2h-2.6V1354.1z"
                  />
                  <path
                    className="st4"
                    d="M1790.9,1354.1v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1790.9z"
                  />
                  <path
                    className="st4"
                    d="M1792,1354.1h2.6v11.2h-2.6V1354.1z"
                  />
                  <path
                    className="st4"
                    d="M1803.8,1364.5c-0.8,0.7-1.8,1-3.1,1s-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1805,1362.9,1804.6,1363.8,1803.8,1364.5z"
                  />
                  <path
                    className="st4"
                    d="M1810.8,1365.5c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4s-0.7-0.4-1-0.6s-0.6-0.6-0.8-1s-0.3-0.8-0.3-1.4
				c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3c-0.2-0.4-0.5-0.7-0.8-1
				s-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7s0.8,0.4,1.6,0.7
				c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9c0.2,0.4,0.2,0.8,0.2,1.2
				c0,1.1-0.4,1.9-1.2,2.5C1813,1365.2,1812,1365.5,1810.8,1365.5z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1774.8,1377.2c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1788.8,1377.2,1774.8,1377.2z
				 M1786.4,1414.2c-17,13-36.3-6.3-23.3-23.3l0,0C1780.2,1377.8,1799.4,1397.1,1786.4,1414.2
				C1786.5,1414.1,1786.4,1414.2,1786.4,1414.2z"
                  />
                </g>
                <circle className="st6" cx="1774.8" cy="1402.8" r="15.6" />
              </g>
            </motion.g>

            <motion.g
              id="iraq"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1642,710.5h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5H1642c6.9,0,12.5,5.6,12.5,12.5
			l0,0C1654.5,704.9,1648.9,710.5,1642,710.5z"
                />
                <g className="st3">
                  <path className="st4" d="M1570,691.5h2.6v11.2h-2.6V691.5z" />
                  <path
                    className="st4"
                    d="M1580.3,702.7l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-0.9,1-1.5,1.4l2.4,4.1H1580.3z M1577,693.9v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4
				c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L1577,693.9L1577,693.9z"
                  />
                  <path
                    className="st4"
                    d="M1591.6,702.7l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1591.6z M1587.4,698.5h2.7l-1.4-4.1
				L1587.4,698.5z"
                  />
                  <path
                    className="st4"
                    d="M1605.9,697.1c0,1.4-0.4,2.6-1.3,3.7l1.1,1.2l-1.8,1.6l-1.2-1.3c-0.8,0.4-1.7,0.6-2.6,0.6
				c-1.6,0-3-0.6-4.1-1.7c-1.1-1.1-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7s3,0.6,4.1,1.7
				C1605.4,694,1605.9,695.4,1605.9,697.1z M1600.1,700.4c0.2,0,0.5,0,0.8-0.1l-1.6-1.7l1.8-1.6l1.8,1.9c0.3-0.6,0.5-1.2,0.5-1.8
				c0-1-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,0.9,2.4
				C1598.4,700.1,1599.2,700.4,1600.1,700.4z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1587.9,714.5c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1601.9,714.5,1587.9,714.5z
				 M1599.6,751.5c-17,13-36.3-6.3-23.3-23.3l0,0C1593.3,715.2,1612.6,734.4,1599.6,751.5L1599.6,751.5z"
                  />
                </g>
                <circle className="st6" cx="1587.9" cy="740.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="kuwait"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1656.7,776.5h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1669.2,770.9,1663.6,776.5,1656.7,776.5z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1582.4,768.7h-2.9l-3.6-5.2v5.2h-2.6v-11.2h2.6v4.9l3.4-4.9h2.9l-3.8,5.5L1582.4,768.7z"
                  />
                  <path
                    className="st4"
                    d="M1590.2,767.8c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1591.4,766.2,1591,767.1,1590.2,767.8z"
                  />
                  <path
                    className="st4"
                    d="M1595.6,768.7l-3.1-11.2h2.7l1.9,7.8l2.2-7.8h2.1l2.2,7.8l1.9-7.8h2.7l-3.1,11.2h-2.9l-1.8-6.6l-1.8,6.6
				H1595.6z"
                  />
                  <path
                    className="st4"
                    d="M1615.9,768.7l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1615.9z M1611.8,764.5h2.7l-1.4-4.1
				L1611.8,764.5z"
                  />
                  <path
                    className="st4"
                    d="M1619.5,757.5h2.6v11.2h-2.6V757.5z"
                  />
                  <path
                    className="st4"
                    d="M1631.5,757.5v2.5h-2.9v8.7h-2.6V760h-2.9v-2.5H1631.5z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1602.6,780.5c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1616.6,780.5,1602.6,780.5z
				 M1614.2,817.5c-17,13-36.3-6.3-23.3-23.3l0,0C1608,781.2,1627.2,800.4,1614.2,817.5L1614.2,817.5z"
                  />
                </g>
                <circle className="st6" cx="1602.6" cy="806.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="bahrain"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1694.1,824h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2c6.9,0,12.5,5.6,12.5,12.5
			l0,0C1706.6,818.4,1701,824,1694.1,824z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1614.4,810.3c0.9,0.6,1.4,1.4,1.4,2.5c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.6,0.9-2.6,0.9h-4.7v-11.2h4.4
				c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.4,1,2.3C1615.4,809,1615,809.8,1614.4,810.3z M1611.8,807.3h-1.8v2h1.8c0.3,0,0.5-0.1,0.7-0.3
				s0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7C1612.4,807.4,1612.1,807.3,1611.8,807.3z M1612.2,813.7c0.3,0,0.6-0.1,0.8-0.3
				c0.2-0.2,0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8s-0.4-0.3-0.8-0.3h-2.1v2.1L1612.2,813.7L1612.2,813.7z"
                  />
                  <path
                    className="st4"
                    d="M1624.4,816.1l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1624.4z M1620.2,812h2.7l-1.4-4.1
				L1620.2,812z"
                  />
                  <path
                    className="st4"
                    d="M1634,804.9h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V804.9z"
                  />
                  <path
                    className="st4"
                    d="M1644.4,816.1l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-0.9,1-1.5,1.4l2.4,4.1H1644.4z M1641,807.3v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4
				c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L1641,807.3L1641,807.3z"
                  />
                  <path
                    className="st4"
                    d="M1655.6,816.1l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1655.6z M1651.5,812h2.7l-1.4-4.1
				L1651.5,812z"
                  />
                  <path
                    className="st4"
                    d="M1659.2,804.9h2.6v11.2h-2.6V804.9z"
                  />
                  <path
                    className="st4"
                    d="M1669.9,804.9h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V804.9z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1640,828c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1653.9,828,1640,828z M1651.6,865
				c-17,13-36.3-6.3-23.3-23.3l0,0C1645.3,828.6,1664.6,847.9,1651.6,865L1651.6,865z"
                  />
                </g>
                <circle className="st6" cx="1640" cy="853.6" r="15.6" />
              </g>
            </motion.g>

            <motion.g
              id="qatar"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1701.6,875.8h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1714.1,870.2,1708.5,875.8,1701.6,875.8z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1633.1,862.3c0,1.4-0.4,2.6-1.3,3.7l1.1,1.2l-1.8,1.6l-1.2-1.3c-0.8,0.4-1.7,0.6-2.6,0.6
				c-1.6,0-3-0.6-4.1-1.7c-1.1-1.1-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7s3,0.6,4.1,1.7
				C1632.6,859.3,1633.1,860.7,1633.1,862.3z M1627.3,865.7c0.2,0,0.5,0,0.8-0.1l-1.6-1.7l1.8-1.6l1.8,1.9c0.3-0.6,0.5-1.2,0.5-1.8
				c0-1-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,0.9,2.4
				C1625.6,865.3,1626.4,865.7,1627.3,865.7z"
                  />
                  <path
                    className="st4"
                    d="M1641.6,867.9l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1641.6z M1637.4,863.8h2.7l-1.4-4.1
				L1637.4,863.8z"
                  />
                  <path
                    className="st4"
                    d="M1651.9,856.7v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1651.9z"
                  />
                  <path
                    className="st4"
                    d="M1659.5,867.9l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1659.5z M1655.3,863.8h2.7l-1.4-4.1
				L1655.3,863.8z"
                  />
                  <path
                    className="st4"
                    d="M1668.9,867.9l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-0.9,1-1.5,1.4l2.4,4.1H1668.9z M1665.6,859.1v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4
				c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L1665.6,859.1L1665.6,859.1z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1647.5,879.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1661.4,879.8,1647.5,879.8z
				 M1659.1,916.8c-17,13-36.3-6.3-23.3-23.3l0,0C1652.8,880.4,1672.1,899.7,1659.1,916.8L1659.1,916.8z"
                  />
                </g>
                <circle className="st6" cx="1647.5" cy="905.4" r="15.6" />
              </g>
            </motion.g>

            <motion.g
              id="saudi-arabia"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1625.7,893.1h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1638.2,887.5,1632.6,893.1,1625.7,893.1z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1522.9,885.5c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C1525.2,885.2,1524.2,885.5,1522.9,885.5z"
                  />
                  <path
                    className="st4"
                    d="M1535.5,885.3l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1535.5z M1531.4,881.1h2.7l-1.4-4.1
				L1531.4,881.1z"
                  />
                  <path
                    className="st4"
                    d="M1546.1,884.5c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1547.3,882.8,1546.9,883.8,1546.1,884.5z"
                  />
                  <path
                    className="st4"
                    d="M1553.7,874.1c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2
				L1553.7,874.1L1553.7,874.1z M1553.7,882.8c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9
				h-1.9v6.3h1.9V882.8z"
                  />
                  <path
                    className="st4"
                    d="M1560.5,874.1h2.6v11.2h-2.6V874.1z"
                  />
                  <path
                    className="st4"
                    d="M1576.3,885.3l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1576.3z M1572.2,881.1h2.7l-1.4-4.1
				L1572.2,881.1z"
                  />
                  <path
                    className="st4"
                    d="M1585.8,885.3l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-0.9,1-1.5,1.4l2.4,4.1H1585.8z M1582.5,876.5v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4
				c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L1582.5,876.5L1582.5,876.5z"
                  />
                  <path
                    className="st4"
                    d="M1597,885.3l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1597z M1592.9,881.1h2.7l-1.4-4.1
				L1592.9,881.1z"
                  />
                  <path
                    className="st4"
                    d="M1607.6,879.5c0.9,0.6,1.4,1.4,1.4,2.5c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.6,0.9-2.6,0.9h-4.7v-11.2h4.4
				c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.4,1,2.3C1608.5,878.2,1608.2,878.9,1607.6,879.5z M1605,876.5h-1.8v2h1.8
				c0.3,0,0.5-0.1,0.7-0.3s0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7C1605.5,876.6,1605.3,876.5,1605,876.5z M1605.3,882.9
				c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8s-0.4-0.3-0.8-0.3h-2.1v2.1L1605.3,882.9L1605.3,882.9z"
                  />
                  <path
                    className="st4"
                    d="M1610.2,874.1h2.6v11.2h-2.6V874.1z"
                  />
                  <path
                    className="st4"
                    d="M1622,885.3l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1622z M1617.9,881.1h2.7l-1.4-4.1
				L1617.9,881.1z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1571.6,897.1c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1585.6,897.1,1571.6,897.1z
				 M1583.2,934.1c-17,13-36.3-6.3-23.3-23.3l0,0C1577,897.8,1596.2,917.1,1583.2,934.1C1583.3,934.1,1583.2,934.1,1583.2,934.1z"
                  />
                </g>
                <circle className="st6" cx="1571.6" cy="922.8" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="yemen"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1672.6,957.2h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1685.1,951.6,1679.5,957.2,1672.6,957.2z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1603.1,938.1l-3.8,6.9v4.3h-2.6V945l-3.8-6.9h2.9l2.1,4.3l2.1-4.3H1603.1z"
                  />
                  <path
                    className="st4"
                    d="M1606.7,946.9h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1606.7,946.9L1606.7,946.9z"
                  />
                  <path
                    className="st4"
                    d="M1623.8,938.1v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1623.8z"
                  />
                  <path
                    className="st4"
                    d="M1628.3,946.9h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1628.3,946.9L1628.3,946.9z"
                  />
                  <path
                    className="st4"
                    d="M1640.4,938.1h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V938.1z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1618.5,961.2c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1632.5,961.2,1618.5,961.2z
				 M1630.2,998.2c-17,13-36.3-6.3-23.3-23.3l0,0C1623.9,961.8,1643.1,981.1,1630.2,998.2C1630.2,998.1,1630.2,998.2,1630.2,998.2z"
                  />
                </g>
                <circle className="st6" cx="1618.5" cy="986.8" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="djbouti"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1606.7,993.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1619.2,988.3,1613.6,993.9,1606.7,993.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1524.9,974.8c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2
				L1524.9,974.8L1524.9,974.8z M1524.9,983.5c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9
				h-1.9v6.3h1.9V983.5z"
                  />
                  <path
                    className="st4"
                    d="M1534,986.2c-1.8,0-3-0.7-3.8-2.2l2.2-1.3c0.2,0.3,0.4,0.6,0.6,0.7s0.5,0.2,1,0.2c1,0,1.5-0.4,1.5-1.3v-7.6
				h2.6v7.6c0,1.2-0.4,2.1-1.1,2.8S1535.2,986.2,1534,986.2z"
                  />
                  <path
                    className="st4"
                    d="M1546.8,980.2c0.9,0.6,1.4,1.4,1.4,2.5c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.6,0.9-2.6,0.9h-4.7v-11.2h4.4
				c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.4,1,2.3C1547.8,978.9,1547.5,979.6,1546.8,980.2z M1544.3,977.2h-1.8v2h1.8
				c0.3,0,0.5-0.1,0.7-0.3s0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7S1544.6,977.2,1544.3,977.2z M1544.6,983.6c0.3,0,0.6-0.1,0.8-0.3
				c0.2-0.2,0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.3-0.8-0.3h-2.1v2.1L1544.6,983.6L1544.6,983.6z"
                  />
                  <path
                    className="st4"
                    d="M1559,984.5c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7
				s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S1560.1,983.4,1559,984.5z M1552.5,982.8c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9
				c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4
				S1551.9,982.2,1552.5,982.8z"
                  />
                  <path
                    className="st4"
                    d="M1569.4,985.2c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1570.6,983.6,1570.2,984.5,1569.4,985.2z"
                  />
                  <path
                    className="st4"
                    d="M1579.9,974.8v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1579.9z"
                  />
                  <path className="st4" d="M1581.1,974.8h2.6V986h-2.6V974.8z" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1552.6,997.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1566.6,997.8,1552.6,997.8z
				 M1564.3,1034.8c-17,13-36.3-6.3-23.3-23.3l0,0C1558,998.5,1577.3,1017.8,1564.3,1034.8L1564.3,1034.8z"
                  />
                </g>
                <circle className="st6" cx="1552.6" cy="1023.5" r="15.6" />
              </g>
            </motion.g>

            <motion.g
              id="cyprus"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1507.4,721.4h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1519.9,715.8,1514.3,721.4,1507.4,721.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1429.3,713.7c-1.7,0-3.1-0.6-4.2-1.7c-1.1-1.1-1.7-2.5-1.7-4.2s0.6-3,1.7-4.2s2.5-1.7,4.2-1.7
				c1,0,1.9,0.2,2.8,0.7s1.5,1.1,2,1.9l-2.2,1.3c-0.2-0.4-0.6-0.8-1.1-1s-1-0.4-1.5-0.4c-1,0-1.8,0.3-2.4,0.9
				c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,0.9,2.4c0.6,0.6,1.4,0.9,2.4,0.9c0.6,0,1.1-0.1,1.5-0.4c0.5-0.2,0.8-0.6,1-1l2.2,1.3
				c-0.5,0.8-1.1,1.4-2,1.9C1431.3,713.5,1430.3,713.7,1429.3,713.7z"
                  />
                  <path
                    className="st4"
                    d="M1444.2,702.3l-3.8,6.9v4.3h-2.6v-4.3l-3.8-6.9h2.9l2.1,4.3l2.1-4.3H1444.2z"
                  />
                  <path
                    className="st4"
                    d="M1449.4,702.3c1.1,0,2,0.4,2.8,1.1c0.8,0.7,1.1,1.7,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.8,0.7-1.7,1.1-2.8,1.1
				h-1.7v3.5h-2.6v-11.2h4.3V702.3z M1449.4,707.6c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-1.7
				v2.9L1449.4,707.6L1449.4,707.6z"
                  />
                  <path
                    className="st4"
                    d="M1460.5,713.5l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-0.9,1-1.5,1.4l2.4,4.1H1460.5z M1457.2,704.7v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4
				c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L1457.2,704.7L1457.2,704.7z"
                  />
                  <path
                    className="st4"
                    d="M1471.7,712.7c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1472.9,711.1,1472.5,712,1471.7,712.7z"
                  />
                  <path
                    className="st4"
                    d="M1478.7,713.7c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C1480.9,713.4,1479.9,713.7,1478.7,713.7z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1453.3,725.4c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1467.3,725.4,1453.3,725.4z
				 M1465,762.4c-17,13-36.3-6.3-23.3-23.3l0,0C1458.7,726,1478,745.3,1465,762.4C1465,762.3,1465,762.4,1465,762.4z"
                  />
                </g>
                <circle className="st6" cx="1453.3" cy="751" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="libya"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1369.7,790.7h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1382.2,785.1,1376.6,790.7,1369.7,790.7z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1297.7,780.4h4v2.5h-6.6v-11.2h2.6V780.4z"
                  />
                  <path
                    className="st4"
                    d="M1302.9,771.6h2.6v11.2h-2.6V771.6z"
                  />
                  <path
                    className="st4"
                    d="M1314.3,777c0.9,0.6,1.4,1.4,1.4,2.5c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.6,0.9-2.6,0.9h-4.7v-11.2h4.4
				c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.4,1,2.3C1315.3,775.7,1314.9,776.5,1314.3,777z M1311.7,774h-1.8v2h1.8c0.3,0,0.5-0.1,0.7-0.3
				s0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7C1312.3,774.1,1312,774,1311.7,774z M1312.1,780.4c0.3,0,0.6-0.1,0.8-0.3
				c0.2-0.2,0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8s-0.4-0.3-0.8-0.3h-2.1v2.1L1312.1,780.4L1312.1,780.4z"
                  />
                  <path
                    className="st4"
                    d="M1325.5,771.6l-3.8,6.9v4.3h-2.6v-4.3l-3.8-6.9h2.9l2.1,4.3l2.1-4.3H1325.5z"
                  />
                  <path
                    className="st4"
                    d="M1332.3,782.8l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1332.3z M1328.2,778.7h2.7l-1.4-4.1
				L1328.2,778.7z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1315.6,794.7c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1329.6,794.7,1315.6,794.7z
				 M1327.2,831.7c-17,13-36.3-6.3-23.3-23.3l0,0C1321,795.4,1340.2,814.6,1327.2,831.7C1327.3,831.7,1327.2,831.7,1327.2,831.7z"
                  />
                </g>
                <circle className="st6" cx="1315.6" cy="820.3" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="pakistan"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1888.2,772H1780c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2c6.9,0,12.5,5.6,12.5,12.5
			l0,0C1900.7,766.4,1895.1,772,1888.2,772z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1802.2,753c1.1,0,2,0.4,2.8,1.1c0.8,0.7,1.1,1.7,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.8,0.7-1.7,1.1-2.8,1.1
				h-1.7v3.5h-2.6V753H1802.2z M1802.2,758.2c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-1.7v2.9
				L1802.2,758.2L1802.2,758.2z"
                  />
                  <path
                    className="st4"
                    d="M1813.5,764.2l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1813.5z M1809.4,760h2.7l-1.4-4.1
				L1809.4,760z"
                  />
                  <path
                    className="st4"
                    d="M1826.2,764.2h-2.9l-3.6-5.2v5.2h-2.6V753h2.6v4.9l3.4-4.9h2.9l-3.8,5.5L1826.2,764.2z"
                  />
                  <path className="st4" d="M1827.1,753h2.6v11.2h-2.6V753z" />
                  <path
                    className="st4"
                    d="M1835.4,764.4c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C1837.6,764.1,1836.6,764.4,1835.4,764.4z"
                  />
                  <path
                    className="st4"
                    d="M1847.9,753v2.5h-2.9v8.7h-2.6v-8.7h-2.9V753H1847.9z"
                  />
                  <path
                    className="st4"
                    d="M1855.5,764.2l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1855.5z M1851.4,760h2.7l-1.4-4.1
				L1851.4,760z"
                  />
                  <path
                    className="st4"
                    d="M1865.4,753h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6V753h1.9l4.3,6.1V753z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1834.2,776c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1848.1,776,1834.2,776z M1845.8,813
				c-17,13-36.3-6.3-23.3-23.3l0,0C1839.5,776.7,1858.8,795.9,1845.8,813L1845.8,813z"
                  />
                </g>
                <circle className="st6" cx="1834.2" cy="801.7" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="uae"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1762.3,857.1h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1774.8,851.5,1769.2,857.1,1762.3,857.1z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1701.6,848.4c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8V838h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6V838h2.6v7.6C1702.8,846.8,1702.4,847.7,1701.6,848.4z"
                  />
                  <path
                    className="st4"
                    d="M1711.7,849.2l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1711.7z M1707.5,845.1h2.7l-1.4-4.1
				L1707.5,845.1z"
                  />
                  <path
                    className="st4"
                    d="M1717.8,846.8h4.5v2.5h-7V838h7v2.5h-4.4v1.9h4v2.4h-4L1717.8,846.8L1717.8,846.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1708.2,861.1c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1722.2,861.1,1708.2,861.1z
				 M1719.9,898.1c-17,13-36.3-6.3-23.3-23.3l0,0C1713.6,861.8,1732.8,881,1719.9,898.1L1719.9,898.1z"
                  />
                </g>
                <circle className="st6" cx="1708.2" cy="886.7" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="oman"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1748.8,923.4h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1761.3,917.8,1755.7,923.4,1748.8,923.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1681.5,914.1c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7c-1.1-1.1-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1
				s2.5-1.7,4.1-1.7s3,0.6,4.1,1.7c1.1,1.1,1.7,2.5,1.7,4.1S1682.6,913,1681.5,914.1z M1675,912.4c0.6,0.6,1.4,0.9,2.3,0.9
				s1.7-0.3,2.3-0.9c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4
				S1674.4,911.8,1675,912.4z"
                  />
                  <path
                    className="st4"
                    d="M1695.8,904.4v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1695.8z"
                  />
                  <path
                    className="st4"
                    d="M1705,915.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1705z M1700.9,911.4h2.7l-1.4-4.1
				L1700.9,911.4z"
                  />
                  <path
                    className="st4"
                    d="M1714.8,904.4h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V904.4z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1694.7,927.4c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1708.7,927.4,1694.7,927.4z
				 M1706.4,964.4c-17,13-36.3-6.3-23.3-23.3l0,0C1700.1,928.1,1719.3,947.3,1706.4,964.4L1706.4,964.4z"
                  />
                </g>
                <circle className="st6" cx="1694.7" cy="953.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="yemen"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1672.6,957.2h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1685.1,951.6,1679.5,957.2,1672.6,957.2z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1603.1,938.1l-3.8,6.9v4.3h-2.6V945l-3.8-6.9h2.9l2.1,4.3l2.1-4.3H1603.1z"
                  />
                  <path
                    className="st4"
                    d="M1606.7,946.9h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1606.7,946.9L1606.7,946.9z"
                  />
                  <path
                    className="st4"
                    d="M1623.8,938.1v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1623.8z"
                  />
                  <path
                    className="st4"
                    d="M1628.3,946.9h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1628.3,946.9L1628.3,946.9z"
                  />
                  <path
                    className="st4"
                    d="M1640.4,938.1h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V938.1z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1618.5,961.2c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1632.5,961.2,1618.5,961.2z
				 M1630.2,998.2c-17,13-36.3-6.3-23.3-23.3l0,0C1623.9,961.8,1643.1,981.1,1630.2,998.2C1630.2,998.1,1630.2,998.2,1630.2,998.2z"
                  />
                </g>
                <circle className="st6" cx="1618.5" cy="986.8" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="djbouti"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1606.7,993.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1619.2,988.3,1613.6,993.9,1606.7,993.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1524.9,974.8c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2
				L1524.9,974.8L1524.9,974.8z M1524.9,983.5c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9
				h-1.9v6.3h1.9V983.5z"
                  />
                  <path
                    className="st4"
                    d="M1534,986.2c-1.8,0-3-0.7-3.8-2.2l2.2-1.3c0.2,0.3,0.4,0.6,0.6,0.7s0.5,0.2,1,0.2c1,0,1.5-0.4,1.5-1.3v-7.6
				h2.6v7.6c0,1.2-0.4,2.1-1.1,2.8S1535.2,986.2,1534,986.2z"
                  />
                  <path
                    className="st4"
                    d="M1546.8,980.2c0.9,0.6,1.4,1.4,1.4,2.5c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.6,0.9-2.6,0.9h-4.7v-11.2h4.4
				c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.4,1,2.3C1547.8,978.9,1547.5,979.6,1546.8,980.2z M1544.3,977.2h-1.8v2h1.8
				c0.3,0,0.5-0.1,0.7-0.3s0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7S1544.6,977.2,1544.3,977.2z M1544.6,983.6c0.3,0,0.6-0.1,0.8-0.3
				c0.2-0.2,0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.3-0.8-0.3h-2.1v2.1L1544.6,983.6L1544.6,983.6z"
                  />
                  <path
                    className="st4"
                    d="M1559,984.5c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7
				s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S1560.1,983.4,1559,984.5z M1552.5,982.8c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9
				c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4
				S1551.9,982.2,1552.5,982.8z"
                  />
                  <path
                    className="st4"
                    d="M1569.4,985.2c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1570.6,983.6,1570.2,984.5,1569.4,985.2z"
                  />
                  <path
                    className="st4"
                    d="M1579.9,974.8v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1579.9z"
                  />
                  <path className="st4" d="M1581.1,974.8h2.6V986h-2.6V974.8z" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1552.6,997.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1566.6,997.8,1552.6,997.8z
				 M1564.3,1034.8c-17,13-36.3-6.3-23.3-23.3l0,0C1558,998.5,1577.3,1017.8,1564.3,1034.8L1564.3,1034.8z"
                  />
                </g>
                <circle className="st6" cx="1552.6" cy="1023.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="ethiopia"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1550.3,1052.3h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1562.8,1046.7,1557.2,1052.3,1550.3,1052.3z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1465,1042h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1465,1042L1465,1042z"
                  />
                  <path
                    className="st4"
                    d="M1478.4,1033.3v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1478.4z"
                  />
                  <path
                    className="st4"
                    d="M1485.6,1033.3h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V1033.3z"
                  />
                  <path
                    className="st4"
                    d="M1490.1,1033.3h2.6v11.2h-2.6V1033.3z"
                  />
                  <path
                    className="st4"
                    d="M1504.1,1043c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7
				s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S1505.2,1041.9,1504.1,1043z M1497.6,1041.3c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9
				c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4s-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4
				S1497,1040.6,1497.6,1041.3z"
                  />
                  <path
                    className="st4"
                    d="M1511.4,1033.3c1.1,0,2,0.4,2.8,1.1s1.1,1.7,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.8,0.7-1.7,1.1-2.8,1.1h-1.7v3.5
				h-2.6v-11.2h4.3V1033.3z M1511.4,1038.5c0.4,0,0.7-0.1,1-0.4s0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-1.7v2.9
				L1511.4,1038.5L1511.4,1038.5z"
                  />
                  <path
                    className="st4"
                    d="M1516.6,1033.3h2.6v11.2h-2.6V1033.3z"
                  />
                  <path
                    className="st4"
                    d="M1528.4,1044.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1528.4z M1524.3,1040.3h2.7l-1.4-4.1
				L1524.3,1040.3z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1496.3,1056.3c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1510.2,1056.3,1496.3,1056.3z
				 M1507.9,1093.3c-17,13-36.3-6.3-23.3-23.3l0,0C1501.6,1057,1520.9,1076.2,1507.9,1093.3L1507.9,1093.3z"
                  />
                </g>
                <circle className="st6" cx="1496.3" cy="1082" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="somalia"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1673.3,1090.4h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1685.8,1084.8,1680.2,1090.4,1673.3,1090.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1589.6,1082.7c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C1591.8,1082.4,1590.8,1082.7,1589.6,1082.7z"
                  />
                  <path
                    className="st4"
                    d="M1604.4,1081c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7
				s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S1605.6,1079.9,1604.4,1081z M1598,1079.3c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9
				c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4s-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4
				S1597.4,1078.7,1598,1079.3z"
                  />
                  <path
                    className="st4"
                    d="M1618.8,1071.3v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1618.8z"
                  />
                  <path
                    className="st4"
                    d="M1628,1082.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1628z M1623.9,1078.3h2.7l-1.4-4.1
				L1623.9,1078.3z"
                  />
                  <path
                    className="st4"
                    d="M1634.1,1080h4v2.5h-6.6v-11.2h2.6V1080z"
                  />
                  <path
                    className="st4"
                    d="M1639.3,1071.3h2.6v11.2h-2.6V1071.3z"
                  />
                  <path
                    className="st4"
                    d="M1651,1082.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1651z M1646.9,1078.3h2.7l-1.4-4.1
				L1646.9,1078.3z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1619.2,1094.3c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1633.2,1094.3,1619.2,1094.3z
				 M1630.9,1131.3c-17,13-36.3-6.3-23.3-23.3l0,0C1624.6,1095,1643.9,1114.3,1630.9,1131.3L1630.9,1131.3z"
                  />
                </g>
                <circle className="st6" cx="1619.2" cy="1120" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="uganda"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1512.6,1174.4h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1525.1,1168.8,1519.5,1174.4,1512.6,1174.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1433.5,1165.7c-0.8,0.7-1.8,1-3.1,1s-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1434.7,1164.1,1434.3,1165,1433.5,1165.7z"
                  />
                  <path
                    className="st4"
                    d="M1447.6,1160.3v1c0,1.7-0.5,3-1.6,4c-1,1-2.4,1.5-4,1.5c-1.7,0-3.2-0.6-4.3-1.7c-1.1-1.1-1.7-2.5-1.7-4.1
				s0.6-3,1.7-4.1s2.5-1.7,4.2-1.7c1,0,2,0.2,2.9,0.7s1.5,1.1,2,1.9l-2.2,1.2c-0.2-0.4-0.6-0.7-1.1-0.9c-0.5-0.2-1-0.4-1.6-0.4
				c-0.9,0-1.7,0.3-2.4,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,1,2.4c0.6,0.6,1.5,0.9,2.6,0.9c1.5,0,2.4-0.6,2.9-1.7h-3v-2.2h5.5
				V1160.3z"
                  />
                  <path
                    className="st4"
                    d="M1456,1166.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1456z M1451.8,1162.3h2.7l-1.4-4.1
				L1451.8,1162.3z"
                  />
                  <path
                    className="st4"
                    d="M1465.8,1155.3h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1155.3z"
                  />
                  <path
                    className="st4"
                    d="M1474.7,1155.3c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2
				H1474.7z M1474.7,1164c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3c-0.5-0.6-1.3-0.9-2.2-0.9h-1.9v6.3h1.9
				V1164z"
                  />
                  <path
                    className="st4"
                    d="M1488.5,1166.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1488.5z M1484.4,1162.3h2.7l-1.4-4.1
				L1484.4,1162.3z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1458.6,1178.3c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1472.5,1178.3,1458.6,1178.3z
				 M1470.2,1215.3c-17,13-36.3-6.3-23.3-23.3l0,0C1463.9,1179,1483.2,1198.3,1470.2,1215.3L1470.2,1215.3z"
                  />
                </g>
                <circle className="st6" cx="1458.6" cy="1204" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="kenya"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1597.8,1191.5h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1610.3,1185.9,1604.8,1191.5,1597.8,1191.5z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1528.7,1183.7h-2.9l-3.6-5.2v5.2h-2.6v-11.2h2.6v4.9l3.4-4.9h2.9l-3.8,5.5L1528.7,1183.7z"
                  />
                  <path
                    className="st4"
                    d="M1532.2,1181.2h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1532.2,1181.2L1532.2,1181.2z"
                  />
                  <path
                    className="st4"
                    d="M1544.4,1172.5h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1172.5z"
                  />
                  <path
                    className="st4"
                    d="M1558,1172.5l-3.8,6.9v4.3h-2.6v-4.3l-3.8-6.9h2.9l2.1,4.3l2.1-4.3H1558z"
                  />
                  <path
                    className="st4"
                    d="M1564.8,1183.7l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1564.8z M1560.7,1179.5h2.7l-1.4-4.1
				L1560.7,1179.5z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1543.8,1195.5c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1557.7,1195.5,1543.8,1195.5z
				 M1555.4,1232.5c-17,13-36.3-6.3-23.3-23.3l0,0C1549.1,1196.2,1568.4,1215.5,1555.4,1232.5L1555.4,1232.5z"
                  />
                </g>
                <circle className="st6" cx="1543.8" cy="1221.2" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="tanzania"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1594.8,1306.4h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1607.3,1300.8,1601.7,1306.4,1594.8,1306.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1511.3,1287.4v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1511.3z"
                  />
                  <path
                    className="st4"
                    d="M1518.9,1298.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1518.9z M1514.8,1294.4h2.7l-1.4-4.1
				L1514.8,1294.4z"
                  />
                  <path
                    className="st4"
                    d="M1528.7,1287.4h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1287.4z"
                  />
                  <path
                    className="st4"
                    d="M1536.1,1296.1h4.4v2.5h-7.6v-2l4.3-6.8h-4.2v-2.5h7.5v2L1536.1,1296.1z"
                  />
                  <path
                    className="st4"
                    d="M1549.2,1298.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1549.2z M1545.1,1294.4h2.7l-1.4-4.1
				L1545.1,1294.4z"
                  />
                  <path
                    className="st4"
                    d="M1559.1,1287.4h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1287.4z"
                  />
                  <path
                    className="st4"
                    d="M1563.5,1287.4h2.6v11.2h-2.6V1287.4z"
                  />
                  <path
                    className="st4"
                    d="M1575.3,1298.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1575.3z M1571.2,1294.4h2.7l-1.4-4.1
				L1571.2,1294.4z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1540.7,1310.4c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1554.7,1310.4,1540.7,1310.4z
				 M1552.4,1347.4c-17,13-36.3-6.3-23.3-23.3l0,0C1546.1,1311.1,1565.4,1330.4,1552.4,1347.4L1552.4,1347.4z"
                  />
                </g>
                <circle className="st6" cx="1540.7" cy="1336.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="madagascar"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1661.4,1391.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1673.9,1386.3,1668.3,1391.9,1661.4,1391.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1563.9,1372.8v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1563.9z"
                  />
                  <path
                    className="st4"
                    d="M1573.1,1384l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1573.1z M1569,1379.8h2.7l-1.4-4.1
				L1569,1379.8z"
                  />
                  <path
                    className="st4"
                    d="M1581.2,1372.8c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2
				H1581.2z M1581.2,1381.5c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9h-1.9v6.3h1.9V1381.5z
				"
                  />
                  <path
                    className="st4"
                    d="M1594.9,1384l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1594.9z M1590.8,1379.8h2.7l-1.4-4.1
				L1590.8,1379.8z"
                  />
                  <path
                    className="st4"
                    d="M1609.2,1377.8v1c0,1.7-0.5,3-1.6,4c-1,1-2.4,1.5-4,1.5c-1.7,0-3.2-0.6-4.3-1.7c-1.1-1.1-1.7-2.5-1.7-4.1
				s0.6-3,1.7-4.1s2.5-1.7,4.2-1.7c1,0,2,0.2,2.9,0.7s1.5,1.1,2,1.9l-2.2,1.2c-0.2-0.4-0.6-0.7-1.1-0.9c-0.5-0.2-1-0.4-1.6-0.4
				c-0.9,0-1.7,0.3-2.4,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,1,2.4c0.6,0.6,1.5,0.9,2.6,0.9c1.5,0,2.4-0.6,2.9-1.7h-3v-2.2h5.5
				V1377.8z"
                  />
                  <path
                    className="st4"
                    d="M1617.5,1384l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1617.5z M1613.4,1379.8h2.7l-1.4-4.1
				L1613.4,1379.8z"
                  />
                  <path
                    className="st4"
                    d="M1624.8,1384.2c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C1627,1383.9,1626,1384.2,1624.8,1384.2z"
                  />
                  <path
                    className="st4"
                    d="M1635.5,1384.2c-1.7,0-3.1-0.6-4.2-1.7s-1.7-2.5-1.7-4.2s0.6-3,1.7-4.2s2.5-1.7,4.2-1.7c1,0,1.9,0.2,2.8,0.7
				s1.5,1.1,2,1.9l-2.2,1.3c-0.2-0.4-0.6-0.8-1.1-1s-1-0.4-1.5-0.4c-1,0-1.8,0.3-2.4,0.9s-0.9,1.4-0.9,2.4s0.3,1.8,0.9,2.4
				s1.4,0.9,2.4,0.9c0.6,0,1.1-0.1,1.5-0.4c0.5-0.2,0.8-0.6,1-1l2.2,1.3c-0.5,0.8-1.1,1.4-2,1.9
				C1637.5,1384,1636.5,1384.2,1635.5,1384.2z"
                  />
                  <path
                    className="st4"
                    d="M1648.8,1384l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1648.8z M1644.7,1379.8h2.7l-1.4-4.1
				L1644.7,1379.8z"
                  />
                  <path
                    className="st4"
                    d="M1658.3,1384l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1s1.1,1.7,1.1,2.7c0,0.7-0.2,1.3-0.6,1.9
				s-0.9,1-1.5,1.4l2.4,4.1H1658.3z M1655,1375.2v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1
				s-0.6-0.4-0.9-0.4L1655,1375.2L1655,1375.2z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1607.3,1395.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1621.3,1395.8,1607.3,1395.8z
				 M1619,1432.8c-17,13-36.3-6.3-23.3-23.3l0,0C1612.7,1396.5,1632,1415.8,1619,1432.8L1619,1432.8z"
                  />
                </g>
                <circle className="st6" cx="1607.3" cy="1421.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="mozambique"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1512.6,1384.5h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1525.1,1378.9,1519.5,1384.5,1512.6,1384.5z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1418.7,1365.5v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1418.7z"
                  />
                  <path
                    className="st4"
                    d="M1430.1,1375.2c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7
				s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S1431.2,1374.1,1430.1,1375.2z M1423.6,1373.5c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9
				c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4s-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4
				S1423,1372.8,1423.6,1373.5z"
                  />
                  <path
                    className="st4"
                    d="M1435.6,1374.2h4.4v2.5h-7.6v-2l4.3-6.8h-4.2v-2.5h7.5v2L1435.6,1374.2z"
                  />
                  <path
                    className="st4"
                    d="M1448.8,1376.7l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1448.8z M1444.6,1372.5h2.7l-1.4-4.1
				L1444.6,1372.5z"
                  />
                  <path
                    className="st4"
                    d="M1463.6,1365.5v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1463.6z"
                  />
                  <path
                    className="st4"
                    d="M1472.4,1370.8c0.9,0.6,1.4,1.4,1.4,2.5c0,1-0.3,1.8-1,2.4s-1.6,0.9-2.6,0.9h-4.7v-11.2h4.4
				c1,0,1.8,0.3,2.5,0.9s1,1.4,1,2.3C1473.4,1369.5,1473.1,1370.3,1472.4,1370.8z M1469.9,1367.9h-1.8v2h1.8c0.3,0,0.5-0.1,0.7-0.3
				c0.2-0.2,0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7C1470.4,1367.9,1470.1,1367.9,1469.9,1367.9z M1470.2,1374.3c0.3,0,0.6-0.1,0.8-0.3
				c0.2-0.2,0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8s-0.4-0.3-0.8-0.3h-2.1v2.1h2.1V1374.3z"
                  />
                  <path
                    className="st4"
                    d="M1475.1,1365.5h2.6v11.2h-2.6V1365.5z"
                  />
                  <path
                    className="st4"
                    d="M1490.7,1371.1c0,1.4-0.4,2.6-1.3,3.7l1.1,1.2l-1.8,1.6l-1.2-1.3c-0.8,0.4-1.7,0.6-2.6,0.6
				c-1.6,0-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7s3,0.6,4.1,1.7C1490.2,1368,1490.7,1369.4,1490.7,1371.1z
				 M1484.9,1374.4c0.2,0,0.5,0,0.8-0.1l-1.6-1.7l1.8-1.6l1.8,1.9c0.3-0.6,0.5-1.2,0.5-1.8c0-1-0.3-1.8-0.9-2.4s-1.4-0.9-2.3-0.9
				s-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,0.9,2.4C1483.2,1374.1,1484,1374.4,1484.9,1374.4z"
                  />
                  <path
                    className="st4"
                    d="M1499.5,1375.8c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1500.7,1374.2,1500.3,1375.1,1499.5,1375.8z"
                  />
                  <path
                    className="st4"
                    d="M1505.1,1374.2h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1505.1,1374.2L1505.1,1374.2z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1458.6,1388.5c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1472.5,1388.5,1458.6,1388.5z
				 M1470.2,1425.5c-17,13-36.3-6.3-23.3-23.3l0,0C1463.9,1389.2,1483.2,1408.4,1470.2,1425.5L1470.2,1425.5z"
                  />
                </g>
                <circle className="st6" cx="1458.6" cy="1414.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="south-africa"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1416.9,1502.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1429.4,1497.3,1423.8,1502.9,1416.9,1502.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1312,1495.2c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C1314.2,1494.9,1313.2,1495.2,1312,1495.2z"
                  />
                  <path
                    className="st4"
                    d="M1326.8,1493.5c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7
				s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S1327.9,1492.4,1326.8,1493.5z M1320.3,1491.8c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9
				c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4s-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9s-0.9,1.4-0.9,2.4S1319.7,1491.2,1320.3,1491.8z"
                  />
                  <path
                    className="st4"
                    d="M1337.2,1494.2c-0.8,0.7-1.8,1-3.1,1c-1.3,0-2.3-0.3-3.1-1c-0.8-0.7-1.2-1.6-1.2-2.8v-7.6h2.6v7.4
				c0,1,0.6,1.6,1.8,1.6c1.2,0,1.8-0.5,1.8-1.6v-7.4h2.6v7.6C1338.4,1492.6,1338,1493.5,1337.2,1494.2z"
                  />
                  <path
                    className="st4"
                    d="M1347.8,1483.8v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H1347.8z"
                  />
                  <path
                    className="st4"
                    d="M1355,1483.8h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V1483.8z"
                  />
                  <path
                    className="st4"
                    d="M1370.8,1495l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1370.8z M1366.6,1490.8h2.7l-1.4-4.1
				L1366.6,1490.8z"
                  />
                  <path
                    className="st4"
                    d="M1381.1,1486.3h-4.2v2.2h4.2v2.5h-4.2v4.1h-2.6v-11.2h6.8L1381.1,1486.3L1381.1,1486.3z"
                  />
                  <path
                    className="st4"
                    d="M1388.5,1495l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1s1.1,1.7,1.1,2.7c0,0.7-0.2,1.3-0.6,1.9
				s-0.9,1-1.5,1.4l2.4,4.1H1388.5z M1385.2,1486.2v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1
				s-0.6-0.4-0.9-0.4L1385.2,1486.2L1385.2,1486.2z"
                  />
                  <path
                    className="st4"
                    d="M1392.5,1483.8h2.6v11.2h-2.6V1483.8z"
                  />
                  <path
                    className="st4"
                    d="M1402.3,1495.2c-1.7,0-3.1-0.6-4.2-1.7s-1.7-2.5-1.7-4.2s0.6-3,1.7-4.2c1.1-1.1,2.5-1.7,4.2-1.7
				c1,0,1.9,0.2,2.8,0.7s1.5,1.1,2,1.9l-2.2,1.3c-0.2-0.4-0.6-0.8-1.1-1s-1-0.4-1.5-0.4c-1,0-1.8,0.3-2.4,0.9s-0.9,1.4-0.9,2.4
				s0.3,1.8,0.9,2.4s1.4,0.9,2.4,0.9c0.6,0,1.1-0.1,1.5-0.4c0.5-0.2,0.8-0.6,1-1l2.2,1.3c-0.5,0.8-1.1,1.4-2,1.9
				C1404.3,1495,1403.3,1495.2,1402.3,1495.2z"
                  />
                  <path
                    className="st4"
                    d="M1415.6,1495l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1415.6z M1411.5,1490.8h2.7l-1.4-4.1
				L1411.5,1490.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1362.8,1506.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1376.8,1506.8,1362.8,1506.8z
				 M1374.5,1543.8c-17,13-36.3-6.3-23.3-23.3l0,0C1368.2,1507.5,1387.5,1526.8,1374.5,1543.8L1374.5,1543.8z"
                  />
                </g>
                <circle className="st6" cx="1362.8" cy="1532.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="nepal"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2056.7,769h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2c6.9,0,12.5,5.6,12.5,12.5
			l0,0C2069.2,763.4,2063.6,769,2056.7,769z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1986.2,750h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6V750h1.9l4.3,6.1V750z"
                  />
                  <path
                    className="st4"
                    d="M1993.3,758.7h4.5v2.5h-7V750h7v2.5h-4.4v1.9h4v2.4h-4L1993.3,758.7L1993.3,758.7z"
                  />
                  <path
                    className="st4"
                    d="M2003.4,750c1.1,0,2,0.4,2.8,1.1c0.8,0.7,1.1,1.7,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.8,0.7-1.7,1.1-2.8,1.1
				h-1.7v3.5h-2.6V750H2003.4z M2003.4,755.3c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-1.7v2.9
				L2003.4,755.3L2003.4,755.3z"
                  />
                  <path
                    className="st4"
                    d="M2014.8,761.2l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2014.8z M2010.7,757h2.7l-1.4-4.1
				L2010.7,757z"
                  />
                  <path
                    className="st4"
                    d="M2020.9,758.7h4v2.5h-6.6V750h2.6V758.7z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2002.6,773c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2016.6,773,2002.6,773z M2014.3,810
				c-17,13-36.3-6.3-23.3-23.3l0,0C2008,773.7,2027.3,792.9,2014.3,810L2014.3,810z"
                  />
                </g>
                <circle className="st6" cx="2002.6" cy="798.7" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="bangladesh"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2129.7,851.4h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2142.2,845.8,2136.6,851.4,2129.7,851.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2032.5,837.8c0.9,0.6,1.4,1.4,1.4,2.5c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.6,0.9-2.6,0.9h-4.7v-11.2h4.4
				c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.4,1,2.3C2033.4,836.5,2033.1,837.2,2032.5,837.8z M2029.9,834.8h-1.8v2h1.8
				c0.3,0,0.5-0.1,0.7-0.3s0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7C2030.4,834.9,2030.2,834.8,2029.9,834.8z M2030.2,841.2
				c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8s-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.3-0.8-0.3h-2.1v2.1L2030.2,841.2L2030.2,841.2z
				"
                  />
                  <path
                    className="st4"
                    d="M2042.4,843.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2042.4z M2038.3,839.4h2.7l-1.4-4.1
				L2038.3,839.4z"
                  />
                  <path
                    className="st4"
                    d="M2052.2,832.4h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1L2052.2,832.4L2052.2,832.4z"
                  />
                  <path
                    className="st4"
                    d="M2067.8,837.3v1c0,1.7-0.5,3-1.6,4c-1,1-2.4,1.5-4,1.5c-1.7,0-3.2-0.6-4.3-1.7c-1.1-1.1-1.7-2.5-1.7-4.1
				s0.6-3,1.7-4.1c1.1-1.1,2.5-1.7,4.2-1.7c1,0,2,0.2,2.9,0.7s1.5,1.1,2,1.9l-2.2,1.2c-0.2-0.4-0.6-0.7-1.1-0.9s-1-0.4-1.6-0.4
				c-0.9,0-1.7,0.3-2.4,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,1,2.4c0.6,0.6,1.5,0.9,2.6,0.9c1.5,0,2.4-0.6,2.9-1.7h-3v-2.2h5.5
				V837.3z"
                  />
                  <path
                    className="st4"
                    d="M2071.8,841.1h4v2.5h-6.6v-11.2h2.6V841.1z"
                  />
                  <path
                    className="st4"
                    d="M2084.5,843.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2084.5z M2080.4,839.4h2.7l-1.4-4.1
				L2080.4,839.4z"
                  />
                  <path
                    className="st4"
                    d="M2092.6,832.4c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2
				L2092.6,832.4L2092.6,832.4z M2092.6,841.1c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9
				h-1.9v6.3h1.9V841.1z"
                  />
                  <path
                    className="st4"
                    d="M2102,841.1h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4v1.9H2102z"
                  />
                  <path
                    className="st4"
                    d="M2111.9,843.8c-1.1,0-2.1-0.2-2.9-0.7c-0.8-0.5-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6
				c1,0,1.5-0.3,1.5-0.9c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				s-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				c0.3,0.2,0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4s0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C2114.1,843.5,2113.1,843.8,2111.9,843.8z"
                  />
                  <path
                    className="st4"
                    d="M2123.3,832.4h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V832.4z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2075.6,855.4c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2089.6,855.4,2075.6,855.4z
				 M2087.2,892.4c-17,13-36.3-6.3-23.3-23.3l0,0C2080.9,856.1,2100.2,875.3,2087.2,892.4L2087.2,892.4z"
                  />
                </g>
                <circle className="st6" cx="2075.6" cy="881.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="myanmar"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2188.5,870.5h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2201,864.9,2195.4,870.5,2188.5,870.5z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2107.3,851.4v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H2107.3z"
                  />
                  <path
                    className="st4"
                    d="M2118.3,851.4l-3.8,6.9v4.3h-2.6v-4.3l-3.8-6.9h2.9l2.1,4.3l2.1-4.3H2118.3z"
                  />
                  <path
                    className="st4"
                    d="M2125.1,862.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2125.1z M2121,858.5h2.7l-1.4-4.1
				L2121,858.5z"
                  />
                  <path
                    className="st4"
                    d="M2134.9,851.4h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V851.4z"
                  />
                  <path
                    className="st4"
                    d="M2150.6,851.4v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H2150.6z"
                  />
                  <path
                    className="st4"
                    d="M2159.8,862.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2159.8z M2155.7,858.5h2.7l-1.4-4.1
				L2155.7,858.5z"
                  />
                  <path
                    className="st4"
                    d="M2169.3,862.6l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9s-0.9,1-1.5,1.4l2.4,4.1H2169.3z M2166,853.8v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4c0.2-0.3,0.4-0.6,0.4-1
				s-0.1-0.7-0.4-1c-0.3-0.3-0.6-0.4-0.9-0.4L2166,853.8L2166,853.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2134.4,874.5c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2148.4,874.5,2134.4,874.5z
				 M2146.1,911.5c-17,13-36.3-6.3-23.3-23.3l0,0C2139.8,875.1,2159.1,894.4,2146.1,911.5L2146.1,911.5z"
                  />
                </g>
                <circle className="st6" cx="2134.4" cy="900.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="laos"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2262.2,870.5H2154c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2c6.9,0,12.5,5.6,12.5,12.5
			l0,0C2274.8,864.9,2269.2,870.5,2262.2,870.5z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2191.4,860.2h4v2.5h-6.6v-11.2h2.6V860.2z"
                  />
                  <path
                    className="st4"
                    d="M2204.2,862.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2204.2z M2200,858.5h2.7l-1.4-4.1
				L2200,858.5z"
                  />
                  <path
                    className="st4"
                    d="M2216.8,861.2c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7c-1.1-1.1-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1
				c1.1-1.1,2.5-1.7,4.1-1.7s3,0.6,4.1,1.7c1.1,1.1,1.7,2.5,1.7,4.1S2217.9,860.1,2216.8,861.2z M2210.4,859.4
				c0.6,0.6,1.4,0.9,2.3,0.9c0.9,0,1.7-0.3,2.3-0.9c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9
				c-0.9,0-1.7,0.3-2.3,0.9c-0.6,0.6-0.9,1.4-0.9,2.4S2209.7,858.8,2210.4,859.4z"
                  />
                  <path
                    className="st4"
                    d="M2223.5,862.9c-1.1,0-2.1-0.2-2.9-0.7c-0.8-0.5-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6
				c1,0,1.5-0.3,1.5-0.9c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				s-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				c0.3,0.2,0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4s0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C2225.7,862.6,2224.7,862.9,2223.5,862.9z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2208.2,874.5c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2222.1,874.5,2208.2,874.5z
				 M2219.8,911.5c-17,13-36.3-6.3-23.3-23.3l0,0C2213.5,875.1,2232.8,894.4,2219.8,911.5L2219.8,911.5z"
                  />
                </g>
                <circle className="st6" cx="2208.2" cy="900.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="thailand"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2212.6,928.3h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2225.1,922.7,2219.5,928.3,2212.6,928.3z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2129.4,909.2v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H2129.4z"
                  />
                  <path
                    className="st4"
                    d="M2136.6,909.2h2.6v11.2h-2.6V916h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V909.2z"
                  />
                  <path
                    className="st4"
                    d="M2148.4,920.4l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2148.4z M2144.3,916.3h2.7l-1.4-4.1
				L2144.3,916.3z"
                  />
                  <path className="st4" d="M2152,909.2h2.6v11.2h-2.6V909.2z" />
                  <path
                    className="st4"
                    d="M2159,918h4v2.5h-6.6v-11.2h2.6V918z"
                  />
                  <path
                    className="st4"
                    d="M2171.8,920.4l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2171.8z M2167.6,916.3h2.7l-1.4-4.1
				L2167.6,916.3z"
                  />
                  <path
                    className="st4"
                    d="M2181.6,909.2h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V909.2z"
                  />
                  <path
                    className="st4"
                    d="M2190.5,909.2c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2
				L2190.5,909.2L2190.5,909.2z M2190.5,918c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9h-1.9
				v6.3h1.9V918z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2158.5,932.3c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2172.5,932.3,2158.5,932.3z
				 M2170.2,969.3c-17,13-36.3-6.3-23.3-23.3l0,0C2163.9,932.9,2183.2,952.2,2170.2,969.3C2170.2,969.2,2170.2,969.3,2170.2,969.3z"
                  />
                </g>
                <circle className="st6" cx="2158.5" cy="957.9" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="cambodia"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2255.1,962.5h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2267.6,956.9,2262,962.5,2255.1,962.5z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2165.1,954.8c-1.7,0-3.1-0.6-4.2-1.7c-1.1-1.1-1.7-2.5-1.7-4.2s0.6-3,1.7-4.2s2.5-1.7,4.2-1.7
				c1,0,1.9,0.2,2.8,0.7c0.9,0.5,1.5,1.1,2,1.9l-2.2,1.3c-0.2-0.4-0.6-0.8-1.1-1s-1-0.4-1.5-0.4c-1,0-1.8,0.3-2.4,0.9
				c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,0.9,2.4c0.6,0.6,1.4,0.9,2.4,0.9c0.6,0,1.1-0.1,1.5-0.4s0.8-0.6,1-1l2.2,1.3
				c-0.5,0.8-1.1,1.4-2,1.9C2167,954.6,2166.1,954.8,2165.1,954.8z"
                  />
                  <path
                    className="st4"
                    d="M2178.4,954.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2178.4z M2174.3,950.5h2.7l-1.4-4.1
				L2174.3,950.5z"
                  />
                  <path
                    className="st4"
                    d="M2193.2,943.4v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H2193.2z"
                  />
                  <path
                    className="st4"
                    d="M2202,948.8c0.9,0.6,1.4,1.4,1.4,2.5c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.6,0.9-2.6,0.9h-4.7v-11.2h4.4
				c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.4,1,2.3C2203,947.5,2202.7,948.2,2202,948.8z M2199.5,945.8h-1.8v2h1.8c0.3,0,0.5-0.1,0.7-0.3
				s0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7S2199.8,945.8,2199.5,945.8z M2199.8,952.2c0.3,0,0.6-0.1,0.8-0.3s0.3-0.5,0.3-0.8
				s-0.1-0.6-0.3-0.8s-0.4-0.3-0.8-0.3h-2.1v2.1L2199.8,952.2L2199.8,952.2z"
                  />
                  <path
                    className="st4"
                    d="M2214.2,953.2c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7c-1.1-1.1-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1
				c1.1-1.1,2.5-1.7,4.1-1.7s3,0.6,4.1,1.7c1.1,1.1,1.7,2.5,1.7,4.1S2215.3,952,2214.2,953.2z M2207.7,951.4
				c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9
				c-0.6,0.6-0.9,1.4-0.9,2.4S2207.1,950.8,2207.7,951.4z"
                  />
                  <path
                    className="st4"
                    d="M2221.8,943.4c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2
				L2221.8,943.4L2221.8,943.4z M2221.8,952.2c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9
				h-1.9v6.3h1.9V952.2z"
                  />
                  <path
                    className="st4"
                    d="M2228.7,943.4h2.6v11.2h-2.6V943.4z"
                  />
                  <path
                    className="st4"
                    d="M2240.4,954.6l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2240.4z M2236.3,950.5h2.7l-1.4-4.1
				L2236.3,950.5z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2201,966.5c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2215,966.5,2201,966.5z
				 M2212.7,1003.5c-17,13-36.3-6.3-23.3-23.3l0,0C2206.4,967.1,2225.6,986.4,2212.7,1003.5
				C2212.7,1003.4,2212.7,1003.5,2212.7,1003.5z"
                  />
                </g>
                <circle className="st6" cx="2201" cy="992.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="vietnam"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2316.3,986.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2328.8,981.3,2323.2,986.9,2316.3,986.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2232.3,979l-3.5-11.2h2.8l2.5,8.3l2.5-8.3h2.6l-3.4,11.2H2232.3z"
                  />
                  <path className="st4" d="M2240.3,967.8h2.6V979h-2.6V967.8z" />
                  <path
                    className="st4"
                    d="M2247.4,976.6h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4v1.9H2247.4z"
                  />
                  <path
                    className="st4"
                    d="M2260.8,967.8v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H2260.8z"
                  />
                  <path
                    className="st4"
                    d="M2268.2,967.8h2.6V979h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V967.8z"
                  />
                  <path
                    className="st4"
                    d="M2280,979l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2280z M2275.8,974.9h2.7l-1.4-4.1
				L2275.8,974.9z"
                  />
                  <path
                    className="st4"
                    d="M2294.7,967.8V979h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H2294.7z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2262.2,990.9c-14,0-25.3,11.3-25.3,25.3c0,14,25.3,41,25.3,41s25.3-27,25.3-41S2276.2,990.9,2262.2,990.9z
				 M2273.9,1027.9c-17,13-36.3-6.3-23.3-23.3l0,0C2267.6,991.5,2286.9,1010.8,2273.9,1027.9L2273.9,1027.9z"
                  />
                </g>
                <circle className="st6" cx="2262.2" cy="1016.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="singapore"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2279.2,1118.9H2171c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2c6.9,0,12.5,5.6,12.5,12.5
			l0,0C2291.7,1113.3,2286.1,1118.9,2279.2,1118.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2185.8,1111.2c-1.1,0-2.1-0.2-2.9-0.7c-0.8-0.5-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6
				c1,0,1.5-0.3,1.5-0.9c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				s-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6s1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1s-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				c0.3,0.2,0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C2188.1,1110.9,2187.1,1111.2,2185.8,1111.2z"
                  />
                  <path
                    className="st4"
                    d="M2191.2,1099.8h2.6v11.2h-2.6V1099.8z"
                  />
                  <path
                    className="st4"
                    d="M2201.9,1099.8h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1099.8z"
                  />
                  <path
                    className="st4"
                    d="M2217.5,1104.8v1c0,1.7-0.5,3-1.6,4c-1,1-2.4,1.5-4,1.5c-1.7,0-3.2-0.6-4.3-1.7s-1.7-2.5-1.7-4.1
				s0.6-3,1.7-4.1c1.1-1.1,2.5-1.7,4.2-1.7c1,0,2,0.2,2.9,0.7s1.5,1.1,2,1.9l-2.2,1.2c-0.2-0.4-0.6-0.7-1.1-0.9
				c-0.5-0.2-1-0.4-1.6-0.4c-0.9,0-1.7,0.3-2.4,0.9c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,1,2.4c0.6,0.6,1.5,0.9,2.6,0.9
				c1.5,0,2.4-0.6,2.9-1.7h-3v-2.2h5.5V1104.8z"
                  />
                  <path
                    className="st4"
                    d="M2225.8,1111l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2225.8z M2221.7,1106.8h2.7l-1.4-4.1
				L2221.7,1106.8z"
                  />
                  <path
                    className="st4"
                    d="M2233.7,1099.8c1.1,0,2,0.4,2.8,1.1s1.1,1.7,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.8,0.7-1.7,1.1-2.8,1.1h-1.7v3.5
				h-2.6v-11.2h4.3V1099.8z M2233.7,1105.1c0.4,0,0.7-0.1,1-0.4s0.4-0.6,0.4-1s-0.1-0.7-0.4-1c-0.3-0.3-0.6-0.4-1-0.4h-1.7v2.9
				L2233.7,1105.1L2233.7,1105.1z"
                  />
                  <path
                    className="st4"
                    d="M2248.2,1109.5c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1
				c1.1-1.1,2.5-1.7,4.1-1.7s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S2249.4,1108.4,2248.2,1109.5z M2241.8,1107.8c0.6,0.6,1.4,0.9,2.3,0.9
				s1.7-0.3,2.3-0.9s0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9s-0.9,1.4-0.9,2.4
				S2241.2,1107.2,2241.8,1107.8z"
                  />
                  <path
                    className="st4"
                    d="M2257.3,1111l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1s1.1,1.7,1.1,2.7c0,0.7-0.2,1.3-0.6,1.9
				c-0.4,0.6-0.9,1-1.5,1.4l2.4,4.1H2257.3z M2253.9,1102.2v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1
				c-0.2-0.3-0.6-0.4-0.9-0.4L2253.9,1102.2L2253.9,1102.2z"
                  />
                  <path
                    className="st4"
                    d="M2263.8,1108.5h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4v1.9H2263.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2225.1,1122.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2239.1,1122.8,2225.1,1122.8z
				 M2236.8,1159.8c-17,13-36.3-6.3-23.3-23.3l0,0C2230.5,1123.5,2249.8,1142.8,2236.8,1159.8L2236.8,1159.8z"
                  />
                </g>
                <circle className="st6" cx="2225.1" cy="1148.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="indonesia"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2402.4,1229.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2414.9,1224.3,2409.4,1229.9,2402.4,1229.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2307.8,1210.8h2.6v11.2h-2.6V1210.8z"
                  />
                  <path
                    className="st4"
                    d="M2318.5,1210.8h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1210.8z"
                  />
                  <path
                    className="st4"
                    d="M2327.5,1210.8c1.5,0,2.8,0.5,3.9,1.6c1,1.1,1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5
				v-11.2H2327.5z M2327.5,1219.5c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9h-1.9v6.3h1.9
				V1219.5z"
                  />
                  <path
                    className="st4"
                    d="M2343.8,1220.5c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7s-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1s2.5-1.7,4.1-1.7
				s3,0.6,4.1,1.7s1.7,2.5,1.7,4.1S2344.9,1219.4,2343.8,1220.5z M2337.4,1218.8c0.6,0.6,1.4,0.9,2.3,0.9c0.9,0,1.7-0.3,2.3-0.9
				s0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9c-0.9,0-1.7,0.3-2.3,0.9s-0.9,1.4-0.9,2.4
				S2336.7,1218.2,2337.4,1218.8z"
                  />
                  <path
                    className="st4"
                    d="M2353.2,1210.8h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1210.8z"
                  />
                  <path
                    className="st4"
                    d="M2360.2,1219.5h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4v1.9H2360.2z"
                  />
                  <path
                    className="st4"
                    d="M2370.1,1222.2c-1.1,0-2.1-0.2-2.9-0.7c-0.8-0.5-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6
				c1,0,1.5-0.3,1.5-0.9c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4s-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				s-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6s1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				c0.3,0.2,0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C2372.3,1221.9,2371.3,1222.2,2370.1,1222.2z"
                  />
                  <path
                    className="st4"
                    d="M2375.4,1210.8h2.6v11.2h-2.6V1210.8z"
                  />
                  <path
                    className="st4"
                    d="M2387.2,1222l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2387.2z M2383.1,1217.8h2.7l-1.4-4.1
				L2383.1,1217.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2348.4,1233.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2362.3,1233.8,2348.4,1233.8z
				 M2360,1270.8c-17,13-36.3-6.3-23.3-23.3l0,0C2353.7,1234.5,2373,1253.8,2360,1270.8L2360,1270.8z"
                  />
                </g>
                <circle className="st6" cx="2348.4" cy="1259.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="australia"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2474.8,1445.8h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2487.3,1440.2,2481.7,1445.8,2474.8,1445.8z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2387.4,1437.9l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2387.4z M2383.3,1433.8h2.7l-1.4-4.1
				L2383.3,1433.8z"
                  />
                  <path
                    className="st4"
                    d="M2398,1437.1c-0.8,0.7-1.8,1-3.1,1s-2.3-0.3-3.1-1s-1.2-1.6-1.2-2.8v-7.6h2.6v7.4c0,1,0.6,1.6,1.8,1.6
				s1.8-0.5,1.8-1.6v-7.4h2.6v7.6C2399.3,1435.5,2398.9,1436.4,2398,1437.1z"
                  />
                  <path
                    className="st4"
                    d="M2405,1438.2c-1.1,0-2.1-0.2-2.9-0.7c-0.8-0.5-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6
				c1,0,1.5-0.3,1.5-0.9c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				s-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6s1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1s-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				c0.3,0.2,0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C2407.3,1437.8,2406.3,1438.2,2405,1438.2z"
                  />
                  <path
                    className="st4"
                    d="M2417.6,1426.7v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H2417.6z"
                  />
                  <path
                    className="st4"
                    d="M2424.6,1437.9l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1s1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9s-0.9,1-1.5,1.4l2.4,4.1H2424.6z M2421.3,1429.1v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4s0.4-0.6,0.4-1
				s-0.1-0.7-0.4-1c-0.3-0.3-0.6-0.4-0.9-0.4L2421.3,1429.1L2421.3,1429.1z"
                  />
                  <path
                    className="st4"
                    d="M2435.8,1437.9l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2435.8z M2431.7,1433.8h2.7l-1.4-4.1
				L2431.7,1433.8z"
                  />
                  <path
                    className="st4"
                    d="M2442,1435.5h4v2.5h-6.6v-11.2h2.6V1435.5z"
                  />
                  <path
                    className="st4"
                    d="M2447.1,1426.7h2.6v11.2h-2.6V1426.7z"
                  />
                  <path
                    className="st4"
                    d="M2458.9,1437.9l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2458.9z M2454.7,1433.8h2.7l-1.4-4.1
				L2454.7,1433.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2420.7,1449.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2434.7,1449.8,2420.7,1449.8z
				 M2432.4,1486.8c-17,13-36.3-6.3-23.3-23.3l0,0C2426.1,1450.4,2445.3,1469.7,2432.4,1486.8L2432.4,1486.8z"
                  />
                </g>
                <circle className="st6" cx="2420.7" cy="1475.4" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="sri-lanka"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2025.9,1019.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2038.4,1014.3,2032.9,1019.9,2025.9,1019.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1937.8,1012.2c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4s0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9c0.2,0.4,0.2,0.8,0.2,1.2
				c0,1.1-0.4,1.9-1.2,2.5C1940.1,1011.9,1939,1012.2,1937.8,1012.2z"
                  />
                  <path
                    className="st4"
                    d="M1949.1,1012l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9s-0.9,1-1.5,1.4l2.4,4.1H1949.1z M1945.7,1003.2v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4c0.2-0.3,0.4-0.6,0.4-1
				s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L1945.7,1003.2L1945.7,1003.2z"
                  />
                  <path
                    className="st4"
                    d="M1953,1000.8h2.6v11.2h-2.6V1000.8z"
                  />
                  <path
                    className="st4"
                    d="M1964.1,1009.5h4v2.5h-6.6v-11.2h2.6V1009.5z"
                  />
                  <path
                    className="st4"
                    d="M1976.8,1012l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1976.8z M1972.7,1007.8h2.7l-1.4-4.1
				L1972.7,1007.8z"
                  />
                  <path
                    className="st4"
                    d="M1986.6,1000.8h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V1000.8z"
                  />
                  <path
                    className="st4"
                    d="M2000.1,1012h-2.9l-3.6-5.2v5.2h-2.6v-11.2h2.6v4.9l3.4-4.9h2.9l-3.8,5.5L2000.1,1012z"
                  />
                  <path
                    className="st4"
                    d="M2008.7,1012l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2008.7z M2004.6,1007.8h2.7l-1.4-4.1
				L2004.6,1007.8z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1971.9,1023.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1985.8,1023.8,1971.9,1023.8z
				 M1983.5,1060.8c-17,13-36.3-6.3-23.3-23.3l0,0C1977.2,1024.5,1996.5,1043.8,1983.5,1060.8L1983.5,1060.8z"
                  />
                </g>
                <circle className="st6" cx="1971.9" cy="1049.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="maldives"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M1957.9,1118.9h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C1970.4,1113.3,1964.8,1118.9,1957.9,1118.9z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M1878,1099.8v11.2h-2.6v-6.5l-2.9,4.8h-0.3l-2.9-4.8v6.5h-2.6v-11.2h2.6l3,5l3-5H1878z"
                  />
                  <path
                    className="st4"
                    d="M1887.3,1111l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H1887.3z M1883.1,1106.8h2.7l-1.4-4.1
				L1883.1,1106.8z"
                  />
                  <path
                    className="st4"
                    d="M1893.4,1108.5h4v2.5h-6.6v-11.2h2.6V1108.5z"
                  />
                  <path
                    className="st4"
                    d="M1903,1099.8c1.5,0,2.8,0.5,3.9,1.6s1.6,2.4,1.6,4s-0.5,2.9-1.6,4c-1,1.1-2.3,1.6-3.9,1.6h-4.5v-11.2H1903z
				 M1903,1108.5c0.9,0,1.6-0.3,2.2-0.9c0.5-0.6,0.8-1.3,0.8-2.3s-0.3-1.7-0.8-2.3s-1.3-0.9-2.2-0.9h-1.9v6.3h1.9V1108.5z"
                  />
                  <path
                    className="st4"
                    d="M1909.9,1099.8h2.6v11.2h-2.6V1099.8z"
                  />
                  <path
                    className="st4"
                    d="M1916.9,1111l-3.5-11.2h2.8l2.5,8.3l2.5-8.3h2.6l-3.4,11.2H1916.9z"
                  />
                  <path
                    className="st4"
                    d="M1927.5,1108.5h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4L1927.5,1108.5L1927.5,1108.5z"
                  />
                  <path
                    className="st4"
                    d="M1937.3,1111.2c-1.1,0-2.1-0.2-2.9-0.7s-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6c1,0,1.5-0.3,1.5-0.9
				c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4c-0.4-0.2-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				c-0.2-0.4-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5s1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				s0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4s0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9c0.2,0.4,0.2,0.8,0.2,1.2
				c0,1.1-0.4,1.9-1.2,2.5C1939.6,1110.9,1938.6,1111.2,1937.3,1111.2z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M1903.8,1122.8c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S1917.8,1122.8,1903.8,1122.8z
				 M1915.5,1159.8c-17,13-36.3-6.3-23.3-23.3l0,0C1909.2,1123.5,1928.5,1142.8,1915.5,1159.8L1915.5,1159.8z"
                  />
                </g>
                <circle className="st6" cx="1903.8" cy="1148.5" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="china"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2259.8,689.5h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2272.3,683.9,2266.7,689.5,2259.8,689.5z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2188,681.9c-1.7,0-3.1-0.6-4.2-1.7c-1.1-1.1-1.7-2.5-1.7-4.2s0.6-3,1.7-4.2c1.1-1.1,2.5-1.7,4.2-1.7
				c1,0,1.9,0.2,2.8,0.7c0.9,0.5,1.5,1.1,2,1.9l-2.2,1.3c-0.2-0.4-0.6-0.8-1.1-1s-1-0.4-1.5-0.4c-1,0-1.8,0.3-2.4,0.9
				c-0.6,0.6-0.9,1.4-0.9,2.4s0.3,1.8,0.9,2.4c0.6,0.6,1.4,0.9,2.4,0.9c0.6,0,1.1-0.1,1.5-0.4c0.5-0.2,0.8-0.6,1-1l2.2,1.3
				c-0.5,0.8-1.1,1.4-2,1.9C2189.9,681.6,2189,681.9,2188,681.9z"
                  />
                  <path
                    className="st4"
                    d="M2200,670.5h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V670.5z"
                  />
                  <path
                    className="st4"
                    d="M2204.5,670.5h2.6v11.2h-2.6V670.5z"
                  />
                  <path
                    className="st4"
                    d="M2215.2,670.5h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V670.5z"
                  />
                  <path
                    className="st4"
                    d="M2227,681.7l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2227z M2222.9,677.5h2.7l-1.4-4.1
				L2222.9,677.5z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2205.7,693.5c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2219.7,693.5,2205.7,693.5z
				 M2217.4,730.5c-17,13-36.3-6.3-23.3-23.3l0,0C2211.1,694.2,2230.4,713.4,2217.4,730.5L2217.4,730.5z"
                  />
                </g>
                <circle className="st6" cx="2205.7" cy="719.1" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="south-korea"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2531.3,691.4h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5h108.2
			c6.9,0,12.5,5.6,12.5,12.5l0,0C2543.8,685.8,2538.2,691.4,2531.3,691.4z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2428.4,683.7c-1.1,0-2.1-0.2-2.9-0.7c-0.8-0.5-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6
				c1,0,1.5-0.3,1.5-0.9c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4s-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				s-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				c0.3,0.2,0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C2430.6,683.4,2429.6,683.7,2428.4,683.7z"
                  />
                  <path
                    className="st4"
                    d="M2443.2,682c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7c-1.1-1.1-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1
				c1.1-1.1,2.5-1.7,4.1-1.7s3,0.6,4.1,1.7c1.1,1.1,1.7,2.5,1.7,4.1S2444.3,680.9,2443.2,682z M2436.7,680.3
				c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9
				c-0.6,0.6-0.9,1.4-0.9,2.4S2436.1,679.7,2436.7,680.3z"
                  />
                  <path
                    className="st4"
                    d="M2453.6,682.7c-0.8,0.7-1.8,1-3.1,1s-2.3-0.3-3.1-1s-1.2-1.6-1.2-2.8v-7.6h2.6v7.4c0,1,0.6,1.6,1.8,1.6
				s1.8-0.5,1.8-1.6v-7.4h2.6v7.6C2454.8,681.1,2454.4,682,2453.6,682.7z"
                  />
                  <path
                    className="st4"
                    d="M2464.2,672.3v2.5h-2.9v8.7h-2.6v-8.7h-2.9v-2.5H2464.2z"
                  />
                  <path
                    className="st4"
                    d="M2471.4,672.3h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V672.3z"
                  />
                  <path
                    className="st4"
                    d="M2488.9,683.5h-2.9l-3.6-5.2v5.2h-2.6v-11.2h2.6v4.9l3.4-4.9h2.9l-3.8,5.5L2488.9,683.5z"
                  />
                  <path
                    className="st4"
                    d="M2498.4,682c-1.1,1.1-2.5,1.7-4.1,1.7s-3-0.6-4.1-1.7c-1.1-1.1-1.7-2.5-1.7-4.1s0.6-3,1.7-4.1
				c1.1-1.1,2.5-1.7,4.1-1.7s3,0.6,4.1,1.7c1.1,1.1,1.7,2.5,1.7,4.1S2499.5,680.9,2498.4,682z M2491.9,680.3
				c0.6,0.6,1.4,0.9,2.3,0.9s1.7-0.3,2.3-0.9c0.6-0.6,0.9-1.4,0.9-2.4s-0.3-1.8-0.9-2.4c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7,0.3-2.3,0.9
				c-0.6,0.6-0.9,1.4-0.9,2.4S2491.3,679.7,2491.9,680.3z"
                  />
                  <path
                    className="st4"
                    d="M2507.4,683.5l-2.1-3.7h-1.2v3.7h-2.6v-11.2h4.5c1.1,0,2,0.4,2.7,1.1c0.7,0.7,1.1,1.7,1.1,2.7
				c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-0.9,1-1.5,1.4l2.4,4.1H2507.4z M2504.1,674.7v2.9h1.9c0.4,0,0.7-0.1,0.9-0.4s0.4-0.6,0.4-1
				s-0.1-0.7-0.4-1s-0.6-0.4-0.9-0.4L2504.1,674.7L2504.1,674.7z"
                  />
                  <path
                    className="st4"
                    d="M2513.9,681h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4v1.9H2513.9z"
                  />
                  <path
                    className="st4"
                    d="M2527.3,683.5l-0.6-1.8h-4.3l-0.6,1.8h-2.8l3.8-11.2h3.3l3.8,11.2H2527.3z M2523.2,679.3h2.7l-1.4-4.1
				L2523.2,679.3z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2477.2,695.3c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2491.2,695.3,2477.2,695.3z
				 M2488.8,732.3c-17,13-36.3-6.3-23.3-23.3l0,0C2482.6,696,2501.8,715.3,2488.8,732.3L2488.8,732.3z"
                  />
                </g>
                <circle className="st6" cx="2477.2" cy="721" r="15.6" />
              </g>
            </motion.g>
            <motion.g
              id="philippines"
              initial={{ scale: 1 }}
              whileHover={{ scale: 2 }}
              className="country-group"
            >
              <g className="market-map-text">
                <path
                  className="st2"
                  d="M2469,997.2h-108.2c-6.9,0-12.5-5.6-12.5-12.5l0,0c0-6.9,5.6-12.5,12.5-12.5H2469c6.9,0,12.5,5.6,12.5,12.5
			l0,0C2481.5,991.6,2475.9,997.2,2469,997.2z"
                />
                <g className="st3">
                  <path
                    className="st4"
                    d="M2375.9,978.1c1.1,0,2,0.4,2.8,1.1c0.8,0.7,1.1,1.7,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.8,0.7-1.7,1.1-2.8,1.1
				h-1.7v3.5h-2.6V978h4.3V978.1z M2375.9,983.4c0.4,0,0.7-0.1,1-0.4s0.4-0.6,0.4-1s-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-1.7v2.9
				L2375.9,983.4L2375.9,983.4z"
                  />
                  <path
                    className="st4"
                    d="M2387.1,978.1h2.6v11.2h-2.6v-4.4h-3.5v4.4h-2.6v-11.2h2.6v4.3h3.5V978.1z"
                  />
                  <path
                    className="st4"
                    d="M2391.6,978.1h2.6v11.2h-2.6V978.1z"
                  />
                  <path
                    className="st4"
                    d="M2398.7,986.9h4v2.5h-6.6v-11.2h2.6V986.9z"
                  />
                  <path
                    className="st4"
                    d="M2403.8,978.1h2.6v11.2h-2.6V978.1z"
                  />
                  <path
                    className="st4"
                    d="M2412.5,978.1c1.1,0,2,0.4,2.8,1.1c0.8,0.7,1.1,1.7,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.8,0.7-1.7,1.1-2.8,1.1
				h-1.7v3.5h-2.6V978h4.3V978.1z M2412.5,983.4c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1c-0.3-0.3-0.6-0.4-1-0.4
				h-1.7v2.9L2412.5,983.4L2412.5,983.4z"
                  />
                  <path
                    className="st4"
                    d="M2421.9,978.1c1.1,0,2,0.4,2.8,1.1c0.8,0.7,1.1,1.7,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.8,0.7-1.7,1.1-2.8,1.1
				h-1.7v3.5h-2.6V978h4.3V978.1z M2421.9,983.4c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1s-0.1-0.7-0.4-1c-0.3-0.3-0.6-0.4-1-0.4
				h-1.7v2.9L2421.9,983.4L2421.9,983.4z"
                  />
                  <path
                    className="st4"
                    d="M2427.1,978.1h2.6v11.2h-2.6V978.1z"
                  />
                  <path
                    className="st4"
                    d="M2437.9,978.1h2.6v11.2h-1.9l-4.3-6.1v6.1h-2.6v-11.2h1.9l4.3,6.1V978.1z"
                  />
                  <path
                    className="st4"
                    d="M2444.9,986.9h4.5v2.5h-7v-11.2h7v2.5h-4.4v1.9h4v2.4h-4v1.9H2444.9z"
                  />
                  <path
                    className="st4"
                    d="M2454.7,989.6c-1.1,0-2.1-0.2-2.9-0.7c-0.8-0.5-1.3-1.2-1.6-2l2.2-1.3c0.4,1,1.2,1.6,2.4,1.6
				c1,0,1.5-0.3,1.5-0.9c0-0.3-0.2-0.6-0.5-0.8s-0.9-0.4-1.8-0.6c-0.5-0.1-0.9-0.3-1.2-0.4s-0.7-0.4-1-0.6s-0.6-0.6-0.8-1
				s-0.3-0.8-0.3-1.4c0-1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.9,2.6-0.9c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1.3,1.1,1.7,1.9l-2.2,1.3
				c-0.2-0.4-0.5-0.7-0.8-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.5,0.4,0.7
				c0.3,0.2,0.8,0.4,1.6,0.7c0.4,0.1,0.8,0.3,1,0.3c0.2,0.1,0.6,0.2,0.9,0.4c0.4,0.2,0.7,0.4,0.9,0.6s0.4,0.5,0.5,0.9
				c0.2,0.4,0.2,0.8,0.2,1.2c0,1.1-0.4,1.9-1.2,2.5C2457,989.3,2456,989.6,2454.7,989.6z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st4"
                    d="M2414.9,1001.2c-14,0-25.3,11.3-25.3,25.3s25.3,41,25.3,41s25.3-27,25.3-41S2428.9,1001.2,2414.9,1001.2z
				 M2426.6,1038.2c-17,13-36.3-6.3-23.3-23.3l0,0C2420.3,1001.9,2439.6,1021.1,2426.6,1038.2L2426.6,1038.2z"
                  />
                </g>
                <circle className="st6" cx="2414.9" cy="1026.8" r="15.6" />
              </g>
            </motion.g>
          </svg>
          {activePopup && (
            <WorldMapPopUp country={activePopup} onClose={closeOverlay} />
          )}
        </motion.div>
      </div>
    </>
  );
}

export default MarketMap;
