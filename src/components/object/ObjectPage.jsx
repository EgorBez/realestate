import styles from "./ObjectPage.module.css";
import { useParams } from "react-router";
import allSalesData from "../../data/allSalesData";
import ImgSlider from "../slider/ImgSlider";
import ObjectContent from "../objectContent/ObjectContent";

const ObjectPage = () => {
  const { id } = useParams();
  const object = allSalesData.find((item) => item.id === id);
  if (!object) {
    return <h2>Обьект не найден</h2>;
  }
  return (
    <div className={`pageContainer ${styles.objectPageContainer}`}>
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

      <ImgSlider className={styles.mobileSlider} images={object.images} />

      <h1 className={styles.objectTitleMobile}>{object.title}</h1>

      <h2 className={styles.objectSubtitle}>{object.roomType}</h2>
      <div className={styles.objectInfoContainer}>
        <ObjectContent
          className={styles.objectContent}
          content={object.content}
        />

        <div className={styles.priceWrapper}>
          <div className={styles.thaiQuota}>
            <p className={`${styles.thaiQuotaText} ${styles.quotaText}`}>Тайская квота</p>
            {object.thaiRooms.map((room, index) => (
              <p key={index} className={styles.roomType}>
                {`${room.type} - `}{" "}
                <span className={styles.roomPrice}>{`от ${room.price}`}</span>
              </p>
            ))}
          </div>
          {object.foreignRooms && (
            <>
              <p className={`${styles.foreignQuotaText} ${styles.quotaText}`}>Иностранная квота</p>
              {object.foreignRooms.map((room, index) => (
                <p key={index} className={styles.roomType}>
                  {`${room.type} - `}{" "}
                  <span className={styles.roomPrice}>{`от ${room.price}`}</span>
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ObjectPage;
