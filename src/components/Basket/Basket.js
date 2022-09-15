import React from "react";
import styles from "./Basket.module.scss";

function Basket({ totalQuantity }) {
  return (
    <div className={styles.basketContainer}>
      <span className={styles.count}>{totalQuantity() || 0}</span>
      <p>Sepetim</p>
    </div>
  );
}

export default Basket;
