import ControlledInput from "../ControlledInput.jsx";
import SquareIconButton from "../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./IconInput.module.css";

// Controlled input template with icon after
function ControlledIconInput({ placeholder = "", icon, className = "", ...props }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <ControlledInput {...props} placeholder={placeholder} />
      <SquareIconButton icon={icon} />
    </div>
  );
}

export default ControlledIconInput;
