import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Model from "./Model.jsx";
import SquareIconButton from "../../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./ModelsList.module.css";

// Models list
function ModelsList({ models, setModels }) {
  // change value of model input
  const updateModel = (id, value) => {
    setModels((prew) =>
      prew.map((elem) => (elem.id === id ? { ...elem, model: value } : elem))
    );
  };

  return (
    <div className={styles.container}>
      <p>Модель:</p>
      {models.map((elem) => (
        <Model key={elem.id} model={elem} updateModel={updateModel} />
      ))}
      {/* button for adding new model */}
      <SquareIconButton
        icon={faPlus}
        className={`${styles.add} top-square-button`}
      />
    </div>
  );
}

export default ModelsList;
