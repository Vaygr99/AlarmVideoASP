// Admin section (includes a button and a form)
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

function Admin() {
  return (
    <div id="mini-admin">
      <SquareIconButton className="top-square-button" icon={faUserAstronaut} />
    </div>
  );
}

export default Admin;
