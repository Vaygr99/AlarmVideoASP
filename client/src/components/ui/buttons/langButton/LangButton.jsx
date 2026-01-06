import BaseButton from "../BaseButton.jsx";

import styles from "./LangButton.module.css";

function LangButton({ text, className }) {
  return (
    <BaseButton className={`${styles.container} ${className ?? ""}`}>
      <span>{text}</span>
    </BaseButton>
  );
}

export default LangButton;
