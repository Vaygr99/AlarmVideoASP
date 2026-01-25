import { faChevronDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import ButtonList from "../../../../ui/menu/buttonList/ButtonList.jsx";
import ControlledIconInput from "../../../../ui/inputs/iconInput/ControlledIconInput.jsx";

import styles from "./OfferRow.module.css";

// Create row, consisting of: model, its name, unit, device price,
// quantity, result = price * quantity
function OfferRow({ currentOffer = {}, setRows, devices }) {
  // object, containing selected device name and its id
  const [deviceName, setDeviceName] = useState({ id: null, name: "" });
  // object, containing selected device model and its id
  const [deviceModel, setDeviceModel] = useState({ id: null, name: "" });

  // update device name
  useEffect(() => {
    // clear selected model name
    setDeviceModel({ id: null, name: "" });
    setRows((prev) =>
      prev.map((elem) => {
        return elem.id === currentOffer.id
          ? { ...elem, model: "", name: deviceName.name }
          : elem;
      }),
    );
  }, [deviceName.id]);

  // update device model
  useEffect(() => {
    setRows((prev) =>
      prev.map((elem) => {
        return elem.id === currentOffer.id
          ? { ...elem, model: deviceModel.name }
          : elem;
      }),
    );
  }, [deviceModel.name]);

  return (
    <div className={styles.container}>
      {/* device model */}
      <ButtonList
        className={styles.model}
        text={currentOffer.model}
        icon={faChevronDown}
        list={devices
          .filter((e) => e._id === deviceName.id)[0]
          ?.models.map((elem) => ({
            id: elem.id,
            name: elem.model,
          }))}
        checkValue={setDeviceModel}
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
