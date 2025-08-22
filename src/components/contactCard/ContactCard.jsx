import { motion } from "framer-motion";
import "./ContactCard.scss";
import { fadeInWithEase } from "../../functions/motionUtils";
import {
  ClockIcon,
  PhoneIcon,
  PrinterIcon,
} from "@phosphor-icons/react/dist/ssr";

function ContactCard({
  title,
  subtitle,
  address,
  link,
  background,
  hours,
  phone,
  fax,
  onClick,
  src,
}) {
  return (
    <motion.li
      style={{ listStyle: "none" }}
      variants={fadeInWithEase}
      className="contactCardWrapper"
      onClick={onClick}
    >
      <motion.div className="contactCard">
        <div className="contactCardImageWrapper">
          <div
            className="contactCardImage"
            style={{ backgroundImage: `url(${background})` }}
          />
          <iframe
            src={src}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 15 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contactCardMap"
          ></iframe>
        </div>

        <div className="contactCardText">
          <h3 className="textRegular textM">{title}</h3>
          <span className="textRegular textXS">{subtitle}</span>
          <hr />

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
              <PhoneIcon size="24" />
              {phone}
            </a>

            {fax && (
              <a
                href={`tel:${fax}`}
                className="textLight textXXS contactDetails"
              >
                <PrinterIcon size="24" />
                {fax}
              </a>
            )}

            <p className="textLight textXXS contactDetails">
              <ClockIcon size="24" />
              {hours}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
}

export default ContactCard;
