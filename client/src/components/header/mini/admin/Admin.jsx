import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import SquareIconButton from "../../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import AdminForm from "../../../ui/forms/adminForm/AdminForm.jsx";

// Admin container from mini area (button + form)
function Admin() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* button + authorization form */}
      <div id="mini-admin">
        <SquareIconButton
          className="top-square-button"
          icon={faUserAstronaut}
        />
        {open && <AdminForm onClick={() => setOpen(false)} />}
      </div>
    </>
  );
}

export default Admin;
