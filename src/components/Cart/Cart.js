import React from "react";
import styles from "./Cart.module.scss";

function Cart() {
  
  // if (!cartProducts?.length) {
  //   return (
  //     <div className={styles.cartContainer}>
  //       <div role="button" className={styles.emptyCart}>
  //         <h3>Sepetin şu an boş</h3>
  //         <p>
  //           Sepetini Hepsiburada’nın fırsatlarla dolu dünyasından doldurmak için
  //           aşağıdaki ürünleri incelemeye başlayabilirsin.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
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
