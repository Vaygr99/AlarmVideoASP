import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

import IconTextButton from "../../ui/buttons/iconTextButton/IconTextButton.jsx";
import LinkButton from "../../ui/buttons/linkButton/LinkButton.jsx";
import useOutsideClick from "../../ui/menu/useOutsideClick.js";
import ServicesMenu from "../../ui/menu/servicesMenu/ServicesMenu.jsx";

import styles from "./Menu.module.css";

// Menu area (in top <header>)
function Menu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideClick([wrapperRef], () => setOpen(false));

  return (
    <div id="menu" className={styles.container}>
      {/* Button + services menu */}
      <div ref={wrapperRef} onClick={() => setOpen((prev) => !prev)}>
        <IconTextButton
          icon={faChevronDown}
          text="Services"
          className={`services-button`}
        />
        {open && <ServicesMenu />}
      </div>
      <LinkButton to="/about" text="About us" />
    </div>
  );
}

export default Menu;
