import styles from "./BaseTextarea.module.css";

// Basic textarea element
function BaseTextarea({ placeholder, className }) {
  return (
    <textarea
      wrap="hard"
      placeholder={placeholder ?? ""}
      className={`${className ?? ""} ${styles.container}`}
    />
  );
}

export default BaseTextarea;
