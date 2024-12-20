import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.scss";
import NavCard from "./navbar/NavOverlay";
import { productSegments } from "./navbar/components/nav-products/NavProductSegments";
import { productSegments2 } from "./navbar/components/nav-products/NavProductSegments2";
import { aboutSections } from "./navbar/components/nav-about/NavAboutSections";
import { servicesSections } from "./navbar/components/nav-services/NavServicesSections";
import { mediaSections } from "./navbar/components/nav-media/NavMediaSections";

function Layout() {
  const [activePopup, setActivePopup] = useState(null);

  const openOverlay = (popupName) => {
    setActivePopup(popupName);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  const [isActive, setIsActive] = useState(false);

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
      const wasMobileView = activePopup || isActive;

      // If the screen size changes across the threshold, reset states
      if (
        (isMobileView && !wasMobileView) ||
        (!isMobileView && wasMobileView)
      ) {
        setActivePopup(false);
        setIsActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activePopup, isActive]);

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
            className={`${activePopup === "about" ? "link-active" : ""}`}
          >
            <Link to="#">About</Link>
          </li>

          <li
            onClick={() => openOverlay("products")}
            className={`${activePopup === "products" ? "link-active" : ""}`}
          >
            <Link to="#">Products</Link>
          </li>

          <li
            onClick={() => openOverlay("services")}
            className={`${activePopup === "services" ? "link-active" : ""}`}
          >
            <Link to="#">Services</Link>
          </li>

          <li
            onClick={() => openOverlay("media")}
            className={`${activePopup === "media" ? "link-active" : ""}`}
          >
            <Link to="#">Media</Link>
          </li>
        </ul>

        {/* NAVIGATION BUTTONS */}
        <div className={`nav-buttons ${isActive ? "active" : ""}`}>
          <Link className="button-type-2" to="/careers">
            Careers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M13 6L7.85714 1M13 6L7.85714 11M13 6H1"
                stroke="#f26f27"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link className="button-type-1" to="/contact">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M13 6L7.85714 1M13 6L7.85714 11M13 6H1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
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
          <div className="nav-outer" onClick={closeOverlay}></div>

          <div
            className="nav-overlay"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
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
                <div className="nav-card-layout">
                  {aboutSections.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                    />
                  ))}
                </div>
              </>
            )}
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
                <div className="nav-card-layout">
                  {productSegments.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                    />
                  ))}
                </div>
                {/* <div className="nav-card-layout">
                  {productSegments2.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                    />
                  ))}
                </div> */}
              </>
            )}
            {activePopup === "services" && (
              <>
                <div className="nav-card-layout">
                  {servicesSections.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                    />
                  ))}
                </div>
              </>
            )}
            {activePopup === "media" && (
              <>
                <div className="nav-card-layout">
                  {mediaSections.map((segment, index) => (
                    <NavCard
                      key={index}
                      src={segment.src}
                      alt={segment.alt}
                      title={segment.title}
                      link={segment.link}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}

      <Outlet />
    </>
  );
}

export default Layout;
