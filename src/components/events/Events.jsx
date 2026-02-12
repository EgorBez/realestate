import styles from "./Events.module.css";
import eventsData from "../../data/eventsData";
import Card from "../card/Card";

const Events = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Экскурсии</h1>
      <div className="gridContainer">
        {eventsData.map((item, index) => (
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

export default Events;
