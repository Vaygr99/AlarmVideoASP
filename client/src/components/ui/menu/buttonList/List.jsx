import { v4 as uuidv4 } from "uuid";

import styles from "./List.module.css";

// List to show different info (not in header area)
function List({ list = [] }) {
  return (
    <nav className={styles.container}>
      {list.map((elem) => (
        <button key={uuidv4()}>
          <span>{elem}</span>
        </button>
      ))}
    </nav>
  );
}

export default List;
