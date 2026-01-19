import { faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import ControlledIconInput from "../../../../../ui/inputs/iconInput/ControlledIconInput.jsx";

import styles from "./Model.module.css";

// Row with model template (input + button)
function Model({ model, updateModel }) {
  // model - current model object ({id:..., model: ...})
  // updateModel - setState to control model input

  return (
    <div className={styles.container}>
      <ControlledIconInput
        placeholder="Модель"
        icon={faTrashCan}
        value={model.model}
        onChange={(e) => updateModel(model.id, e.target.value)}
      />
      <SquareIconButton icon={faMinus} className="top-square-button" />
    </div>
  );
}

export default Model;
