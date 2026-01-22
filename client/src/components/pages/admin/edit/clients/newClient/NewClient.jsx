import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

import ControlledIconInput from "../../../../../ui/inputs/iconInput/ControlledIconInput.jsx";
import IconTextarea from "../../../../../ui/inputs/iconTextarea/IconTextarea.jsx";
import PhoneInput from "../../../../../ui/other/phoneInput/PhoneInput.jsx";
import TextButton from "../../../../../ui/buttons/textButton/TextButton.jsx";

import styles from "./NewClient.module.css";

import { addNewClient } from "../../../../../../models/dbOperations/postDbData.js";

// Add new client on edit page
function NewClient({
  icons,
  setInputClientName,
  data,
  setData,
  setLoading,
  ...props
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const infoRef = useRef(null);
  // Add new client error
  const [newClientError, setNewClientError] = useState(false);

  // clear inputs
  useEffect(() => {
    setName("");
    setInputClientName("");
    setPhone("");
    infoRef.current.value = "";
  }, [data]);

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
              onChange={(e) => {
                setName(e.target.value);
                setInputClientName(e.target.value);
              }}
              placeholder="Назва об'єкту"
              icon={icons.faTrashCan}
            />
          </div>
        </div>

        {/* Client phone */}
        <div className={styles.newData}>
          <span>Телефон:</span>
          <div className={styles.newPhone}>
            <PhoneInput
              value={phone}
              setState={setPhone}
              icon={icons.faTrashCan}
            />
          </div>
        </div>

        {/* Useful info */}
        <div className={`${styles.newData} ${styles.newTextarea}`}>
          <span>Инфо:</span>
          <IconTextarea
            textareaRef={infoRef}
            placeholder="Информация"
            icon={icons.faTrashCan}
          />
        </div>

        {/* Add new client button */}
        <div className={styles.saveData}>
          <TextButton
            text="Добавить"
            onClick={() =>
              addNewClient(
                name,
                phone,
                infoRef,
                setData,
                setLoading,
                setNewClientError
              )
            }
          />
        </div>
        {/* Error message */}
        {newClientError && <p>Ошибка добавления нового клиента</p>}
      </div>
    </>
  );
}

export default NewClient;
