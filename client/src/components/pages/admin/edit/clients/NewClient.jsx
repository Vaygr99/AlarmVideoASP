import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconInput from "../../../../ui/inputs/iconInput/IconInput.jsx";

import styles from "./NewClient.module.css";

// Add new client on edit page
function NewClient({ icons }) {
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
            <IconInput placeholder="Назва об'єкту" icon={icons.faTrashCan}/>  
          </div>
        </div>
        
      </div>
    </>
  );
}

export default NewClient;
