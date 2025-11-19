import styles from "./Card.module.css";
import { useState } from "react";

const Card = ({ images = [], title, price, oldPrice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const parsePrice = (str) => {
    if (!str) {
      return null;
    }
    return parseFloat(str.replace(/[^\d.]/g, ""));
  };

  const newPriceNum = parsePrice(price);
  const oldPriceNum = parsePrice(oldPrice);

  const discount =
    oldPriceNum && newPriceNum
      ? Math.round((1 - newPriceNum / oldPriceNum) * 100)
      : null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img
          className={styles.cardImg}
          src={images[currentIndex]}
          alt={title}
        />
        {images.length > 1 && (
          <>
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={prevImage}
            >
              ◀
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={nextImage}
            >
              ▶
            </button>
            <div className={styles.dots}>
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${
                    i === currentIndex ? styles.activeDot : ""
                  }`}
                  onClick={() => setCurrentIndex(i)}
                ></span>
              ))}
            </div>
          </>
        )}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardPrice}>{price}</p>
      {oldPrice && (
        <div className={styles.cardOldRow}>
          <span className={styles.cardOldPrice}>{oldPrice}</span>
          <span className={styles.cardDiscount}>-{discount}%</span>
        </div>
      )}
    </div>
  );
};

export default Card;
