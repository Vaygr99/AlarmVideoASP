import { useState, useEffect, useRef } from "react";

import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";
import PhoneInput from "../../../../../ui/other/phoneInput/PhoneInput.jsx";
import IconTextarea from "../../../../../ui/inputs/iconTextarea/IconTextarea.jsx";
import TextButton from "../../../../../ui/buttons/textButton/TextButton.jsx";

import styles from "./Client.module.css";

import { updateClient } from "../../../../../../models/dbOperations/putDbData.js";
import { deleteClient } from "../../../../../../models/dbOperations/deleteDbData.js";

// One of clients, found by name filter
function Client({ data, setData, setLoading, client = {}, icon }) {
  // client - client object (properties: _id, name, phone, info)

  const [phone, setPhone] = useState(client.phone);
  const nameRef = useRef(null);
  const infoRef = useRef(null);

  // Update client error
  const [updateClientError, setUpdateClientError] = useState(false);
  // Delete client error
  const [deleteClientError, setDeleteClientError] = useState(false);

  useEffect(() => {
    nameRef.current.value = client.name;
    infoRef.current.value = client.info;
  }, []);

  return (
    <div className={styles.container}>
      <div>
        {/* Customer */}
        <div className={styles.newData}>
          <span>Заказчик:</span>
          <div className={styles.newClient}>
            <UncontrolledIconInput
              placeholder="Назва об'єкту"
              icon={icon}
              ref={nameRef}
            />
          </div>
        </div>
        {/* Client phone */}
        <div className={styles.newData}>
          <span>Телефон:</span>
          <PhoneInput value={phone} setState={setPhone} icon={icon} />
        </div>
        {/* Useful info */}
        <div className={styles.newData}>
          <span>Инфо:</span>
          <IconTextarea ref={infoRef} placeholder="Информация" icon={icon} />
        </div>

        {/* Update client button */}
        <div>
          <TextButton
            text="Обновить"
            onClick={() =>
              updateClient(
                {
                  _id: client._id,
                  name: nameRef.current.value,
                  phone,
                  info: infoRef.current.value,
                },
                data,
                setData,
                setLoading,
                setUpdateClientError
              )
            }
          />
        </div>
        {/* Delete client button */}
        <div>
          <TextButton
            text="Удалить"
            onClick={() =>
              deleteClient(
                client._id,
                setData,
                setDeleteClientError,
                setLoading
              )
            }
          />
        </div>
        {/* Error message */}
        {updateClientError && <p>Ошибка изменения клиента</p>}
        {deleteClientError && <p>Ошибка удаления клиента</p>}
      </div>
    </div>
  );
}

export default Client;
