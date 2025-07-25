import { motion } from "framer-motion";
import "./ContactCard.scss";
import { fadeInWithEase } from "../../functions/motionUtils";

function ContactCard({
  title,
  subtitle,
  address,
  link,
  background,
  hours,
  phone,
  fax,
}) {
  return (
    <motion.li
      style={{ listStyle: "none" }}
      variants={fadeInWithEase}
      className="contactCardWrapper"
    >
      <motion.div
        className="contactCard"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="contactCardText">
          <h3 className="textRegular textM">{title}</h3>
          <span className="textRegular textXS">{subtitle}</span>
          <div className="addressContactCard">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {address &&
                address.length > 0 &&
                address.map((address, idx) => (
                  <motion.p
                    key={idx}
                    className="textLight"
                    variants={fadeInWithEase}
                  >
                    {address}
                  </motion.p>
                ))}
            </a>
          </div>

          <div className="contactCardInfo">
            <a
              href={`tel:${phone}`}
              className="textLight textXXS contactDetails"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
              </svg>
              {phone}
            </a>

            {fax && (
              <a
                href={`tel:${fax}`}
                className="textLight textXXS contactDetails"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path d="M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z"></path>
                </svg>
                {fax}
              </a>
            )}

            <p className="textLight textXXS contactDetails">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
              {hours}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
}

export default ContactCard;
