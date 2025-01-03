import React from "react";
import "./footer.scss";
import { motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-segments">
            <div className="footer-item">
              <h3>Menu</h3>
              <Link to="#">Our Products</Link>
              <Link to="#">Our Quality</Link>
              <Link to="#">Market</Link>
              <Link to="#">About Us</Link>
              <Link to="#">Our Leaders</Link>
              <Link to="#">Services</Link>
              <Link to="#">Blending Plants</Link>
              <Link to="#">Info</Link>
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

              <h3>Factory</h3>
              <Link
                to="https://www.google.com/maps?ll=3.123462,101.441422&z=11&t=m&hl=en&gl=MY&mapclient=embed&cid=5472883420717197171"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <h3>Contact Us</h3>
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
              <Link
                to="https://www.linkedin.com/company/hyrax-oil-sdn-bhd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white socials-img"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </Link>
              <Link
                to="https://www.facebook.com/p/Hyrax-Oil-Sdn-Bhd-100040808545864/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white socials-img"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="https://www.instagram.com/hyraxoilofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white socials-img"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="https://www.youtube.com/@hyraxoilofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white socials-img"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                to="https://www.tiktok.com/@hyraxoilofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white socials-img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="footer-copyright">
            <span>
              &copy; {new Date().getFullYear()} Hyrax Oil Sdn Bhd 199101017905
              &#40;228216-K&#41; &#124; All Rights Reserved
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

      <Outlet />
    </>
  );
}

export default Footer;
