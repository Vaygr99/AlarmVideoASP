import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ControlledIconInput from "../../../../../ui/inputs/iconInput/ControlledIconInput.jsx";
import ModelsList from "../modelsList/ModelsList.jsx";

import TextButton from "../../../../../ui/buttons/textButton/TextButton.jsx";

import styles from "./NewDevice.module.css";

import { addNewDevice } from "../../../../../../models/dbOperations/postDbData.js";

// Add new device on edit page
function NewDevice({
  icons,
  setInputDeviceName,
  data = {},
  setData,
  setLoading,
  ...props
}) {
  const [name, setName] = useState("");

  const [models, setModels] = useState([]);

  // clear inputs
  useEffect(() => {
    //setName("");
    //setInputDeviceName("");
    setModels([{ id: uuidv4(), model: "" }]);
  }, [data]);

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
                setInputDeviceName(e.target.value);
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
              addNewDevice(name, models, setData, setLoading, setNewDeviceError)
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
