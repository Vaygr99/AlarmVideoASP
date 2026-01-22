import { useState, useEffect, useRef } from "react";

import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";
import ModelsList from "../modelsList/ModelsList.jsx";
import TextButton from "../../../../../ui/buttons/textButton/TextButton.jsx";

import styles from "./Device.module.css";

import { updateDevice } from "../../../../../../models/dbOperations/putDbData.js";
import { deleteDevice } from "../../../../../../models/dbOperations/deleteDbData.js";

// One of devices, found by name filter
function Device({
  setData,
  setLoading,
  modelsArray = [],
  device = {},
  icon,
}) {
  const nameRef = useRef(null);
  const [models, setModels] = useState(modelsArray);

  // Update device error
  const [updateDeviceError, setUpdateDeviceError] = useState(false);
  // Delete device error
  const [deleteDeviceError, setDeleteDeviceError] = useState(false);

  useEffect(() => {
    nameRef.current.value = device.name;
  }, []);

  return (
    <div className={styles.container}>
      
        {/* Device */}
        <div className={styles.data}>
          <span>Устройство:</span>
          <div className={styles.device}>
            <UncontrolledIconInput
              placeholder="Назва об'єкту"
              icon={icon}
              inputRef={nameRef}
            />
          </div>
        </div>

        {/* Models list */}
        <ModelsList models={models} setModels={setModels} />

        <div className={styles.buttons}>
          {/* Update device button */}
          <TextButton
            text="Обновить"
            onClick={() =>
              updateDevice(
                {
                  _id: device._id,
                  name: nameRef.current.value,
                  models,
                },
                setData,
                setLoading,
                setUpdateDeviceError
              )
            }
          />
          {/* Delete device button */}
          <TextButton
            text="Удалить"
            onClick={() =>
              deleteDevice(
                device._id,
                setData,
                setDeleteDeviceError,
                setLoading
              )
            }
          />
        </div>

        {/* Error message */}
        {updateDeviceError && <p>Ошибка изменения устройства</p>}
        {deleteDeviceError && <p>Ошибка удаления устройства</p>}
      
    </div>
  );
}

export default Device;
