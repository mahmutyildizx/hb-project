import React from "react";
import styles from "./ProductCard.module.scss";
function ProductCard({ data }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={data.images[0].image} alt="product" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          <span>{data.title}</span>
        </div>
        <div className={styles.productBrand}>
          <span>
            <strong>Marka:</strong> {data.brand}
          </span>
          <span>
            <strong>Renk:</strong> {data.color}
          </span>
        </div>
        <div className={styles.productPrice}>
          <span>{data.price} TL</span>
          <div className={styles.discountRate}>
            <span>124,00 TL</span>
            <span>{data.discountRate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
