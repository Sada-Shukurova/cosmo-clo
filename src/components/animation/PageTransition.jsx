import { motion } from "framer-motion";
import { useLocation } from "react-router";
import { pageVariants } from "../../utils/variants";

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
