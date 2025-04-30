import React, { useState } from "react";
import "./footer.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";
import SocialLink from "./components/social-link/SocialLink";
import { socialLinks } from "./components/social-link/socials";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [activePopup, setActivePopup] = useState(false);

  const showBTT = () => {
    setActivePopup(true);
  };

  const hideBTT = () => {
    setActivePopup(false);
  };

  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-segments">
            <div className="footer-item">
              <h3>Quick Links</h3>
              <Link to="/about/the-company">The Company</Link>
              <Link to="/about/our-leaders">Our Leaders</Link>
              <Link to="/about/awards">Awards & Accreditations</Link>
              <Link to="/about/blending-plants">Blending Plants</Link>
              <Link to="#">Certifications & Compliance</Link>
              <Link to="/products">Our Products</Link>
              <Link to="/services">Our Services</Link>
            </div>

            <div className="footer-item">
              <h3>Head Office</h3>
              <Link
                to="https://www.google.com/maps/place/Hyrax+Oil+Sdn.+Bhd./data=!4m2!3m1!1s0x0:0x53085859f88dd00d?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
              >
                A-8-1, Megan Avenue II,
                <br />
                12, Jalan Yap Kwan Seng,
                <br />
                Kampung Baru,
                <br />
                50450 Kuala Lumpur,
                <br />
                Wilayah Persekutuan Kuala Lumpur.
              </Link>
              <br />

              <h3>Meru LOBP</h3>
              <Link
                to="https://www.google.com/maps?ll=3.123462,101.441422&z=11&t=m&hl=en&gl=MY&mapclient=embed&cid=5472883420717197171"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meru Lubricant Oil Blending Plant
                <br />
                Lot 4937 Batu 5 1/2, Jalan Meru,
                <br />
                Mukim Kapar,
                <br />
                Selangor Darul Ehsan, 41050 Klang,
                <br />
                Selangor
              </Link>
            </div>

            <div className="footer-item">
              <h3>Contact</h3>
              <span>
                <Link to="tel:+60321635893">Tel: &#40;+603&#41; 2163-5893</Link>
              </span>
              <span>
                <Link to="tel:+60321646577">Fax: &#40;+603&#41; 2164-6577</Link>
              </span>
              <span>
                <Link to="mailto:hyrax@hyraxoil.com">
                  Email: hyrax@hyraxoil.com
                </Link>
              </span>
            </div>

            <div className="footer-socials">
              {socialLinks.map((item, index) => (
                <SocialLink key={index} link={item.link} icon={item.icon} />
              ))}
            </div>
          </div>

          <div className="footer-copyright">
            <span>
              &copy; {new Date().getFullYear()} Hyrax Oil Sdn Bhd 199101017905
              &#40;228216-K&#41; <br />
              All Rights Reserved
            </span>

            {/* <div>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </div> */}

            <div className="footer-logos">
              <img
                className="footer-hyrax-logo"
                src="./hyrax-logo.png"
                alt="Hyrax Logo"
              />
              <img
                className="footer-hyraxoil-logo"
                src="./hyraxoil-logo.png"
                alt="Hyrax Oil Logo"
              />
            </div>
          </div>

          <Link
            to="#"
            onClick={scrollToTop}
            className="back-to-top"
            onMouseEnter={showBTT}
            onMouseLeave={hideBTT}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m16 17-4-4-4 4m8-6-4-4-4 4"
              />
            </svg>
            <AnimatePresence>
              {activePopup && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="back-to-top-hover"
                >
                  Back To Top
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Footer;
