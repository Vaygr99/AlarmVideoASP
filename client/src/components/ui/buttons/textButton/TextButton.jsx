import BaseButton from "../BaseButton.jsx";

import styles from "./TextButton.module.css";

// Button template with text inside
function TextButton({ text, className = "" }) {
  return (
    <BaseButton className={`${styles.container} ${className}`}>
      <span>{text}</span>
    </BaseButton>
  );
}

export default TextButton;
