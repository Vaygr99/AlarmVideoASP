import { forwardRef } from "react";

import styles from "./BaseTextarea.module.css";

// Basic textarea element
const BaseTextarea = forwardRef(function ({ placeholder }, ref) {
  return (
    <textarea
      ref={ref}
      wrap="hard"
      placeholder={placeholder ?? ""}
      className={styles.container}
    />
  );
});

export default BaseTextarea;
