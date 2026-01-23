import { useState, useEffect, useRef } from "react";
import { faChevronDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import DbError from "../../../ui/other/dbError/dbError.jsx";
import ButtonList from "../../../ui/menu/buttonList/ButtonList.jsx";
import UncontrolledIconInput from "../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";

import styles from "./Offer.module.css";

import { getDataForPages } from "../../../../models/dbOperations/getDbData.js";

// Page for creating offers
function Offer() {
  // data from server
  const [data, setData] = useState(null);
  // data loading status
  const [loading, setLoading] = useState(true);
  // db operations error message
  const [dbError, setDbError] = useState("");

  let nameRef = useRef("");

  useEffect(() => {
    getDataForPages(setData, setLoading, setDbError);
  }, []);

  // if error, when loading data from server
  if (dbError) {
    console.error(`Loading error: ${dbError}`);
    return (
      <div id="offer-error">
        <DbError message="Ошибка загрузки данных..." />
      </div>
    );
  }

  return (
    <div id="offer" className={styles.container}>
      <div className={styles.title}>
        <div>
          <span>Заказчик:</span>
          <ButtonList
            text="Заказчик"
            icon={faChevronDown}
            list={data?.clients.map((elem) => elem.name)}
          />
        </div>
        <div>
          <span>Телефон:</span>
          <span>{}</span>
        </div>
        <div>
          <span>Дата:</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div>
          <span>Адрес:</span>
          <div>
            <UncontrolledIconInput
              placeholder="Назва об'єкту"
              icon={faTrashCan}
              inputRef={nameRef}
            />
          </div>
        </div>
      </div>

      <div className={styles.body}>Заказ</div>
    </div>
  );
}
export default Offer;
