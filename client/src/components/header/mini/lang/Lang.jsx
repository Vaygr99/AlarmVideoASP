import LangButton from "../../../ui/buttons/langButton/LangButton.jsx";

import styles from "./Lang.module.css";

function Lang() {
  return (
    <div id="mini-lang" className={styles.container}>
      <LangButton text="RU" />
      <LangButton text="UA" />
    </div>
  );
}

export default Lang;
