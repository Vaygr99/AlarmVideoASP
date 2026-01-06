import { faSun } from "@fortawesome/free-solid-svg-icons";

import CircleIconButton from "../../ui/buttons/circleIconButton/CircleIconButton.jsx";

function Theme() {
  return (
    <div id="mini-theme">
      <CircleIconButton icon={faSun} className="top-circle-button" />
    </div>
  );
}

export default Theme;