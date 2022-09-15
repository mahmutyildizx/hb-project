import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

function Button({ name, variation, onClick, disable }) {
  const { button, disabled_class } = styles;
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={cn(button, styles[variation], disable && disabled_class)}
    >
      <span>{name}</span>
    </button>
  );
}

export default Button;
