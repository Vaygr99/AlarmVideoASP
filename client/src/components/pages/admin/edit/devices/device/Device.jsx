import { useState, useEffect, useRef } from "react";

import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";
import ModelsList from "../modelsList/ModelsList.jsx";

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
    </div>
  );
}

export default Device;
