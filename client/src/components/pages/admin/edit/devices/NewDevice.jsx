import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconInput from "../../../../ui/inputs/iconInput/IconInput.jsx";

import styles from "./NewDevice.module.css";

// Add new device on edit page
function NewDevice({ icons }) {
  return (
    <>
      {/* Add new device */}
      <div className={styles.container}>
        <h3>Додати новий...</h3>
        {/* Device name */}
        <div className={styles.newData}>
          <span>Назва:</span>
          <IconInput placeholder="Назва об'єкту" icon={icons.faTrashCan} />
        </div>

        {/* Device model */}
        <div className={styles.newData}>
          <span>Модель:</span>
          <IconInput placeholder="Назва об'єкту" icon={icons.faTrashCan} />
        </div>
      </div>
    </>
  );
}

export default NewDevice;
