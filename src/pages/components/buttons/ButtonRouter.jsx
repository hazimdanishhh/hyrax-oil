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
              width="18"
              height="18"
              fill="#none"
              viewBox="0 0 256 256"
            >
              <path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"></path>
            </svg>
          </Link>
        )}
      </motion.div>
      <Outlet />
    </>
  );
}

export default ButtonRouter;
