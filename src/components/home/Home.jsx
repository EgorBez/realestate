import styles from "./Home.module.css";
import { Link } from "react-router";
import HomeSection from "./homeSection/HomeSection";
import salesData from "../../data/salesData";
import rentData from "../../data/rentData";
import hotData from "../../data/hotData";
import servicesData from "../../data/servicesData";
import carData from "../../data/carData";
import bikeData from "../../data/bikeData";

const Home = () => {
  return (
    <>
      <div className={styles.mainBanner}>
        <div className={styles.mainText}>
          <h1 className={styles.mainHeader}>Продажа и аренда недвижимости</h1>
          <p className={styles.mainAgency}>Happy Home Agency</p>
        </div>
      </div>
      <div className="pageContainer">
        <HomeSection title="Продажа недвижимости" subtitle="квартиры для продажи" items={salesData} buttonLink="/sale"/>
        <HomeSection title="Аренда недвижимости" subtitle="квартиры для аренды" items={rentData} buttonLink="/rent"/>
        <HomeSection title="Горячие предложения" subtitle="квартиры для аренды по хорошим ценам" items={hotData} isRed buttonLink="/hotrent"/>
        <HomeSection title="Остальные услуги" subtitle="кликайте и узнайте подробнее о каждой услуге" items={servicesData} showButton={false}/>
        <HomeSection title="Прокат автомобилей" subtitle="Авто в аренду" items={carData} buttonLink="/carsrent"/>
        <HomeSection title="Прокат скутеров" subtitle="байки в аренду" items={bikeData} buttonLink="/bikesrent"/>
      </div>
    </>
  );
};

export default Home;
