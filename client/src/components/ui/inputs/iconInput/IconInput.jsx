import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseInput from "../BaseInput.jsx";
import SquareIconButton from "../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./IconInput.module.css";

// Input template with icon after
function IconInput({ placeholder = "", icon }) {
  return (
    <div className={styles.container}>
      <BaseInput placeholder={placeholder} />
      <SquareIconButton icon={icon} />
    </div>
  );
}

export default IconInput;
