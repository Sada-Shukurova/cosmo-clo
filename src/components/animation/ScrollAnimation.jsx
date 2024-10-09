import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const ScrollAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
