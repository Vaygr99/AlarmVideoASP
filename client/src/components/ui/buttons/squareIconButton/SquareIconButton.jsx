import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from "../BaseButton.jsx";

import styles from "./SquareIconButton.module.css";

// Square button template with icon inside
const SquareIconButton = function ({ icon, className }) {
  return (
    <BaseButton className={`${styles.container} ${className ?? ""}`}>
      <FontAwesomeIcon icon={icon} />
    </BaseButton>
  );
};

export default SquareIconButton;
