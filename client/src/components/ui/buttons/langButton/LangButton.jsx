import BaseButton from "../BaseButton.jsx";

import styles from "./LangButton.module.css";

// Button template with text inside for lang container
function LangButton({ text, className }) {
  return (
    <BaseButton className={`${styles.container} ${className ?? ""}`}>
      <span>{text}</span>
    </BaseButton>
  );
}

export default LangButton;
