import {
  faTrashCan,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import BaseInput from "../../../inputs/BaseInput.jsx";
import SquareIconButton from "../../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./PasswordInput.module.css";

// Container for entering admin password for admin form in mini area
function PasswordInput() {
  return (
    <div className={styles.container}>
      <span>10</span>
      <BaseInput placeholder="пароль" />
      <SquareIconButton icon={faEye} />
      <SquareIconButton icon={faTrashCan} />
    </div>
  );
}

export default PasswordInput;
