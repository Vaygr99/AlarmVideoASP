import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import SquareIconButton from "../../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import PhonesMenu from "../../../ui/menu/phonesMenu/PhonesMenu.jsx";

import styles from "./Phone.module.css";

// Phone container from mini area (button + menu)
function Phone() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Button + phones menu */}
      <div className={styles.container}>
        <SquareIconButton icon={faPhone} className="top-square-button" />
        {open && <PhonesMenu />}
      </div>
    </>
  );
}

export default Phone;
