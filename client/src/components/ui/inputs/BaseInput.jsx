import styles from "./BaseInput.module.css";

// Basic input element
function BaseInput({ placeholder, className }) {
  return (
    <input
      placeholder={placeholder ?? ""}
      className={`${className ?? ""} ${styles.container}`}
    />
  );
}

export default BaseInput;
