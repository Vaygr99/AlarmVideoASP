import { faChevronDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import ButtonList from "../../../../ui/menu/buttonList/ButtonList.jsx";
import ControlledIconInput from "../../../../ui/inputs/iconInput/ControlledIconInput.jsx";

import styles from "./OfferRow.module.css";

// Create row, consisting of: model, its name, unit, device price,
// quantity, result = price * quantity
function OfferRow({ row, setRows }) {
  return (
    <div className={styles.container}>
      <ButtonList
        className={styles.model}
        text={row.model}
        icon={faChevronDown}
      />
      <ButtonList
        className={styles.name}
        text={row.name}
        icon={faChevronDown}
      />
      <ButtonList
        className={styles.unit}
        text={row.unit}
        icon={faChevronDown}
      />
      <ControlledIconInput
        className={styles.price}
        value={0}
        onChange={(e) => {}}
        placeholder="0"
        icon={faTrashCan}
      />
      <ControlledIconInput
        className={styles.quantity}
        value={0}
        onChange={(e) => {}}
        placeholder="0"
        icon={faTrashCan}
      />
      <div className={styles.result}>
        <span>{123340}</span>
      </div>
    </div>
  );
}

export default OfferRow;
