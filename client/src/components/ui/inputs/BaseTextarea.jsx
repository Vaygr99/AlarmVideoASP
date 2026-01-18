import styles from "./BaseTextarea.module.css";

// Basic textarea element
function BaseTextarea({ placeholder, textareaRef }) {
  return (
    <textarea
      ref={textareaRef}
      wrap="hard"
      placeholder={placeholder}
      className={styles.container}
    />
  );
}

export default BaseTextarea;
