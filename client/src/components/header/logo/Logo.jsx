// Displays logo sector inside the header
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Title from "../../ui/other/title/Title.jsx";
import SquareIconButton from "../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <div>
        <SquareIconButton icon={faBars} className="top-square-button" />
      </div>
      <Title />
    </div>
  );
}

export default Logo;
