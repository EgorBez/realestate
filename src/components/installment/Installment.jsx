import styles from "./Installment.module.css";
import installmentData from "../../data/installmentData";
import Card from "../card/Card";

const Installment = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Продажа в рассрочку</h1> 
      <div className="gridContainer">
        {installmentData.map((item, index) => (
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

export default Installment;