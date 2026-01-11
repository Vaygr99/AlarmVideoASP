import LangButton from "../../../ui/buttons/langButton/LangButton.jsx";

import styles from "./Lang.module.css";

// Lang container from mini area (two buttons)
function Lang() {
  return (
    <div id="mini-lang" className={styles.container}>
      <LangButton className="lang-button">
        <span>RU</span>
      </LangButton>
      <LangButton className="lang-button">
        <span>UA</span>
      </LangButton>
    </div>
  );
}

export default Lang;
