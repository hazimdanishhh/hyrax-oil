import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ButtonRouter.scss";
import { AnimatePresence, motion } from "framer-motion";

function ButtonRouter({ name, link, type, pdf }) {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {pdf ? (
          <a className={type} href={ink}>
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
          <Link className={type} to={link}>
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
