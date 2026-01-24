import { useState, useEffect, useRef } from "react";
import { faChevronDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import DbError from "../../../ui/other/dbError/dbError.jsx";
import ButtonList from "../../../ui/menu/buttonList/ButtonList.jsx";
import UncontrolledIconInput from "../../../ui/inputs/iconInput/UncontrolledIconInput.jsx";
import OfferList from "../offer/offerList/OfferList.jsx";

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
  // client object, checked in title section
  const [checkedClient, setCheckedClient] = useState({});
  // offer rows array
  const [offerList, setOfferList] = useState([
    { model: "", price: "", quantity: "", unit: "", name: "", id: uuidv4() },
  ]);
  // new offer
  const [newOffer, setNewOffer] = useState({
    title: "",
    address: "",
    executor: "",
    clientId: checkedClient.id,
    rows: offerList,
    road: "",
    mount: "",
    project: "",
    adjustments: [{ name: "", text: "", id: uuidv4() }],
  });

  console.log(newOffer);

  // references
  const executorRef = useRef(null);
  const addressRef = useRef(null);
  const titleRef = useRef(null);

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
      <h2>Комерцiйна пропозицiя</h2>
      {/* title section */}
      <div className={styles.title}>
        <div>
          {/* Client */}
          <span>Заказчик:</span>
          <ButtonList
            text={checkedClient.name || ""}
            icon={faChevronDown}
            list={data?.clients.map((elem) => ({
              id: elem._id,
              name: elem.name,
              phone: elem.phone,
            }))}
            checkValue={setCheckedClient}
          />
        </div>
        {/* Client's phone */}
        <div>
          <span>Телефон:</span>
          <span>{checkedClient.phone}</span>
        </div>
        {/* date of offer creation */}
        <div>
          <span>Дата:</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        {/* address of object */}
        <div>
          <span>Адрес:</span>
          <div>
            <UncontrolledIconInput
              placeholder="Назва об'єкту"
              icon={faTrashCan}
              inputRef={addressRef}
            />
          </div>
        </div>
        {/* executor of work */}
        <div>
          <span>Исполнитель:</span>
          <div>
            <UncontrolledIconInput
              placeholder="Исполнитель"
              icon={faTrashCan}
              inputRef={executorRef}
            />
          </div>
        </div>
      </div>

      {/* body section */}
      <div className={styles.body}>
        {/* type of task */}
        <div className={styles.taskType}>
          <span>Тип задачи:</span>
          <div>
            <UncontrolledIconInput
              placeholder="Тип задачи"
              icon={faTrashCan}
              inputRef={titleRef}
            />
          </div>
        </div>
        <OfferList rows={offerList} setRows={setOfferList} />
      </div>
    </div>
  );
}
export default Offer;
