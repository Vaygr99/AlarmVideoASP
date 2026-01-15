import { useState, useEffect, useRef } from "react";

import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";
import PhoneInput from "../../../../../ui/other/phoneInput/PhoneInput.jsx";
import IconTextarea from "../../../../../ui/inputs/iconTextarea/IconTextarea.jsx";

import styles from "./Client.module.css";

// One of clients, found by name filter
function Client({ client = {}, icon }) {
  // client - client object (properties: _id, name, phone, info)

  const [phone, setPhone] = useState(client.phone);
  const nameRef = useRef(null);
  const infoRef = useRef(null);

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
      </div>
    </div>
  );
}

export default Client;
