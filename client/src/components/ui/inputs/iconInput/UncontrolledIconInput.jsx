import UncontrolledInput from "../UncontrolledInput.jsx";
import SquareIconButton from "../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./IconInput.module.css";

// Uncontrolled input template with icon after
function UncontrolledIconInput({ placeholder = "", icon, inputRef, ...props }) {
  return (
    <div className={styles.container}>
      <UncontrolledInput
        inputRef={inputRef}
        {...props}
        placeholder={placeholder}
      />
      <SquareIconButton icon={icon} />
    </div>
  );
}

export default UncontrolledIconInput;
