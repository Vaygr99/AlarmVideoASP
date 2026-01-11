import styles from "./BaseTextarea.module.css";

// Basic textarea element
function BaseTextarea({ placeholder }) {
  return (
    <textarea
      wrap="hard"
      placeholder={placeholder ?? ""}
      className={styles.container}
    />
  );
}

export default BaseTextarea;
