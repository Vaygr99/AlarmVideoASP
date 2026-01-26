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
          <span>{0} грн.</span>
        </div>
        <div>
          <ControlledIconInput
            value={roadCost}
            onChange={(e) => {
              setRoadCost(e.target.value);
            }}
            placeholder="0"
            icon={faTrashCan}
          />
        </div>
        <div>
          <ControlledIconInput
            value={mountCost}
            onChange={(e) => {
              setMountCost(e.target.value);
            }}
            placeholder="0"
            icon={faTrashCan}
          />
        </div>
        <div>
          <ControlledIconInput
            value={projectCost}
            onChange={(e) => {
              setProjectCost(e.target.value);
            }}
            placeholder="0"
            icon={faTrashCan}
          />
        </div>
        <div className={styles.result}>
          <span>{0} грн.</span>
        </div>
      </div>
    </div>
  );
}

export default OfferCosts;
