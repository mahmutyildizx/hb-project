import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title, text }) => {
  return (
    <>
      <div>
        <div className={styles.modalContainer}>
          <div className={styles.modalTitle}>
            <p>Ürünü silmek istediğinize emin misiniz?</p>
          </div>
          <div className={styles.modalBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>
          <div className={styles.modalFooter}>
            <div className={styles.modalFooterButtons}>
              <span onClick={() => console.log("click")}>EVET</span>
              <span onClick={() => console.log("click")}>HAYIR</span>
            </div>
          </div>
        </div>
        <div className={styles.blur}></div>
      </div>
    </>
  );
};

export default Modal;
