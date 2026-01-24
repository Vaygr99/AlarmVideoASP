import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import SquareIconButton from "../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./OfferList.module.css";

function OfferList({ rows = [], setRows }) {
  // add new model
  const addRow = () =>
    setRows((prev) => [...prev, { id: uuidv4(), model: "" }]);

  return (
    <div className={styles.container}>
      {/* button for adding new model */}
      <SquareIconButton
        icon={faPlus}
        className={`${styles.add} top-square-button`}
        onClick={addRow}
      />
    </div>
  );
}

export default OfferList;
