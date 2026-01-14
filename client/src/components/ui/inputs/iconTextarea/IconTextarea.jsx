import { forwardRef } from "react";

import BaseTextarea from "../BaseTextarea.jsx";
import SquareIconButton from "../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./IconTextarea.module.css";

// Textarea template with icon after
const IconTextarea = forwardRef(function({ placeholder = "", icon }, ref) {
  return (
    <div className={styles.container}>
      <BaseTextarea ref={ref} placeholder={placeholder} />
      <SquareIconButton icon={icon} />
    </div>
  );
});

export default IconTextarea;
