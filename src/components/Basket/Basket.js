import React from "react";
import styles from "./Basket.module.scss";

function Basket({ handleClickBasket, totalQuantity }) {
  return (
    <div className={styles.basketContainer} onClick={handleClickBasket}>
      <span className={styles.count}>{2}</span>
      <p>Sepetim</p>
    </div>
  );
}

export default Basket;
