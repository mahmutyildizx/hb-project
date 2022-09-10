import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

function Button({ name, badge, icon, type, onClick, disable }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={cn(styles.buttonContainer, type, {
        [styles.buttonIcon]: icon,
      })}
    >
      <span>{name}</span>
      {icon && <img src={icon} alt="buttonIcon" />}
      {badge > 0 && <span className={styles.quantityBadge}>{badge}</span>}
    </button>
  );
}

export default Button;
