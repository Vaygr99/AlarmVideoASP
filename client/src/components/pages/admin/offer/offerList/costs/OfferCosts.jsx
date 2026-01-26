import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import ControlledIconInput from "../../../../../ui/inputs/iconInput/ControlledIconInput";

import styles from "./OfferCosts.module.css";

{
  /* additional costs and total cost */
}
function OfferCosts({
  roadCost,
  setRoadCost,
  mountCost,
  setMountCost,
  projectCost,
  setProjectCost,
}) {
  return (
    <div className={styles.container}>
      <div>
        <span>Материалы:</span>
        <span>Транспортные расходы:</span>
        <span>Монтаж, настройки:</span>
        <span>Проект:</span>
        <span>Всего:</span>
      </div>
      <div>
        <div className={styles.result}>
          <span>{(1234).toLocaleString("de-DE")} грн.</span>
        </div>
        <div>
          <ControlledIconInput
            value={roadCost}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setRoadCost(value);
              }
            }}
            placeholder="0"
            icon={faTrashCan}
          />
        </div>
        <div>
          <ControlledIconInput
            value={mountCost}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setMountCost(value);
              }
            }}
            placeholder="0"
            icon={faTrashCan}
          />
        </div>
        <div>
          <ControlledIconInput
            value={projectCost}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setProjectCost(value);
              }
            }}
            placeholder="0"
            icon={faTrashCan}
          />
        </div>
        <div className={styles.result}>
          <span>{(1234).toLocaleString("de-DE")} грн.</span>
        </div>
      </div>
    </div>
  );
}

export default OfferCosts;
