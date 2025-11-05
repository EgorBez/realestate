import styles from "./Sale.module.css";
import salesData from "../../data/salesData";
import Card from "../card/Card";

const Sale = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Продажа недвижимости</h1> 
      <div className="gridContainer">
        {salesData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
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
