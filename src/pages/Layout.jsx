import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.scss";
import NavCard from "./navbar/NavCard";
import { productSegments } from "./navbar/components/nav-products/NavProductSegments";
import { aboutSections } from "./navbar/components/nav-about/NavAboutSections";
import { servicesSections } from "./navbar/components/nav-services/NavServicesSections";
import { mediaSections } from "./navbar/components/nav-media/NavMediaSections";
import { motion } from "framer-motion";
import ButtonRouter from "./components/buttons/ButtonRouter";

function Layout() {
  const [activePopup, setActivePopup] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const prevIsMobileView = useRef(
    window.matchMedia("(max-width: 1024px)").matches
  );
  const [initialX, setInitialX] = useState(0);
  const navOverlayRef = useRef(null);

  const openOverlay = (popupName) => {
    setActivePopup(popupName);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Disables background scrolling whenever activePopup or isActive is true
  useEffect(() => {
    const shouldDisableScroll =
      (activePopup || isActive) &&
      window.matchMedia("(max-width: 1024px)").matches;

    if (shouldDisableScroll) {
      document.body.classList.add("no-scroll"); // Disable background scrolling
    } else {
      document.body.classList.remove("no-scroll"); // Enable scrolling when neither is active
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Clean up in case component unmounts
    };
  }, [activePopup, isActive]);

  // Sets both isActive and activePopup to false whenever screen size is changed
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.matchMedia("(max-width: 1024px)").matches;

      // If the screen size changes across the threshold, reset states
      if (isMobileView !== prevIsMobileView.current) {
        setActivePopup(false);
        setIsActive(false);
      }

      // Update the previous state
      prevIsMobileView.current = isMobileView;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activePopup, isActive]);

  // Close nav-overlay when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navOverlayRef.current &&
        !navOverlayRef.current.contains(event.target)
      ) {
        closeOverlay();
      }
    };

    if (activePopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopup]);

  // Update initialX based on screen size
  useEffect(() => {
    const updateInitialX = () => {
      if (window.innerWidth <= 1024) {
        setInitialX(500);
      } else {
        setInitialX(0);
      }
    };

    updateInitialX();
    window.addEventListener("resize", updateInitialX);

    return () => {
      window.removeEventListener("resize", updateInitialX);
    };
  }, []);

  return (
    <>
      <nav className={`${isActive ? "active" : ""}`}>
        {/* LOGO */}
        <Link to="/">
          <img
            loading="lazy"
            className="nav-logo"
            src="./hyraxoil33.png"
            alt="Hyrax Oil Logo"
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-list ${isActive ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li
            onClick={() => openOverlay("about")}
            onMouseEnter={() => openOverlay("about")}
            className={`${activePopup === "about" ? "link-active" : ""}`}
          >
            <Link to="#">About</Link>
          </li>

          <li
            onClick={() => openOverlay("products")}
            onMouseEnter={() => openOverlay("products")}
            className={`${activePopup === "products" ? "link-active" : ""}`}
          >
            <Link to="#">Products</Link>
          </li>

          <li
            onClick={() => openOverlay("services")}
            onMouseEnter={() => openOverlay("services")}
            className={`${activePopup === "services" ? "link-active" : ""}`}
          >
            <Link to="#">Services</Link>
          </li>

          <li
            onClick={() => openOverlay("media")}
            onMouseEnter={() => openOverlay("media")}
            className={`${activePopup === "media" ? "link-active" : ""}`}
          >
            <Link to="#">Media</Link>
          </li>
        </ul>

        {/* NAVIGATION BUTTONS */}
        <div className={`nav-buttons ${isActive ? "active" : ""}`}>
          <ButtonRouter name="Careers" link="/careers" type="button-type-2" />

          <ButtonRouter
            name="Contact Us"
            link="/contact"
            type="button-type-1"
          />
        </div>

        {/* MOBILE NAVIGATION */}
        <button
          className={`hamburger-icon ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 70"
            width="40"
            height="40"
            className="hamburger-svg"
          >
            <rect className="line top" width="100" height="10" rx="5"></rect>
            <rect
              className="line middle"
              y="30"
              width="100"
              height="10"
              rx="5"
            ></rect>
            <rect
              className="line bottom"
              y="60"
              width="100"
              height="10"
              rx="5"
            ></rect>
          </svg>
        </button>
      </nav>

      {/* NAV OVERLAY DESKTOP*/}
      {activePopup && (
        <>
          <motion.div
            className={"nav-overlay"}
            ref={navOverlayRef}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            initial={{ opacity: 0, x: initialX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* =============== */}
            {/* ABOUT */}
            {/* =============== */}
            {activePopup === "about" && (
              <>
                <div className="nav-overlay-header">
                  <svg
                    onClick={closeOverlay}
                    className="back-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 19-7-7 7-7"
                    />
                  </svg>

                  <h2>About</h2>
                </div>
                <ul className="nav-card-layout">
                  {aboutSections.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                      styleLink="nav-card"
                      styleOverlay="nav-card-overlay"
                    />
                  ))}
                </ul>
              </>
            )}

            {/* =============== */}
            {/* PRODUCTS */}
            {/* =============== */}
            {activePopup === "products" && (
              <>
                <div className="nav-overlay-header">
                  <svg
                    onClick={closeOverlay}
                    className="back-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 19-7-7 7-7"
                    />
                  </svg>

                  <h2>Products</h2>
                </div>
                <div className="nav-overlay-logos">
                  <img
                    loading="lazy"
                    src="./hyrax-logo.png"
                    alt="hyrax brand logo"
                    className="nav-overlay-logo"
                  />
                  <img
                    loading="lazy"
                    src="./api.png"
                    alt="American Petroleum Institute Logo"
                    className="nav-overlay-logo"
                  />
                  <img
                    loading="lazy"
                    src="./malaysian-brand.png"
                    alt="Malaysian Brand Logo"
                    className="nav-overlay-logo"
                  />
                </div>
                <ul className="nav-card-layout">
                  {productSegments.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                      styleLink="nav-card"
                      styleOverlay="nav-card-overlay"
                    />
                  ))}
                </ul>
              </>
            )}

            {/* =============== */}
            {/* SERVICES */}
            {/* =============== */}
            {activePopup === "services" && (
              <>
                <div className="nav-overlay-header">
                  <svg
                    onClick={closeOverlay}
                    className="back-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 19-7-7 7-7"
                    />
                  </svg>

                  <h2>Services</h2>
                </div>
                <ul className="nav-card-layout">
                  {servicesSections.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                      styleLink="nav-card"
                      styleOverlay="nav-card-overlay"
                    />
                  ))}
                </ul>
              </>
            )}

            {/* =============== */}
            {/* MEDIA */}
            {/* =============== */}
            {activePopup === "media" && (
              <>
                <div className="nav-overlay-header">
                  <svg
                    onClick={closeOverlay}
                    className="back-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 19-7-7 7-7"
                    />
                  </svg>

                  <h2>Media</h2>
                </div>
                <ul className="nav-card-layout">
                  {mediaSections.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                      styleLink="nav-card"
                      styleOverlay="nav-card-overlay"
                    />
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </>
      )}

      <Outlet />
    </>
  );
}

export default Layout;
