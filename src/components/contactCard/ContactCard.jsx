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
