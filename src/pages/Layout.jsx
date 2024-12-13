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
        </nav>

        {/* NAV OVERLAY DESKTOP*/}
        {activePopup && (
          <div className="nav-outer" onClick={closeOverlay}>
            <div
              className="nav-overlay"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              {activePopup === "about" && <div>About content goes here.</div>}
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
                    <div className="nav-card">
                      <img
                        src="./navbar/pcmo.png"
                        alt="passenger car motor oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Passenger Car Motor Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/gfeo.png"
                        alt="gas fuel engine oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Gas Fuel Engine Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/deo.png"
                        alt="diesel engine oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Diesel Engine Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/tractor.png"
                        alt="tractor fluids"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Tractor Fluids</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/4-stroke.png"
                        alt="four-stroke motorcycle oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Four-Stroke Motorcycle Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/2-stroke.png"
                        alt="two-stroke motorcycle & engine oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Two-Stroke Motorcycle & Engine Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/marine.png"
                        alt="marine & large engine oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Marine & Large Engine Oils</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-card-layout">
                    <div className="nav-card">
                      <img
                        src="./navbar/gear.png"
                        alt="Gear Oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Gear Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/transmission.png"
                        alt="Transmission Fluids"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Transmission Fluids</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/industrial.png"
                        alt="Industrial Oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Industrial Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/transformer.png"
                        alt="Transformer & Electrical Oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Transformer & Electrical Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/specialty.png"
                        alt="Specialty Oils"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Specialty Oils</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/brake.png"
                        alt="Brake Fluids"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Brake Fluids</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img
                        src="./navbar/grease.png"
                        alt="Greases"
                        className="nav-card-img"
                      />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Greases</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activePopup === "services" && (
                <>
                  <div className="nav-card-layout">
                    <div className="nav-card">
                      <img src="./pcmo.webp" alt="" className="nav-card-img" />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Oil Analysis & On-Site Services</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img src="./pcmo.webp" alt="" className="nav-card-img" />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Lab Testing</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img src="./pcmo.webp" alt="" className="nav-card-img" />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Industrial & Technical Training</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img src="./pcmo.webp" alt="" className="nav-card-img" />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Contract Manufacturing Services</h3>
                        </div>
                      </div>
                    </div>
                    <div className="nav-card">
                      <img src="./pcmo.webp" alt="" className="nav-card-img" />
                      <div className="nav-card-overlay">
                        <div className="nav-title">
                          <h3>Consultancy Services</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
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
