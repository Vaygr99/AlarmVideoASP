import { forwardRef } from "react";

import styles from "./BaseInput.module.css";

// Controlled input element
const ControlledInput = forwardRef(function (
  { placeholder = "", type = "text", className = "" },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={`${className} ${styles.container}`}
    />
  );
});

export default ControlledInput;
