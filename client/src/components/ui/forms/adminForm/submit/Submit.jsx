import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./Submit.module.css";

// Container for confirm/cancel buttons of admin form in mini area
function Submit({ ...props }) {
  return (
    <div className={styles.container}>
      <SquareIconButton {...props} icon={faXmark} />
      <SquareIconButton icon={faCheck} buttonType="submit" />
    </div>
  );
}

export default Submit;
