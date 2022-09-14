import React from "react";
import styles from "./Cart.module.scss";

function Cart() {
  return (
    <div className={styles.cartContainer}>
        <div className={styles.cartProducts}>
            <div className={styles.cartProduct}>
                <div className={styles.cartProductImage}>
                    <img src="https://productimages.hepsiburada.net/s/132/1100/110000082876954.jpg" alt="product" />
                </div>
                <div className={styles.cartProductInfo}>
                    <span>İphone</span>
                    <button>Kaldır</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart;
