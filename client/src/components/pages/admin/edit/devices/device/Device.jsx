import { useState, useEffect, useRef } from "react";

import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";
import ModelsList from "../modelsList/ModelsList.jsx";
import TextButton from "../../../../../ui/buttons/textButton/TextButton.jsx";

import { updateDevice } from "../../../../../../models/dbOperations/putDbData.js";
import { deleteDevice } from "../../../../../../models/dbOperations/deleteDbData.js";

// One of devices, found by name filter
function Device({
  data,
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
    <div>
      {/* Device */}
      <div>
        <span>Устройство:</span>
        <div>
          <UncontrolledIconInput
            placeholder="Назва об'єкту"
            icon={icon}
            inputRef={nameRef}
          />
        </div>
      </div>

      {/* Models list */}
      <ModelsList models={models} setModels={setModels} />

      <div>
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
              data,
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
    </div>
  );
}

export default Device;
