// Circle button with icon inside
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from "../BaseButton.jsx";

function CircleIconButton({ icon, className }) {
  return (
    <BaseButton className={`${className ?? ""}`}>
      <FontAwesomeIcon icon={icon} />
    </BaseButton>
  );
}

export default CircleIconButton;
