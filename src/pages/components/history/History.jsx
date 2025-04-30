import React from "react";
import "./History.scss";
import historyList from "./historyList.js";
import { AnimatePresence, motion } from "framer-motion";

function History() {
  return (
    <div className="the-company-history-background">
      <div className="the-company-history-wrapper">
        <h2 className="the-company-history-title">Our Story</h2>
        {historyList.map((item, index) => (
          <div className="history-card" key={index}>
            {index === 0 && <div className="hr-div"></div>}
            <div className="history-circle"></div>
            <motion.div
              className="history-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="history-text-wrapper">
                <h3 className="history-year">{item.title}</h3>
                <p className="history-desc">{item.desc}</p>
              </div>

              <img className="history-img" src={item.src} alt={item.alt} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
