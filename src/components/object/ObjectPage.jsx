import styles from "./ObjectPage.module.css";
import { useParams } from "react-router";
import allSalesData from "../../data/allSalesData";

const ObjectPage = () => {
  const { id } = useParams();
  const object = allSalesData.find((item) => item.id === id);
  if (!object) {
    return <h2>Обьект не найден</h2>;
  }
  return (
    <div className="pageContainer">
      <h1 className={styles.objectTitle}>{object.title}</h1>
      <div className={styles.photoContainer}>
        <img
           className={`${styles.mainPhoto} ${styles.photo}`}
          src={object.images[0]}
          alt={object.title}
        />
        <img
           className={`${styles.smallPhoto1} ${styles.photo}`}
          src={object.images[1]}
          alt={object.title}
        />
        <img
          className={`${styles.smallPhoto2} ${styles.photo}`}
          src={object.images[2]}
          alt={object.title}
        />
        <img
           className={`${styles.smallPhoto3} ${styles.photo}`}
          src={object.images[3]}
          alt={object.title}
        />
        <img
          className={`${styles.smallPhoto4} ${styles.photo}`}
          src={object.images[4]}
          alt={object.title}
        />
      </div>
    </div>
  );
};

export default ObjectPage;
