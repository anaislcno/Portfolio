import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";
import "../ScrollToTop/ScrollToTop.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <div className="top__btn"> {showTopBtn && <FaAngleUp className="icon__position icon__style" onClick={goToTop} />} </div>;
};
export default ScrollToTop;
