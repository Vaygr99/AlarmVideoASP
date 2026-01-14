import { forwardRef } from "react";

import UncontrolledInput from "../UncontrolledInput.jsx";
import SquareIconButton from "../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./IconInput.module.css";

// Uncontrolled input template with icon after
const UncontrolledIconInput = forwardRef(function (
  { placeholder = "", icon, ...props },
  ref
) {
  return (
    <div className={styles.container}>
      <UncontrolledInput ref={ref} {...props} placeholder={placeholder} />
      <SquareIconButton icon={icon} />
    </div>
  );
});

export default UncontrolledIconInput;
