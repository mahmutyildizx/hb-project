import React from "react";

import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/use-modal";
import styles from "./Modal.module.scss";
import { removeItemFromCart } from "../../features/productsSlice";

const Modal = () => {
  const { isOpen, closeModal, modalData } = useModal();
  const dispatch = useDispatch();
  if (!isOpen) return null;
  return (
    <>
      <div>
        <div className={styles.modalContainer}>
          <div className={styles.modalTitle}>
            <p>Ürünü silmek istediğinize emin misiniz?</p>
          </div>
          <div className={styles.modalBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum
            totam, similique cupiditate, vitae incidunt illum non et quod
            repudiandae inventore. Dolor qui autem veritatis nihil inventore
            soluta, beatae minus.
          </div>
          <div className={styles.modalFooter}>
            <div className={styles.modalFooterButtons}>
              <span
                onClick={() => {
                  dispatch(
                    removeItemFromCart({
                      id: modalData,
                    })
                  );
                  closeModal();
                }}
              >
                EVET
              </span>
              <span onClick={() => closeModal()}>HAYIR</span>
            </div>
          </div>
        </div>
        <div className={styles.blur}></div>
      </div>
    </>
  );
};

export default Modal;
