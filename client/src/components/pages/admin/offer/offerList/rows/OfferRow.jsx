import {
  faChevronDown,
  faTrashCan,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ButtonList from "../../../../../ui/menu/buttonList/ButtonList.jsx";
import ControlledIconInput from "../../../../../ui/inputs/iconInput/ControlledIconInput.jsx";
import SquareIconButton from "../../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./OfferRow.module.css";

// Create row, consisting of: model, its name, unit, device price,
// quantity, result = price * quantity
function OfferRow({
  currentOffer = {},
  setRows,
  devices,
  deleteRow,
  canDelete,
}) {
  // object, containing selected device name and its id
  const [deviceName, setDeviceName] = useState({ id: null, name: "" });
  // object, containing selected device model and its id
  const [deviceModel, setDeviceModel] = useState({ id: null, name: "" });
  // object, containing selected unit and its id
  const [unit, setUnit] = useState({ id: null, name: "" });
  const unitsArray = ["шт.", "м.", "компл."];
  // device price
  const [price, setPrice] = useState("");
  // device quantity
  const [quantity, setQuantity] = useState("");

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

  // update unit
  useEffect(() => {
    setRows((prev) =>
      prev.map((elem) => {
        return elem.id === currentOffer.id
          ? { ...elem, unit: unit.name }
          : elem;
      }),
    );
  }, [unit.name]);

  // change price
  useEffect(() => {
    setRows((prev) =>
      prev.map((elem) => {
        return elem.id === currentOffer.id ? { ...elem, price } : elem;
      }),
    );
  }, [price]);

  // change quantity
  useEffect(() => {
    setRows((prev) =>
      prev.map((elem) => {
        return elem.id === currentOffer.id ? { ...elem, quantity } : elem;
      }),
    );
  }, [quantity]);

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
      {/* unit */}
      <ButtonList
        className={styles.unit}
        text={currentOffer.unit}
        icon={faChevronDown}
        list={unitsArray.map((elem) => ({
          id: uuidv4(),
          name: elem,
        }))}
        checkValue={setUnit}
      />
      {/* price */}
      <ControlledIconInput
        className={styles.price}
        value={price}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value)) {
            setPrice(value);
          }
        }}
        placeholder="0"
        icon={faTrashCan}
      />
      {/* quantity */}
      <ControlledIconInput
        className={styles.quantity}
        value={quantity}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value)) {
            setQuantity(value);
          }
        }}
        placeholder="0"
        icon={faTrashCan}
      />
      <div className={styles.result}>
        <span>{currentOffer.price * currentOffer.quantity || 0} грн.</span>
      </div>
      {/* delete offer row */}
      <SquareIconButton
        icon={faMinus}
        className="top-square-button"
        onClick={() => {
          canDelete && deleteRow(currentOffer.id);
        }}
      />
    </div>
  );
}

export default OfferRow;
