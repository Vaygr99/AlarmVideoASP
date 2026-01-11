import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./Submit.module.css";

// Container for confirm/cancel buttons of admin form in mini area
function Submit() {
  return (
    <div className={styles.container}>
      <SquareIconButton icon={faXmark} />
      <SquareIconButton icon={faCheck} type="submit" />
    </div>
  );
}

export default Submit;
