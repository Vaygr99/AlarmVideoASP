import { useEffect, useRef } from "react";

import UncontrolledIconInput from "../../../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";

import styles from "./Client.module.css";

// One of clients, found by name filter
function Client({ client, icon }) {
  // client - client object (properties: _id, name, phone, info)

  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.value = client.name;
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
      </div>
    </div>
  );
}

export default Client;
