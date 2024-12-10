import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.scss";

function Layout() {
  const [activePopup, setActivePopup] = useState(null);

  const openOverlay = (popupName) => {
    setActivePopup(popupName);
  };

  const closeOverlay = () => {
    setActivePopup(null);
  };

  return (
    <>
      <header className="navbar">
        <nav>
          {/* LOGO */}
          <div>
            <Link to="/">
              <img
                className="nav-logo"
                src="./hyraxoil33.png"
                alt="Hyrax Oil Logo"
              />
            </Link>
          </div>

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
        </nav>

        {/* NAV OVERLAY DESKTOP*/}
        {activePopup && (
          <div className="nav-outer" onClick={closeOverlay}>
            <div
              className="nav-overlay"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              {activePopup === "about" && <p>About content goes here.</p>}
              {activePopup === "products" && <p>Products content goes here.</p>}
              {activePopup === "services" && <p>Services content goes here.</p>}
              {activePopup === "media" && <p>Media content goes here.</p>}
            </div>
          </div>
        )}
      </header>

      <Outlet />
    </>
  );
}

export default Layout;
