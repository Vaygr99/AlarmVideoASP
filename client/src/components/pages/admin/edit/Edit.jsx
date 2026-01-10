
import { faTrashCan, faF } from "@fortawesome/free-solid-svg-icons";

import NewClient from "./clients/NewClient.jsx";

import styles from "./Edit.module.css";

// Page for working with clients and devices
function Edit() {
  return (
    <div id="edit" className={styles.container}>
      {/* Clients area */}
      <div className={styles.clients}>
        <h2>Клiєнти</h2>
        <NewClient icons={{faTrashCan, faF}} />
      </div>

      {/* Devices area */}
      <div className={styles.devices}>
        <div>
          <h2>Обладнання</h2>
        </div>
      </div>
    </div>
  );
}

export default Edit;
