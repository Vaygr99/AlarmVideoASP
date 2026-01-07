// Displays logo sector inside the header
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

import Title from "../../ui/other/title/Title.jsx";
import SquareIconButton from "../../ui/buttons/squareIconButton/SquareIconButton.jsx";
import LogoMenu from "../../ui/menu/logoMenu/LogoMenu.jsx";
import useOutsideClick from "../../ui/menu/useOutsideClick.js";

import styles from "./Logo.module.css";

// Logo area (in top <header>)
function Logo() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideClick([wrapperRef], () => setOpen(false));

  return (
    <div id="logo" className={styles.container}>
      {/* button + menu (services and about us) */}
      <div
        id="logo-menu-container"
        ref={wrapperRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        <SquareIconButton icon={faBars} className="top-square-button" />
        {open && <LogoMenu />}
      </div>
      <Title />
    </div>
  );
}

export default Logo;
