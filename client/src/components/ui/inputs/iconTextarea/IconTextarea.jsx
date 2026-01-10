import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseTextarea from "../BaseTextarea.jsx";
import SquareIconButton from "../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./IconTextarea.module.css";

// Textarea template with icon after
function IconTextarea({ placeholder, icon, className }) {
  return (
    <div className={styles.container}>
      <BaseTextarea
        placeholder={placeholder}
        className={`${className ?? ""}`}
      />
      <SquareIconButton icon={icon} />
    </div>
  );
}

export default IconTextarea;
