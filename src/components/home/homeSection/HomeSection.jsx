import styles from "./HomeSection.module.css";
import Card from "../../card/Card";

const HomeSection = ({ title, subtitle, items, isRed, showButton=true }) => {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.sectionTitle} ${isRed ? styles.sectionTitleRed : ''}`}>{title}</h2>
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      {items && (
        <div className={styles.sectionCards}>
          {items.slice(0,4).map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          ))}
        </div>
      )}
      {showButton && <button className={styles.sectionButton}>Смотреть еще</button>}
    </section>
  );
};

export default HomeSection;
