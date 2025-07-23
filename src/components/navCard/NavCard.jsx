import "./NavCard.scss";
import { motion } from "framer-motion";
import { fadeInWithEase } from "../../functions/motionUtils";

function NavCard({ src, alt, title, link, styleLink, styleOverlay, desc }) {
  return (
    <>
      <motion.li className="navCardContainer" variants={fadeInWithEase}>
        <motion.a className={styleLink} href={link} style={{ backgroundImage: `url(${src})` }}>
          <div className="nav-title">
            <h3 className="textRegular">{title}</h3>
            {styleOverlay && (<p className="textLight textXXS">{desc}</p>)}
          </div>
        </motion.a>
      </motion.li>
    </>
  );
}

export default NavCard;
