import "./navbar.scss";
import NavCard from "../navCard/NavCard";
import { productSegments } from "../../data/NavProductSegments";
import { aboutSections } from "../../data/NavAboutSections";
import { servicesSections } from "../../data/NavServicesSections";
import { mediaSections } from "../../data/NavMediaSections";
import { AnimatePresence, motion } from "framer-motion";
import ButtonRouter from "../buttons/ButtonRouter";

import hyraxOil33Logo from "/src/assets/logos/hyraxOil33Years.webp";
import hyraxLogo from "/src/assets/logos/hyrax-logo.png";
import apiLogo from "/src/assets/logos/APILogo-Light.webp";
import malaysianBrandLogo from "/src/assets/logos/malaysian-brand.png";
import useNavbar from "/src/functions/useNavbar";
import {
  fadeInWithEase,
  staggerContainerFast,
} from "../../functions/motionUtils";

function Navbar() {
  const {
    activePopup,
    isActive,
    initialX,
    navOverlayRef,
    openOverlay,
    closeOverlay,
    toggleMenu,
  } = useNavbar();

  return (
    <>
      <nav className={`${isActive ? "active" : ""}`}>
        {/* LOGO */}
        <a href="/">
          <img
            loading="lazy"
            className="nav-logo"
            src={hyraxOil33Logo}
            alt="Hyrax Oil Logo"
          />
        </a>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-list ${isActive ? "active" : ""}`}>
          <li onMouseEnter={() => openOverlay(null)}>
            <a href="/">Home</a>
          </li>

          <li
            onClick={() => openOverlay("about")}
            onMouseEnter={() => openOverlay("about")}
            className={`${activePopup === "about" ? "link-active" : ""}`}
          >
            <button>About</button>
          </li>

          <li
            onClick={() => openOverlay("products")}
            onMouseEnter={() => openOverlay("products")}
            className={`${activePopup === "products" ? "link-active" : ""}`}
          >
            <button>Products</button>
          </li>

          <li
            onClick={() => openOverlay("services")}
            onMouseEnter={() => openOverlay("services")}
            className={`${activePopup === "services" ? "link-active" : ""}`}
          >
            <button>Services</button>
          </li>

          {/* <li
            onClick={() => openOverlay("media")}
            onMouseEnter={() => openOverlay("media")}
            className={`${activePopup === "media" ? "link-active" : ""}`}
          >
            <button>Media</button>
          </li> */}

          <li onMouseEnter={() => openOverlay(null)}>
            <a href="/media">Media</a>
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

        {/* MOBILE HAMBURGER ICON */}
        <button
          className={`hamburger-icon ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 70"
            width="24"
            height="24"
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

      {/* NAV OVERLAY MODAL DESKTOP & MOBILE*/}
      <AnimatePresence>
        {activePopup && (
          <>
            <motion.div
              className={"nav-overlay"}
              ref={navOverlayRef}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              onMouseLeave={closeOverlay}
              initial={{ opacity: 0, x: initialX }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: initialX }}
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
                  <motion.div
                    className="nav-overlay-overview-wrapper"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="/about"
                      className="nav-overlay-overview"
                      variants={fadeInWithEase}
                    >
                      About Us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                      </svg>
                    </motion.a>
                  </motion.div>
                  <motion.ul
                    className="nav-card-layout"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
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
                  </motion.ul>
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
                  <motion.div
                    className="nav-overlay-logos"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.img
                      loading="lazy"
                      src={hyraxLogo}
                      alt="hyrax brand logo"
                      className="nav-overlay-logo"
                      variants={fadeInWithEase}
                    />
                    <motion.img
                      loading="lazy"
                      src={apiLogo}
                      alt="American Petroleum Institute Logo"
                      className="nav-overlay-logo"
                      variants={fadeInWithEase}
                    />
                    <motion.img
                      loading="lazy"
                      src={malaysianBrandLogo}
                      alt="Malaysian Brand Logo"
                      className="nav-overlay-logo"
                      variants={fadeInWithEase}
                    />
                  </motion.div>
                  <motion.div
                    className="nav-overlay-overview-wrapper"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="/products"
                      className="nav-overlay-overview"
                      variants={fadeInWithEase}
                    >
                      Our Products
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                      </svg>
                    </motion.a>
                  </motion.div>
                  <motion.ul
                    className="nav-card-layout"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
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
                  </motion.ul>
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
                  <motion.div
                    className="nav-overlay-overview-wrapper"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="/services"
                      className="nav-overlay-overview"
                      variants={fadeInWithEase}
                    >
                      Our Services
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                      </svg>
                    </motion.a>
                  </motion.div>
                  <motion.ul
                    className="nav-card-layout"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
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
                  </motion.ul>
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
                  <motion.ul
                    className="nav-card-layout"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
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
                  </motion.ul>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
