import styles from "./ImgSlider.module.css";
import { useState, useRef } from "react";

const ImgSlider = ({ images = [], className = "", showDots = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  if (!images.length) {
    return null;
  }

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
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
      <img className={styles.img} src={images[currentIndex]} alt="" />

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
          {showDots &&(
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
                }}
              ></span>
            ))}
          </div>)}
        </>
      )}
    </div>
  );
};

export default ImgSlider;
