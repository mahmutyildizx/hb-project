import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

function Button({ name, badge, type, onClick, disable }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={cn(styles.button, {
        [styles.orange]: type === "orange",
      })}
    >
      <span>{name}</span>
      {badge > 0 && <span className={styles.quantityBadge}>{badge}</span>}
    </button>
  );
}

export default Button;
