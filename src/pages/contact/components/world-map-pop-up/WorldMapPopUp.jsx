import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./WorldMapPopUp.scss";

function WorldMapPopUp({ country, onClose }) {
  const countryOverlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryOverlayRef.current &&
        !countryOverlayRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="country-pop-up"
        ref={countryOverlayRef}
        key="modal"
        initial={{ opacity: 1, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        <div className="country-pop-up-content">
          <svg
            className="country-close-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="none"
            viewBox="0 0 24 24"
            onClick={onClose}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          {country === "malaysiahq" && (
            <>
              <div className="country-pop-up-section">
                <div className="country-pop-up-header">
                  <div className="country-pop-up-title">
                    <h2>Malaysia</h2>
                    <hr />
                    <h3>Head Office</h3>
                    <h5>
                      A-8-1, Megan Avenue II,
                      <br />
                      12, Jalan Yap Kwan Seng,
                      <br />
                      Kampung Baru,
                      <br />
                      50450 Kuala Lumpur,
                      <br />
                      Wilayah Persekutuan Kuala Lumpur
                    </h5>
                    <span>
                      Business Hours: 8:30 AM to 5:00 PM &#40;Monday to
                      Friday&#41;
                    </span>
                    <span>
                      <Link to="tel:+60321635893">
                        Tel: &#40;+603&#41; 2163-5893
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="country-pop-up-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4103.049972029473!2d101.71184350000001!3d3.1617352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d9f4094533%3A0x53085859f88dd00d!2sHyrax%20Oil%20Sdn.%20Bhd.!5e1!3m2!1sen!2smy!4v1736907919506!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: 15 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </>
          )}

          {country === "malaysialobp" && (
            <>
              <div className="country-pop-up-section">
                <div className="country-pop-up-header">
                  <div className="country-pop-up-title">
                    <h2>Malaysia</h2>
                    <hr />
                    <h3>Meru Lubricant Oil Blending Plant</h3>
                    <h5>
                      Lot 4937 Batu 5 1/2, Jalan Meru,
                      <br />
                      Mukim Kapar,
                      <br />
                      Selangor Darul Ehsan, 41050 Klang,
                      <br />
                      Selangor
                    </h5>
                    <span>
                      Business Hours: 8:30 AM to 5:00 PM &#40;Monday to
                      Friday&#41;
                    </span>
                    <span>
                      <Link to="tel:+60333923585">
                        Tel: &#40;+603&#41; 3392-3585
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="country-pop-up-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d262604.82915697055!2d101.441422!3d3.123462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc5151bee9af9b%3A0x4bf396797cf92773!2sHyrax%20Oil%20Sdn.%20Bhd.!5e1!3m2!1sen!2smy!4v1736917990926!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: 15 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </>
          )}

          {country == "srilanka" && (
            <>
              <div className="country-pop-up-section">
                <div className="country-pop-up-header">
                  <div className="country-pop-up-title">
                    <h2>Sri Lanka</h2>
                    <hr />
                    <h3>Muthurajawela Lubricant Oil Blending Plant</h3>
                    <h5>
                      No. 113, Ceylon Petroleum Storage Terminal,
                      <br />
                      Muthurajawela,
                      <br />
                      Wattala, Sri Lanka.
                    </h5>
                    <span>
                      Business Hours: 8:00 AM to 5:30 PM &#40;Monday to
                      Friday&#41;
                    </span>
                    <span>
                      <Link to="tel:+94114382881">
                        Tel: &#40;+94&#41; 114 382 881
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="country-pop-up-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4078.5074847997757!2d79.87046777510108!3d7.019131217205172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f653156ee74d%3A0xab50cd7be5810cba!2sHyrax%20Oil%20Blending%20Plant!5e1!3m2!1sen!2smy!4v1736920931097!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: 15 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default WorldMapPopUp;
