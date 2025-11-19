import styles from "./Sale.module.css";
import salesData from "../../data/salesData";
import Card from "../card/Card";

const Sale = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Продажа недвижимости</h1> 
      <h2 className="pageTitle">Новостройки</h2>
      <div className="gridContainer">
        {salesData.map((item, index) => (
          <Card
            key={index}
            images={item.images}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Sale;
