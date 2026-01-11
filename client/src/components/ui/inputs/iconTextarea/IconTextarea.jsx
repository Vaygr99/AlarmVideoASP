import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseTextarea from "../BaseTextarea.jsx";
import SquareIconButton from "../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./IconTextarea.module.css";

// Textarea template with icon after
function IconTextarea({ placeholder = "", icon }) {
  return (
    <div className={styles.container}>
      <BaseTextarea placeholder={placeholder} />
      <SquareIconButton icon={icon} />
    </div>
  );
}

export default IconTextarea;
