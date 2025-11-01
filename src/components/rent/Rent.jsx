import styles from "./Rent.module.css";
import rentData from "../../data/rentData";
import Card from "../card/Card";

const Rent = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Аренда недвижимости</h1>
      <div className="gridContainer">
        {rentData.map((item, index) => (
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

export default Rent;
