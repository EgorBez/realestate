import styles from "./ImgSlider.module.css";
import { useState, useRef } from "react";

const ImgSlider = ({ images = [], className = "", showDots = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const pointerStartX = useRef(0);
  const pointerStartY = useRef(0);
  const isHorizontalSwipe = useRef(false);

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

  const onPointerDown = (e) => {
    pointerStartX.current = e.clientX;
    pointerStartY.current = e.clientY;
    isHorizontalSwipe.current = false;
    console.log(pointerStartX.current);
  };

  const onPointerMove = (e) => {
    const dx = e.clientX - pointerStartX.current;
    const dy = e.clientY - pointerStartY.current;
    console.log(dx);

    if (!isHorizontalSwipe.current && Math.abs(dy) > Math.abs(dx)) {
      return;
    }

    if (!isHorizontalSwipe.current && Math.abs(dx) > 10) {
      isHorizontalSwipe.current = true;
      e.preventDefault();
    }

    if (isHorizontalSwipe.current) {
      e.preventDefault();
    }
  };

  const onPointerUp = (e) => {
    if (!isHorizontalSwipe.current) {
      return;
    }
    const dx = e.clientX - pointerStartX.current;
    console.log(dx);

    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }
    isHorizontalSwipe.current = false;
  };

  return (
    <div
      className={`${styles.slider} ${className}`}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} className={styles.img} src={src} alt="" />
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
