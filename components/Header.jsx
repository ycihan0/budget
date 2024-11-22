import { useEffect, useState } from "react";

const Header = () => {
  const [heroHeight, setHeroHeight] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const updateHeroHeight = () => {
      const heroElement = document.querySelector(".hero-nav");
      if (heroElement) {
        setHeroHeight(heroElement.offsetHeight);
      }
    };

    updateHeroHeight(); // İlk renderda yükseklik ayarla

    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      if (scrollOffset < heroHeight) {
        // Hero yüksekliği scroll ile azalsın
        const newHeight = heroHeight - scrollOffset;
        document.querySelector(".hero-nav").style.height = `${newHeight}px`;
      }
      if (scrollOffset > heroHeight - 215) {
        setIsFixed(true); // Hero elementini sabitle
      } else {
        setIsFixed(false); // Hero elementini serbest bırak
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: Component unmount olduğunda event listener'ı temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight]);
  
  return (
    <div>
      <div
        className={`hero-nav ${
          isFixed ? "bg-black bg-opacity-80" : "bg-transparent"
        } 
        fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center
        h-[400px] min-h-[105px] bg-cover bg-center overflow-hidden`}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1442606383395-175ee96ed967?q=80&fm=jpg&s=5c8c74be9bc91b47c79a1aaf92264be5")',
        }}
      >
        <div className="hero-nav__inner z-10">
          <h1 className="text-white text-[5vw]">Neat Title</h1>
          <div className="hero-nav__button">
            <a href="#" className="btn"></a>
          </div>
        </div>
      </div>
      <div className="page-content mx-auto w-[30em] leading-7">
        <p>Laws of physics, billions upon billions...</p>
        <p>Finite but unbounded...</p>
        <p>Descended from astronomers...</p>
        <p>Stirred by starlight...</p>
      </div>
    </div>
  );
};

export default Header;
