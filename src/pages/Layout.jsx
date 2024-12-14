import React, { useState } from "react";
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

  return (
    <>
      <header className="navbar">
        <nav className={`${isActive ? "active" : ""}`}>
          {/* LOGO */}
          <Link to="/">
            <img
              className="nav-logo"
              src="./hyraxoil33.png"
              alt="Hyrax Oil Logo"
            />
          </Link>

          {/* NAVIGATION LINKS */}
          <ul className="nav-list">
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
          <div className="nav-buttons">
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
          <div className="nav-outer" onClick={closeOverlay}>
            <div
              className="nav-overlay"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              {activePopup === "about" && (
                <>
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
                  <div className="nav-overlay-logos">
                    <img
                      src="./hyrax-logo.png"
                      alt="hyrax brand logo"
                      className="nav-overlay-logo"
                    />
                    <img
                      src="./api.png"
                      alt="American Petroleum Institute Logo"
                      className="nav-overlay-logo"
                    />
                    <img
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
                  <div className="nav-card-layout">
                    {productSegments2.map((segment, index) => (
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
          </div>
        )}
      </header>

      <Outlet />
    </>
  );
}

export default Layout;
