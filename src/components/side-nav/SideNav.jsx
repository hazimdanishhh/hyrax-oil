import { useState } from "react";
import productSegments from "./productSegment";
import "./SideNav.scss";
import { AnimatePresence, motion } from "framer-motion";

const ProductSideNav = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      className="product-side-nav-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {productSegments.map((segment, index) => (
        <motion.div
          key={index}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3 }}
        >
          <a
            className="product-side-nav"
            href={segment.path}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            // style={{
            //   ...(hovered && hovered === index
            //     ? { backgroundColor: segment.textColor }
            //     : {}),
            // }}
          >
            <img src={segment.icon} alt={`${segment.title} Icon`} />
            {hovered === index && ( // Only render the title when hovered
              <motion.div
                className="product-side-nav-title"
                style={{ color: segment.textColor }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                {segment.title}
              </motion.div>
            )}
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductSideNav;
