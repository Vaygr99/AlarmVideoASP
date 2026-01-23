import styles from "./List.module.css";

// List to show different info (not in header area) 
function List({ list }) {
  return (
    <nav className={styles.container}>
      {list.map((elem) => (
        <button><span>{elem}</span></button>
      ))}
    </nav>
  );
}

export default List;
