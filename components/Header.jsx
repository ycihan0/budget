import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [heroHeight, setHeroHeight] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const heroElement = document.querySelector(`.${styles.heroNav}`);
    const parentElement = heroElement?.parentElement;

    const heroHeightValue = heroElement?.offsetHeight || 0;
    setHeroHeight(heroHeightValue);
    if (parentElement) {
      parentElement.style.paddingTop = `${heroHeightValue}px`;
    }

    const handleScroll = () => {
      const scrollOffset = window.scrollY;

      if (scrollOffset < heroHeightValue) {
        heroElement.style.height = `${heroHeightValue - scrollOffset}px`;
      }

      if (scrollOffset > heroHeightValue - 215) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight]);
  return (
    <div className=" relative z-[999] ">
      <div
        className={`${styles.heroNav} ${isFixed ? styles.fixme : ""}`}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1526280524276-51b1c8a46321?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className={styles.heroNav__inner}>
          <h1
            style={{
              marginLeft: 40,
              fontFamily: '"Edu AU VIC WA NT Pre", cursive'
            }}
          >
          
            Bütçematik
          </h1>
          <div className={styles.heroNav__button}>
            <a href="#" className="btn"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
