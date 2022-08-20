import React from "react";

import Marker from "../../Icons/Marker";

import styles from "./NavigateButton.module.scss";

const NavigateButton = React.forwardRef(({ className, onClick, isDisabled = false }, ref) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      ref={ref}
      disabled={isDisabled}
      onClick={onClick}
    >
      <Marker />
    </button>
  );
});

export default NavigateButton;
