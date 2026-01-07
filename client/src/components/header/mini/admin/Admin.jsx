import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

// Admin container from mini area (button + form)
function Admin() {
  return (
    <>
      {/* button + authorization form */}
      <div id="mini-admin">
        <SquareIconButton
          className="top-square-button"
          icon={faUserAstronaut}
        />
      </div>
    </>
  );
}

export default Admin;
