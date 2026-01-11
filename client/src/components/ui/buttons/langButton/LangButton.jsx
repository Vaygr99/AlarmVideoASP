import BaseButton from "../BaseButton.jsx";

import styles from "./LangButton.module.css";

// Button template with text inside for lang container
function LangButton({ children, className }) {
  return (
    <BaseButton className={`${styles.container} ${className ?? ""}`}>
      {children}
    </BaseButton>
  );
}

export default LangButton;
