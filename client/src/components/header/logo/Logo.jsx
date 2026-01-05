// Displays logo sector inside the header
import Title from "../../ui/other/title/Title.jsx";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <div>MENU</div>
      <Title />
    </div>
  );
}

export default Logo;
