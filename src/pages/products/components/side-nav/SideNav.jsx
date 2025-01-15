import React, { useState } from "react";
import { Link } from "react-router-dom";
import productSegments from "./productSegment";
import "./SideNav.scss";
import { motion } from "framer-motion";

const ProductSideNav = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="product-side-nav-container">
      {productSegments.map((segment, index) => (
        <Link
          key={index}
          className="product-side-nav"
          to={segment.path}
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
            <motion.h4
              className="product-side-nav-title"
              style={{ color: segment.textColor }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              {segment.title}
            </motion.h4>
          )}
        </Link>
      ))}
    </div>
  );
};

export default ProductSideNav;
