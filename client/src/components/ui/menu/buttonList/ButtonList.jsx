import IconTextButton from "../../buttons/iconTextButton/IconTextButton.jsx";
import List from "./List.jsx";

import styles from "./ButtonList.module.css";

// Button (with icon and text) for opening list items
function ButtonList({ text, icon, list }) {
  return (
    <div className={styles.container}>
      <IconTextButton className={styles.button} text={text} icon={icon} />
      <List list={list} />
    </div>
  );
}

export default ButtonList;
