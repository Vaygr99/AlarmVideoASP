import { useState, useRef } from "react";

import IconTextButton from "../../buttons/iconTextButton/IconTextButton.jsx";
import List from "./List.jsx";

import useOutsideClick from "../useOutsideClick.js";

import styles from "./ButtonList.module.css";

// Button (with icon and text) for opening list items
function ButtonList({ text, icon, list, checkValue }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideClick([wrapperRef], () => setOpen(false));

  return (
    <div
      ref={wrapperRef}
      className={styles.container}
      onClick={() => setOpen((prev) => !prev)}
    >
      <IconTextButton className={styles.button} text={text} icon={icon} />
      {open && <List list={list} checkValue={checkValue} />}
    </div>
  );
}

export default ButtonList;
