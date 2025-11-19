import styles from "./Cars.module.css";
import carData from "../../data/carData";
import Card from "../card/Card";

const Cars = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Аренда автомобилей</h1>
      <div className="gridContainer">
        {carData.map((item, index) => (
          <Card
            key={index}
            images={item.images}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
       <a className="telegramButton" href="https://t.me/HappyHomePattaya" target="_blank">Больше в телеграмм</a>
    </div>
  );
};

export default Cars;