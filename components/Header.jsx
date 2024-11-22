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
            'url("https://images.unsplash.com/photo-1442606383395-175ee96ed967?q=80&fm=jpg&s=5c8c74be9bc91b47c79a1aaf92264be5")',
        }}
      >
        <div className={styles.heroNav__inner}>
          <h1>Neat Title</h1>
          <div className={styles.heroNav__button}>
            <a href="#" className="btn"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
