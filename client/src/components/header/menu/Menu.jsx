// Includes service button (+ menu) and a link (about us)
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import IconTextButton from "../../ui/buttons/iconTextButton/IconTextButton.jsx";
import LinkButton from "../../ui/buttons/linkButton/LinkButton.jsx";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <div id="menu" className={styles.container}>
      <div>
        <IconTextButton
          icon={faChevronDown}
          text="Services"
          className={`services-button`}
        />
      </div>
      <LinkButton to="/about" text="About us" />
    </div>
  );
}

export default Menu;
