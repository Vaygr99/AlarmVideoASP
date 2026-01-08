import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

import SquareIconButton from "../../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import AdminForm from "../../../ui/forms/adminForm/AdminForm.jsx";
import useOutsideClick from "../../../ui/menu/useOutsideClick.js";

// Admin container from mini area (button + form)
function Admin() {
  const [open, setOpen] = useState(true);
  const wrapperRef = useRef(null);

  useOutsideClick([wrapperRef], () => setOpen(false));
  return (
    <>
      {/* button + authorization form */}
      <div id="mini-admin" ref={wrapperRef}>
        <SquareIconButton
          className="top-square-button"
          onClick={() => setOpen((prev) => !prev)}
          icon={faUserAstronaut}
        />
        {open && <AdminForm onClick={() => setOpen(false)} />}
      </div>
    </>
  );
}

export default Admin;
