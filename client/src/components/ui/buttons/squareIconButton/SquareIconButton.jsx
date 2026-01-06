// Square button with icon inside
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from "../BaseButton.jsx";

import styles from "./SquareIconButton.module.css";

const SquareIconButton = function ({ icon, className }) {
  return (
    <BaseButton className={`${styles.container} ${className ?? ""}`}>
      <FontAwesomeIcon icon={icon} />
    </BaseButton>
  );
};

export default SquareIconButton;
