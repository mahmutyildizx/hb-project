import React from "react";
import styles from "./Cart.module.scss";

function Cart() {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://productimages.hepsiburada.net/s/141/550/110000094614817.jpg"
            alt="cart-product-image"
          />
        </div>
        <div className={styles.titleAndRemoveContainer}>
          <p className={styles.title}>
            iPhone 11 Kırmızı Kılıflı Garantili Telefon
          </p>
          <span className={styles.remove}>Kaldır</span>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://productimages.hepsiburada.net/s/141/550/110000094614817.jpg"
            alt="cart-product-image"
          />
        </div>
        <div className={styles.titleAndRemoveContainer}>
          <p className={styles.title}>
            iPhone 11 Kırmızı Kılıflı Garantili Telefon
          </p>
          <span className={styles.remove}>Kaldır</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
