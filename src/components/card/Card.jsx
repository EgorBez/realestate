import styles from "./Card.module.css";
import { useState } from "react";
import { Link } from "react-router";
import ImgSlider from "../slider/ImgSlider";

const Card = ({ images = [], title, price, oldPrice, route }) => {
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

  const cardContent = (
    <>
    <ImgSlider images={images}/>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardPrice}>{price}</p>
      {oldPrice && (
        <div className={styles.cardOldRow}>
          <span className={styles.cardOldPrice}>{oldPrice}</span>
          <span className={styles.cardDiscount}>-{discount}%</span>
        </div>
      )}
    </>
  );
  const isExternal = route?.startsWith("https");

  return isExternal ? (
    <a href={route} target="_blank" className={styles.card}>
      {cardContent}
    </a>
  ) : (
    <Link to={route} className={styles.card}>
      {cardContent}
    </Link>
  );
};

export default Card;
