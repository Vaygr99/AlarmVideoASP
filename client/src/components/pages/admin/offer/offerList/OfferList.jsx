import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import SquareIconButton from "../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import OfferRow from "./rows/OfferRow.jsx";
import OfferButtons from "./buttons/OfferButtons.jsx";
import OfferCosts from "./costs/OfferCosts.jsx";

import styles from "./OfferList.module.css";

function OfferList({ rows = [], ...props }) {
  // action (string) - do you use OfferList to create offer ("create") or update ("update")?

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
      {/* offer rows title */}
      <div className={styles.title}>
        <div>
          <span>Модель</span>
        </div>
        <div>
          <span>Описание</span>
        </div>
        <div>
          <span>Ед. изм.</span>
        </div>
        <div>
          <span>Цена</span>
        </div>
        <div>
          <span>Колич.</span>
        </div>
        <div>
          <span>Сума</span>
        </div>
      </div>
      {/* offer rows list */}
      {rows.map((elem) => (
        <OfferRow
          key={elem.id}
          {...props}
          currentOffer={elem}
          deleteRow={deleteRow}
          canDelete={rows.length > 1}
        />
      ))}
      {/* button for adding new model */}
      <SquareIconButton
        icon={faPlus}
        className={`${styles.add} top-square-button`}
        onClick={addRow}
      />

      {/* additional costs and total cost */}
      <OfferCosts {...props} />

      {/* offer buttons at the bottom */}
      <OfferButtons action={"create"} />
    </div>
  );
}

export default OfferList;
