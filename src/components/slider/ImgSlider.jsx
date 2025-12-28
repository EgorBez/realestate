import styles from "./ImgSlider.module.css";
import { useState, useRef } from "react";

const ImgSlider = ({ images = [], className = "", showDots = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const touchStartX = useRef(null);

  if (!images.length) {
    return null;
  }

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    setDirection("prev");
  };

  const next = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    setDirection("next");
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) {
      return;
    }
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className={`${styles.slider} ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.track} style={{transform:`translateX(-${currentIndex * 100}%)`,}}>
        {images.map((src, i)=> (
          <img key={i} className={styles.img} src={src} alt=""/>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            className={`${styles.zone} ${styles.left}`}
            onClick={(e) => {
              e.preventDefault();
              prev();
            }}
            aria-label="Предыдущее фото"
          ></button>
          <button
            className={`${styles.zone} ${styles.right}`}
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            aria-label="Следующее фото"
          ></button>
          {showDots && (
            <div className={styles.dots}>
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${
                    i === currentIndex ? styles.active : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentIndex(i);
                    setDirection(i > currentIndex ? "next" : "prev");
                  }}
                ></span>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ImgSlider;
