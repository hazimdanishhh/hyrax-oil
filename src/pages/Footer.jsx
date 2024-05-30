import React from "react";
import "./footer.scss";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-segments">
          <div className="footer-item">
            <h3>MENU</h3>
            <a href="#">Our Products</a>
            <a href="#">Our Quality</a>
            <a href="#">Market</a>
            <a href="#">About Us</a>
            <a href="#">Our Leaders</a>
            <a href="#">Services</a>
            <a href="#">Blending Plants</a>
            <a href="#">Info</a>
          </div>

          <div className="footer-item">
            <h3>HEAD OFFICE</h3>
            <span>A-8-1, Megan Avenue II,</span>
            <span>12, Jalan Yap Kwan Seng,</span>
            <span>Kampung Baru,</span>
            <span>50450 Kuala Lumpur,</span>
            <span>Wilayah Persekutuan Kuala Lumpur.</span>
          </div>

          <div className="footer-item">
            <h3>CONTACT US</h3>
            <span>
              <a href="tel:+60321635893">Tel: &#40;+603&#41; 2163-5893</a>
            </span>
            <span>
              <a href="tel:+60321646577">Fax: &#40;+603&#41; 2164-6577</a>
            </span>
            <span>
              <a href="mailto:hyrax@hyraxoil.com">Email: hyrax@hyraxoil.com</a>
            </span>
          </div>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/hyrax-oil-sdn-bhd/">
              <motion.img
                className="socials-img"
                src="linkedin.svg"
                alt="Linked In Logo"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              />
            </a>
            <a href="https://www.linkedin.com/company/hyrax-oil-sdn-bhd/">
              <motion.img
                className="socials-img"
                src="facebook.svg"
                alt="Facebook Logo"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              />
            </a>
            <a href="https://www.linkedin.com/company/hyrax-oil-sdn-bhd/">
              <motion.img
                className="socials-img"
                src="instagram.svg"
                alt="Instagram Logo"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              />
            </a>
            <a href="https://www.linkedin.com/company/hyrax-oil-sdn-bhd/">
              <motion.img
                className="socials-img"
                src="youtube.svg"
                alt="Youtube Logo"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              />
            </a>
          </div>
        </div>

        <div className="footer-summary">
          <h4>
            With <span>33 years of experience</span>, Hyrax Oil Sdn Bhd has
            grown to be a well-known and established manufacturer of full range{" "}
            <span>top quality lubricants and functional fluids</span>
          </h4>
        </div>

        <div className="footer-copyright">
          <span>
            &copy; {new Date().getFullYear()} Hyrax Oil Sdn Bhd 199101017905
            &#40;228216-K&#41; &#124; ALL RIGHTS RESERVED
          </span>
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
      </div>
    </div>
  );
}

export default Footer;
