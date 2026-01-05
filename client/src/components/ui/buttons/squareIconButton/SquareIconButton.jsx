// Square button with icon inside
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from "../BaseButton.jsx";

const SquareIconButton = function SquareIconButton({ icon }) {
  return (
    <BaseButton>
      <FontAwesomeIcon icon={icon} />
    </BaseButton>
  );
};

export default SquareIconButton;
