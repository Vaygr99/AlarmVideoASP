import { faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";

import styles from "./Model.module.css";

// Row with model template (input + button)
function Model() {
  return (
    <div className={styles.container}>
      <UncontrolledIconInput
        //ref={modelRef}
        placeholder="Модель"
        icon={faTrashCan}
      />
      <SquareIconButton icon={faMinus} className="top-square-button" />
    </div>
  );
}

export default Model;
