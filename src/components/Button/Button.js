import React from "react";
import styles from "./Button.module.scss";

function Button({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className={styles.buttonContainer}
    >
      <span>{name}</span>
    </button>
  );
}

export default Button;
