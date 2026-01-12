import { faTrashCan, faF } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import NewClient from "./clients/newClient/NewClient.jsx";
import NewDevice from "./devices/newDevice/NewDevice.jsx";

import { getDataForEditPage } from "../../../../models/dbOperations/getDbData.js";

import styles from "./Edit.module.css";

// Page for working with clients and devices
function Edit() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDataForEditPage(setData);
  }, []);

  return (
    <div id="edit" className={styles.container}>
      {/* Clients area */}
      <div className={styles.clients}>
        <h2>Клiєнти</h2>
        <NewClient icons={{ faTrashCan, faF }} />
      </div>

      {/* Devices area */}
      <div className={styles.devices}>
        <div>
          <h2>Обладнання</h2>
          <NewDevice icons={{ faTrashCan, faF }} />
        </div>
      </div>
    </div>
  );
}

export default Edit;
