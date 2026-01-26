import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import ControlledIconInput from "../../../../../ui/inputs/ControlledInput.jsx";

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
  ...props
}) {
  return (
    <div>
      <div>
        <span>Материалы:</span>
        <span>Транспортные расходы:</span>
        <span>Монтаж, настройки:</span>
        <span>Проект:</span>
        <span>Всего:</span>
      </div>
      <div>
        <div>
          <span>{0}</span>
        </div>
        <div>
          <ControlledIconInput
            {...props}
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
            {...props}
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
            {...props}
            value={projectCost}
            onChange={(e) => {
              setProjectCost(e.target.value);
            }}
            placeholder="0"
            icon={faTrashCan}
          />
        </div>
        <div>
          <span>{0}</span>
        </div>
      </div>
    </div>
  );
}

export default OfferCosts;
