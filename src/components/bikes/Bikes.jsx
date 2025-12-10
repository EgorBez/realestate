import styles from "./Bikes.module.css";
import bikeData from "../../data/bikeData";
import Card from "../card/Card";

const Bikes = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Аренда скутеров</h1>
      <div className="gridContainer">
        {bikeData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            route={item.route}
          />
        ))}
      </div>
       <a className="telegramButton" href="https://t.me/HappyHomePattaya" target="_blank">Больше в телеграмм</a>
    </div>
  );
};

export default Bikes;