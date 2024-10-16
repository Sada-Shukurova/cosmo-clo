import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);
  return children;
};

export default ScrollToTop;
