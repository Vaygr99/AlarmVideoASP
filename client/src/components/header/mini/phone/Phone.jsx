// Phone container (includes a button and a menu)
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./Phone.module.css";

function Phone() {
  return (
    <div className={styles.container}>
      <SquareIconButton icon={faPhone} className="top-square-button" />
    </div>
  );
}

export default Phone;
