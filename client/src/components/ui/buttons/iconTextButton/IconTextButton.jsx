// Template button with text and image at the beginning

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from "../BaseButton.jsx";

import styles from "./IconTextButton.module.css";

// Button template with icon and text inside
function IconTextButton({ icon, text, className }) {
  return (
    <BaseButton className={`${styles.container} ${className ?? ""}`}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </BaseButton>
  );
}

export default IconTextButton;
