import { useEffect, useState } from "react";
import styles from "./Header.module.scss"; // SCSS modülünü bağlama

const Header = () => {
  const [heroHeight, setHeroHeight] = useState(0); // Hero yüksekliğini takip et
  const [isFixed, setIsFixed] = useState(false); // Hero'nun sabitlenip sabitlenmediğini kontrol et

  useEffect(() => {
    const heroElement = document.querySelector(`.${styles.heroNav}`);
    const parentElement = heroElement?.parentElement;

    // Hero yüksekliğini hesapla ve parent padding-top'u ayarla
    const heroHeightValue = heroElement?.offsetHeight || 0;
    setHeroHeight(heroHeightValue);
    if (parentElement) {
      parentElement.style.paddingTop = `${heroHeightValue}px`;
    }

    const handleScroll = () => {
      const scrollOffset = window.scrollY;

      // Scroll ile hero yüksekliğini küçült
      if (scrollOffset < heroHeightValue) {
        heroElement.style.height = `${heroHeightValue - scrollOffset}px`;
      }

      // Sabitleme durumu
      if (scrollOffset > heroHeightValue - 215) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Scroll eventini bağla
    window.addEventListener("scroll", handleScroll);

    // Temizlik işlemi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight]); // Hero yüksekliği değiştiğinde useEffect yeniden çalışır

  return (
    <div>
      {/* Hero Nav */}
      <div
        className={`${styles.heroNav} ${isFixed ? styles.fixme : ""}`}
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/10885433/pexels-photo-10885433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
           
        }}
      >
        <div className={styles.heroNav__inner}>
          <h1 style={{ marginLeft:40,}}>Kişisel Bütçe Takip</h1>
          <div className={styles.heroNav__button}>
            <a href="#" className="btn"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
