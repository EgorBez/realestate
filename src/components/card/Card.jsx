import styles from "./Card.module.css";

const Card = ({ image, title, price, oldPrice }) => {
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

  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={image} alt={title} />
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
