// Displays logo sector inside the header
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Title from "../../ui/other/title/Title.jsx";
import SquareIconButton from "../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import LogoMenu from "../../ui/menu/logoMenu/LogoMenu.jsx";

import styles from "./Logo.module.css";

// Logo area (in top <header>)
function Logo() {
  const [open, setOpen] = useState(true);

  return (
    <div id="logo" className={styles.container}>
      {/* button + menu (services and about us) */}
      <div>
        <SquareIconButton icon={faBars} className="top-square-button" />
        {open && <LogoMenu />}
      </div>
      <Title />
    </div>
  );
}

export default Logo;
