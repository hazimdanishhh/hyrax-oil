import React from "react";
import "./ButtonRouter.scss";
import { AnimatePresence, motion } from "framer-motion";
import { CaretRightIcon } from "@phosphor-icons/react/ssr";

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
            <CaretRightIcon size={16} />
          </a>
        ) : (
          <a className={type} href={link} target={target}>
            {name}
            <CaretRightIcon size={16} />
          </a>
        )}
      </motion.div>
    </>
  );
}

export default ButtonRouter;
