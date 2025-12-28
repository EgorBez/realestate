import styles from "./ObjectPage.module.css";
import { useParams } from "react-router";
import allSalesData from "../../data/allSalesData";
import ImgSlider from "../slider/ImgSlider";

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

      <ImgSlider className={styles.mobileSlider} images={object.images}/>

      <h1 className={styles.objectTitleMobile}>{object.title}</h1>

      <h2 className={styles.objectSubtitle}>Квартира, 1 bedroom</h2>
      <div className={styles.objectInfoContainer}>
        <p className={styles.objectInfo}>
          Aquarous - это жилой комплекс, расположенный всего в 500 метрах от
          пляжа Джомтьен в Паттайе. Проект разработан AssetWise, кондо
          построится до конца в 2027 году . Здесь вас ждёт свежий дизайн, а
          также новые и современные виды квартир
        </p>

        <p className={styles.objectInfo}>
          Этот комплекс с двумя корпусами высотой 44 и 47 этажей предоставляет
          великолепные панорамные виды на море. Жителей встречает шикарное лобби
          с высоким потолком, которое создает атмосферу уюта и изысканности. В
          этом Кондо есть много зон для отдыха и мест, где можно наслаждаться
          своим отдыхом.
        </p>

        <p className={styles.objectInfo}>
          Имеются семейные зоны: детский клуб , детская площадка и аркадная зона
          для развлечений. Aqua Club на 3-м этаже с пляжным бассейном и
          бассейном для детей Cloud Club на 43 и 44 этажах включает видовой
          бассейн на крыше, лаундж зона, фитнес-зал, зону для йоги и площадку
          для занятия боксом Spa-центр с онсэн, сауной и парной для полного
          расслабления.
        </p>

        <p className={styles.objectInfo}>
          Также в Кондо присутствует круглосуточная охрана . Также парковка и
          вход в Кондо по магнитной карте
        </p>

        <p className={styles.objectInfo}>
          Aquarous включает различные типы квартир и их квадратуру : Квартиры с
          1 спальней (1 бедрум) начинаются от 34 до 77 м² Также есть 2 бедрум
          площадью от 80 до 142 м² И квартиры с 3 спальнями площадью до 316 м²
        </p>

        <p className={styles.objectInfo}>
          Aquarous Jomtien - отличный кондоминиум, где можно расслабиться и
          насладиться жизнью в Паттайе
        </p>
      </div>
    </div>
  );
};

export default ObjectPage;
