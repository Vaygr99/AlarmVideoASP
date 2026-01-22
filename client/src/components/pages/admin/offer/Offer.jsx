import { useState, useEffect } from "react";

import styles from "./Offer.module.css";

import { getDataForPages } from "../../../../models/dbOperations/getDbData.js";

// Page for creating offers
function Offer() {
  // data from server
  const [data, setData] = useState({});
  // data loading status
  const [loading, setLoading] = useState(true);
  // db operations error message
  const [dbError, setDbError] = useState("");

  useEffect(() => {
    getDataForPages(setData, setLoading, setDbError);
  }, []);

  // if error, when loading data from server
  if (dbError) {
    console.error(`Loading error: ${dbError}`);
    return (
      <div id="offer">
        <DbError message="Ошибка загрузки данных..." />
      </div>
    );
  }

  return (
    <div id="offer" className={styles.container}>
      <div>Клиент</div>
      <div>Заказ</div>
    </div>
  );
}
export default Offer;
