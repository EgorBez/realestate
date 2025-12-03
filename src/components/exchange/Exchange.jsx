import styles from "./Exchange.module.css";

const Exchange = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageHeader">Обмен валют</h1>
      <img className="pageBanner" src="exchangeBanner.jpg" alt="Обмен валют" />
      <div className="textContainer">
      <p className="pageText">
        Мы осуществляем обмен валют баты-рубли по хорошему курсу, оперативно и с
        доставкой в любую точку Паттайи
      </p>

      <p className="pageText">
        Осуществляем выдачу наличных через банкомат онлайн
      </p>

      <p className="pageText">
        По промокоду Happy Home вы получаете постоянную скидку 10%
      </p>
      </div>

      <a
        className="telegramButton"
        href="https://t.me/HappyHomePattaya/16"
        target="_blank"
      >
        Больше в телеграмм
      </a>
    </div>
  );
};

export default Exchange;
