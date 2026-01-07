import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

import SquareIconButton from "../../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import PhonesMenu from "../../../ui/menu/phonesMenu/PhonesMenu.jsx";
import useOutsideClick from "../../../ui/menu/useOutsideClick.js";

import styles from "./Phone.module.css";

// Phone container from mini area (button + menu)
function Phone() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideClick([wrapperRef], () => setOpen(false));

  return (
    <>
      {/* Button + phones menu */}
      <div
        className={styles.container}
        ref={wrapperRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        <SquareIconButton icon={faPhone} className="top-square-button" />
        {open && <PhonesMenu />}
      </div>
    </>
  );
}

export default Phone;
