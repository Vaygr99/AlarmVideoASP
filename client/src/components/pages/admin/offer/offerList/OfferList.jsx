import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import SquareIconButton from "../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./OfferList.module.css";
import OfferRow from "./OfferRow.jsx";

function OfferList({ rows = [], ...props }) {
  // add new offer row
  const addRow = () =>
    props.setRows((prev) => [
      ...prev,
      { model: "", price: "", quantity: "", unit: "", name: "", id: uuidv4() },
    ]);
  // delete offer row
  const deleteRow = (id) =>
    props.setRows((prev) => prev.filter((elem) => elem.id !== id));

  return (
    <div className={styles.container}>
      {rows.map((elem) => (
        <OfferRow
          key={elem.id}
          {...props}
          currentOffer={elem}
          deleteRow={deleteRow}
        />
      ))}
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
