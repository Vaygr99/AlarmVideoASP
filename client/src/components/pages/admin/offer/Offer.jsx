import { useState, useEffect } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import DbError from "../../../ui/other/dbError/dbError.jsx";
import ButtonList from "../../../ui/menu/buttonList/ButtonList.jsx";

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
      <div id="offer-error">
        <DbError message="Ошибка загрузки данных..." />
      </div>
    );
  }

  return (
    <div id="offer" className={styles.container}>
      <div>
        <ButtonList text="Заказчик" icon={faChevronDown} list={["one", "two", "three"]} />
      </div>
      <div>Заказ</div>
    </div>
  );
}
export default Offer;
