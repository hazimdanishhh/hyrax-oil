import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Counter.scss";

const Counter = ({ end = 100, duration = 2 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // triggers when 50% visible
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({
        count: end,
        transition: { duration, ease: "easeOut" },
      });
    } else {
      controls.set({ count: 0 });
      setCount(0);
    }
  }, [isInView, controls, end, duration]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ count: 0 }}
      onUpdate={(latest) => setCount(Math.floor(latest.count))}
      className="digit-counter"
    >
      {count}
    </motion.div>
  );
};

export default Counter;
