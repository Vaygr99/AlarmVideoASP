import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconInput from "../../../../ui/inputs/iconInput/IconInput.jsx";

// Add new device on edit page
function NewDevice({ icons }) {
  return (
    <>
      {/* Add new device */}
      <div>
        <h3>Додати новий...</h3>
        {/* Device name */}
        <div>
          <span>Заказчик:</span>
          <div>
            <span>
              <FontAwesomeIcon icon={icons.faF} />
            </span>
            <IconInput placeholder="Назва об'єкту" icon={icons.faTrashCan} />
          </div>
        </div>

        {/* Device model */}
        <div>
          <span>Заказчик:</span>
          <div>
            <span>
              <FontAwesomeIcon icon={icons.faF} />
            </span>
            <IconInput placeholder="Назва об'єкту" icon={icons.faTrashCan} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewDevice;
