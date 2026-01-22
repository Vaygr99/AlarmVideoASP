import BaseButton from "../BaseButton.jsx";

import styles from "./TextButton.module.css";

// Button template with text inside
function TextButton({ text = "!No text!", className = "", ...props }) {
  return (
    <BaseButton {...props} className={`${styles.container} ${className}`}>
      <span>{text}</span>
    </BaseButton>
  );
}

export default TextButton;
