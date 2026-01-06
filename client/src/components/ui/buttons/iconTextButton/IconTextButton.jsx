// Template button with text and image at the beginning

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseButton from "../BaseButton.jsx";

function IconTextButton({ icon, text, className }) {
  return (
    <BaseButton className={`${className ?? ""}`}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </BaseButton>
  );
}

export default IconTextButton;
