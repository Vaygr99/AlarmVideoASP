// Displays logo sector inside the header
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Title from "../../ui/other/title/Title.jsx";
import SquareIconButton from "../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./Logo.module.css";

// Logo area (in top <header>)
function Logo() {
  return (
    <div id="logo" className={styles.container}>
      {/* button + menu (services and about us) */}
      <div>
        <SquareIconButton icon={faBars} className="top-square-button" />
      </div>
      <Title />
    </div>
  );
}

export default Logo;
