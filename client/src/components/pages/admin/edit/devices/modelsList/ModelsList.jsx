import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import Model from "./Model.jsx";
import SquareIconButton from "../../../../../ui/buttons/squareIconButton/SquareIconButton.jsx";

import styles from "./ModelsList.module.css";

// Models list
function ModelsList({ models = [], setModels }) {
  // change value of model input
  const updateModel = (id, value) => {
    setModels((prew) =>
      prew.map((elem) => (elem.id === id ? { ...elem, model: value } : elem))
    );
  };
  // add new model
  const addModel = () =>
    setModels((prev) => [...prev, { id: uuidv4(), model: "" }]);
  // delete model
  const deleteModel = (id) =>
    setModels((prev) => prev.filter((elem) => elem.id !== id));

  return (
    <div className={styles.container}>
      <p>Модель:</p>
      {models.map((elem) => (
        <Model key={elem.id} model={elem} updateModel={updateModel} deleteModel={deleteModel} canDelete={models.length > 1} />
      ))}
      {/* button for adding new model */}
      <SquareIconButton
        icon={faPlus}
        className={`${styles.add} top-square-button`}
        onClick={addModel}
      />
    </div>
  );
}

export default ModelsList;
