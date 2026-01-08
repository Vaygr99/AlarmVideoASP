import {
  faTrashCan,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import BaseInput from "../../../inputs/BaseInput.jsx";
import SquareIconButton from "../../../buttons/squareIconButton/SquareIconButton.jsx";

// Container for entering admin password for admin form in mini area
function PasswordInput() {
  return (
    <div>
      <span>10</span>
      <BaseInput placeholder="пароль" />
      <SquareIconButton icon={faEye} />
      <SquareIconButton icon={faTrashCan} />
    </div>
  );
}

export default PasswordInput;
