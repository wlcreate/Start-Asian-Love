import { useState, useEffect } from "react";
import UpButton from "../../public/UpButton.svg";
import styles from "../../styles/Layout/ScrollButton.module.css";

const ScrollButton = ({ scrollPoint }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > scrollPoint) {
      setVisible(true);
    } else if (scrolled <= scrollPoint) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  });

  return (
    <div className={styles.button}>
      <UpButton onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }} />
    </div>
  );
};

export default ScrollButton;
