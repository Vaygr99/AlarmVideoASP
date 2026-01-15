import { faTrashCan, faF } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import NewClient from "./clients/newClient/NewClient.jsx";
import FoundClients from "./clients/foundClients/FoundClients.jsx";
import NewDevice from "./devices/newDevice/NewDevice.jsx";
import Loader from "../../../ui/other/loader/Loader.jsx";
import DbError from "../../../ui/other/dbError/dbError.jsx";

import { getDataForEditPage } from "../../../../models/dbOperations/getDbData.js";

import styles from "./Edit.module.css";

// Page for working with clients and devices
function Edit() {
  // data from server
  const [data, setData] = useState(null);
  // data loading status
  const [loading, setLoading] = useState(true);
  // db operations error message
  const [dbError, setDbError] = useState("");

  const [inputName, setInputName] = useState("");

  useEffect(() => {
    getDataForEditPage(setData, setLoading, setDbError);
  }, []);

  // if error, when loading data from server
  if (dbError) {
    console.error(`Loading error: ${dbError}`);
    return (
      <div id="edit" className={styles.container}>
        <DbError message="Ошибка загрузки данных..." />
      </div>
    );
  }

  return (
    <div id="edit" className={styles.container}>
      {/* Loader animation */}
      {loading && <Loader />}

      {/* Clients area */}
      <div className={styles.clients}>
        <h2>Клiєнти</h2>
        <NewClient
          setInputName={setInputName}
          icons={{ faTrashCan, faF }}
          data={data}
          setData={setData}
          setLoading={setLoading}
        />
        <FoundClients data={data} inputName={inputName} icon={faTrashCan} />
      </div>

      {/* Devices area */}
      <div className={styles.devices}>
        <div>
          <h2>Обладнання</h2>
          {/*<NewDevice icons={{ faTrashCan, faF }} />*/}
        </div>
      </div>
    </div>
  );
}

export default Edit;
