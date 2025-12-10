import styles from "./Secondary.module.css";
import secondaryData from "../../data/secondaryData";
import Card from "../card/Card";

const Secondary= () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Продажа вторичного жилья</h1> 
      <div className="gridContainer">
        {secondaryData.map((item, index) => (
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

export default Secondary;