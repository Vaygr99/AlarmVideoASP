import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../buttons/squareIconButton/SquareIconButton.jsx";

// Container for confirm/cancel buttons of admin form in mini area
function Submit({ ...props }) {
  return (
    <div>
      <SquareIconButton {...props} icon={faXmark} />
      <SquareIconButton icon={faCheck} buttonType="submit" />
    </div>
  );
}

export default Submit;
