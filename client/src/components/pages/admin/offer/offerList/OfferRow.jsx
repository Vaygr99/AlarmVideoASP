import { faChevronDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import ButtonList from "../../../../ui/menu/buttonList/ButtonList.jsx";
import ControlledIconInput from "../../../../ui/inputs/iconInput/ControlledIconInput.jsx";

import styles from "./OfferRow.module.css";

// Create row, consisting of: model, its name, unit, device price,
// quantity, result = price * quantity
function OfferRow({ currentOffer = {}, setRows, devices }) {
  //const [row, setRow] = useState(currentOffer);
  // object, containing selected device name and its id
  const [deviceName, setDeviceName] = useState({});

  useEffect(() => {
    setRows((prev) =>
      prev.map((elem) => {
        return elem.id === currentOffer.id
          ? { ...elem, name: deviceName.name }
          : elem;
      }),
    );
  }, [deviceName.id]);

  return (
    <div className={styles.container}>
      <ButtonList
        className={styles.model}
        text={currentOffer.model}
        icon={faChevronDown}
      />
      {/* device name */}
      <ButtonList
        className={styles.name}
        text={currentOffer.name}
        icon={faChevronDown}
        list={devices.map((elem) => ({
          id: elem._id,
          name: elem.name,
        }))}
        checkValue={setDeviceName}
      />
      <ButtonList
        className={styles.unit}
        text={currentOffer.unit}
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
