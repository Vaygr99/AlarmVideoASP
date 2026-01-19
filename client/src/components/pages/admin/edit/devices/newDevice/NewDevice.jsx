import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import {v4 as uuidv4} from "uuid";

import ControlledIconInput from "../../../../../ui/inputs/iconInput/ControlledIconInput.jsx";
import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";
import ModelsList from "../modelsList/ModelsList.jsx";

import TextButton from "../../../../../ui/buttons/textButton/TextButton.jsx";

import styles from "./NewDevice.module.css";

import { addNewDevice } from "../../../../../../models/dbOperations/postDbData.js";

// Add new device on edit page
function NewDevice({
  icons,
  setInputName,
  data,
  setData,
  setLoading,
  ...props
}) {
  const [name, setName] = useState("");
  const modelRef = useRef(null);

  const [models, setModels] = useState([{id: uuidv4(), model: ""}]);

  console.log(models);
  // Add new device error
  const [newDeviceError, setNewDeviceError] = useState(false);
  return (
    <>
      {/* Add new device */}
      <div className={styles.container}>
        <h3>Додати новий...</h3>
        {/* Device */}
        <div className={styles.newData}>
          <span>Устройство:</span>
          <div className={styles.newDevice}>
            <ControlledIconInput
              {...props}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setInputName(e.target.value);
              }}
              placeholder="Назва пристрою"
              icon={icons.faTrashCan}
            />
          </div>
        </div>

        {/* Models list */}
        <ModelsList models={models} setModels={setModels} />

        {/* Add new device button */}
        <div className={styles.saveData}>
          <TextButton
            text="Добавить"
            onClick={() =>
              addNewDevice(
                name,
                setName,
                setInputName,
                modelRef,
                data,
                setData,
                setLoading,
                setNewDeviceError
              )
            }
          />
        </div>
        {/* Error message */}
        {newDeviceError && <p>Ошибка добавления нового устройства</p>}
      </div>
    </>
  );
}

export default NewDevice;
