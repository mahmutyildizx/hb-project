import React from "react";
import styles from "./ProductCard.module.scss";
function ProductCard() {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src="https://productimages.hepsiburada.net/s/49/400-592/10986385899570.jpg"
          alt="product1"
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          <span>
            Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...
          </span>
        </div>
        <div className={styles.productBrand}>
          <span>
            <strong>Marka:</strong> Apple
          </span>
          <span>
            <strong>Renk:</strong> Siyah
          </span>
        </div>
        <div className={styles.productPrice}>
          <span>90,85 TL</span>
          <div className={styles.discountRate}>
            <span>124,00 TL</span>
            <span>12%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
