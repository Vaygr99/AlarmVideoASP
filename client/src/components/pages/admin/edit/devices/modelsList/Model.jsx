import { faPlus, faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";

function Model() {
  return (
    <div>
      <SquareIconButton icon={faPlus} className="top-square-button" />
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
