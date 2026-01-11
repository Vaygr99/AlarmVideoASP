import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from "../BaseButton.jsx";

import styles from "./CircleIconButton.module.css";

// Circle button template with icon inside
function CircleIconButton({ icon, className = "" }) {
  return (
    <BaseButton className={`${styles.container} ${className}`}>
      <FontAwesomeIcon icon={icon} />
    </BaseButton>
  );
}

export default CircleIconButton;
