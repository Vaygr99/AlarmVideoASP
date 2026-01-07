import LangButton from "../../../ui/buttons/langButton/LangButton.jsx";

import styles from "./Lang.module.css";

// Lang container from mini area (two buttons)
function Lang() {
  return (
    <div id="mini-lang" className={styles.container}>
      <LangButton text="RU" className="lang-button" />
      <LangButton text="UA" className="lang-button" />
    </div>
  );
}

export default Lang;
