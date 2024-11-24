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
            'url("https://images.pexels.com/photos/10885433/pexels-photo-10885433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className={styles.heroNav__inner}>
          <h1 style={{ marginLeft: 40 }}> Bütçe Takip</h1>
          <div className={styles.heroNav__button}>
            <a href="#" className="btn"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
