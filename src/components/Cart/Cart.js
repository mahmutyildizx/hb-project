import React from "react";
import { useModal } from "../../hooks/use-modal";
import styles from "./Cart.module.scss";

function Cart({ cartProducts }) {
  const { openModalWithData } = useModal();

  if (!cartProducts?.length) {
    return (
      <div className={styles.cartContainer}>
        <div role="button" className={styles.emptyCart}>
          <h3>Sepetin şu an boş</h3>
          <p>
            Sepetini Hepsiburada’nın fırsatlarla dolu dünyasından doldurmak için
            aşağıdaki ürünleri incelemeye başlayabilirsin.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      {cartProducts.map((item) => {
        return (
          <div className={styles.itemContainer} key={item.id}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={item.images[0]?.image}
                alt={item.title}
              />
            </div>
            <div className={styles.titleAndRemoveContainer}>
              <p className={styles.title}>{item?.title}</p>
              <span
                onClick={() => openModalWithData(item.id)}
                className={styles.remove}
              >
                Kaldır
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
