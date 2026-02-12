import styles from "./Rent.module.css";
import rentData from "../../data/rentData";
import Card from "../card/Card";

const Rent = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Аренда недвижимости (примеры квартир)</h1>
      <div className="gridContainer">
        {rentData.map((item, index) => (
          <Card
            key={index}
            images={item.images}
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

export default Rent;
