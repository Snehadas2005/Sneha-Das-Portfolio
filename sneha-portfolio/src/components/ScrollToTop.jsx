import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Using instant to ensure it happens before the user sees the new page
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
