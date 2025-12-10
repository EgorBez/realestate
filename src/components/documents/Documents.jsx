import styles from "./Documents.module.css";
import documentsData from "../../data/documentsData";
import Card from "../card/Card";

const Documents = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">ВУ, банковские карты, открытие компании и тд</h1>
      <div className="gridContainer">
        {documentsData.map((item, index) => (
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

export default Documents;
