import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import IconInput from "../../../../ui/inputs/iconInput/IconInput.jsx";
import IconTextarea from "../../../../ui/inputs/iconTextarea/IconTextarea.jsx";
import PhoneInput from "../../../../ui/other/phoneInput/PhoneInput.jsx";

import styles from "./NewClient.module.css";

// Add new client on edit page
function NewClient({ icons }) {
  const [phone, setPhone] = useState("");
  return (
    <>
      {/* Add new client */}
      <div className={styles.container}>
        <h3>Додати новий...</h3>
        {/* Customer */}
        <div className={styles.newData}>
          <span>Заказчик:</span>
          <div>
            <span>
              <FontAwesomeIcon icon={icons.faF} />
            </span>
            <IconInput placeholder="Назва об'єкту" icon={icons.faTrashCan} />
          </div>
        </div>

        {/* Client phone */}
        <div className={styles.newData}>
          <span>Телефон:</span>
          <PhoneInput
            value={phone}
            onChange={setPhone}
            icon={icons.faTrashCan}
          />
        </div>

        {/* Useful info */}
        <div className={styles.newData}>
          <span>Инфо:</span>
          <IconTextarea placeholder="Информация" icon={icons.faTrashCan} />
        </div>
      </div>
    </>
  );
}

export default NewClient;
