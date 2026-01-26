import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import SquareIconButton from "../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import OfferRow from "./OfferRow.jsx";
import OfferButtons from "./OfferButtons.jsx";
import ControlledIconInput from "../../../../ui/inputs/ControlledInput.jsx";

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
      <div>
        <div>
          <span>Материалы:</span>
          <span>Транспортные расходы:</span>
          <span>Монтаж, настройки:</span>
          <span>Проект:</span>
          <span>Всего:</span>
        </div>
        <div>
          <div>
            <span>{0}</span>
          </div>
          <div className={styles.newDevice}>
            <ControlledIconInput
              {...props}
              value={props.roadCost}
              onChange={(e) => {
                props.setRoadCost(e.target.value);
              }}
              placeholder="0"
              icon={faTrashCan}
            />
          </div>
          <div className={styles.newDevice}>
            <ControlledIconInput
              {...props}
              value={props.mountCost}
              onChange={(e) => {
                props.setMountCost(e.target.value);
              }}
              placeholder="0"
              icon={faTrashCan}
            />
          </div>
          <div className={styles.newDevice}>
            <ControlledIconInput
              {...props}
              value={props.projectCost}
              onChange={(e) => {
                props.setProjectCost(e.target.value);
              }}
              placeholder="0"
              icon={faTrashCan}
            />
          </div>
          <div>
            <span>{0}</span>
          </div>
        </div>
      </div>

      {/* offer buttons at the bottom */}
      <OfferButtons action={"create"} />
    </div>
  );
}

export default OfferList;
