import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

import ControlledIconInput from "../../../../../ui/inputs/iconInput/ControlledIconInput.jsx";
import IconTextarea from "../../../../../ui/inputs/iconTextarea/IconTextarea.jsx";
import PhoneInput from "../../../../../ui/other/phoneInput/PhoneInput.jsx";
import TextButton from "../../../../../ui/buttons/textButton/TextButton.jsx";

import styles from "./NewClient.module.css";

// Add new client on edit page
function NewClient({ icons, ...props }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const infoRef = useRef(null);

  return (
    <>
      {/* Add new client */}
      <div className={styles.container}>
        <h3>Додати новий...</h3>
        {/* Customer */}
        <div className={styles.newData}>
          <span>Заказчик:</span>
          <div className={styles.newClient}>
            <span>
              <FontAwesomeIcon icon={icons.faF} />
            </span>
            <ControlledIconInput
              {...props}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Назва об'єкту"
              icon={icons.faTrashCan}
            />
          </div>
        </div>

        {/* Client phone */}
        <div className={styles.newData}>
          <span>Телефон:</span>
          <PhoneInput
            value={phone}
            setState={setPhone}
            icon={icons.faTrashCan}
          />
        </div>

        {/* Useful info */}
        <div className={styles.newData}>
          <span>Инфо:</span>
          <IconTextarea
            ref={infoRef}
            placeholder="Информация"
            icon={icons.faTrashCan}
          />
        </div>

        {/* Add new client button */}
        <div className={styles.saveData}>
          <TextButton text="Зберегти" />
        </div>
      </div>
    </>
  );
}

export default NewClient;
