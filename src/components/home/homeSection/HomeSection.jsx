import styles from "./HomeSection.module.css";
import Card from "../../card/Card";
import { Link } from "react-router";

const HomeSection = ({ title, subtitle, items, isRed, showButton=true, buttonLink}) => {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.sectionTitle} ${isRed ? styles.sectionTitleRed : ''}`}>{title}</h2>
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      {items && (
        <div className={styles.sectionCards}>
          {items.slice(0,4).map((item, index) => (
            <Card
              key={index}
              images={item.images}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          ))}
        </div>
      )}
      {showButton && <Link className={styles.sectionButton} to={buttonLink}>Смотреть еще</Link>}
    </section>
  );
};

export default HomeSection;
