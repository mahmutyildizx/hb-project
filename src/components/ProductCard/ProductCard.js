import React from "react";
import { formatPrice } from "../../helpers/index";
import styles from "./ProductCard.module.scss";
function ProductCard({ data }) {
  const originalPrice = Math.floor(
    data.price + (data.price * data.discountRate) / 100
  );
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={data.images[0].image} alt="product" />
      </div>
      <div className={styles.productHeader}>
        <span>{data.title}</span>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productBrand}>
          <span>
            <strong>Marka:</strong> {data.brand}
          </span>
          <span>
            <strong>Renk:</strong> {data.color}
          </span>
        </div>
        <div className={styles.productPrice}>
          <span>{formatPrice(data.price)}</span>
          <div className={styles.discountRate}>
            <span>{formatPrice(originalPrice)}</span>
            <span>%{data.discountRate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
