import { faPhone } from "@fortawesome/free-solid-svg-icons";

import SquareIconButton from "../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./Phone.module.css";

// Phone container from mini area (button + menu)
function Phone() {
  return (
    <>
      {/* button + phone menu */}
      <div className={styles.container}>
        <SquareIconButton icon={faPhone} className="top-square-button" />
      </div>
    </>
  );
}

export default Phone;
