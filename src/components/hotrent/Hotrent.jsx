import styles from "./Hotrent.module.css";
import hotData from "../../data/hotData";
import Card from "../card/Card";

const Hotrent = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Горячие предложения</h1>
      <div className="gridContainer">
        {hotData.map((item, index) => (
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

export default Hotrent;