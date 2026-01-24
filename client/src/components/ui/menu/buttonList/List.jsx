import styles from "./List.module.css";

// List to show different info (not in header area)
function List({ list = [], checkValue }) {
  return (
    <nav className={styles.container}>
      {list.map((elem) => (
        <button key={elem.id} onClick={() => checkValue(elem)}>
          <span>{elem.name}</span>
        </button>
      ))}
    </nav>
  );
}

export default List;
