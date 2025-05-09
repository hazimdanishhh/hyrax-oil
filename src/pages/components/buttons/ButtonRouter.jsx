import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ButtonRouter.scss";
import { AnimatePresence, motion } from "framer-motion";

function ButtonRouter({ name, link, type, target }) {
  // name -> if name is "PDS" then it will be a link to the PDS page, else it will be a link to a different page
  // link -> the link to the page
  // type -> the type of button, it can be "button-type-1" or "button-type-2"
  // target -> the target of the link, it can be null or "_blank" to open in a new tab

  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {name === "PDS" ? (
          <a
            className={type}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M13 6L7.85714 1M13 6L7.85714 11M13 6H1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : (
          <Link className={type} to={link} target={target}>
            {name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M13 6L7.85714 1M13 6L7.85714 11M13 6H1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </motion.div>
      <Outlet />
    </>
  );
}

export default ButtonRouter;
