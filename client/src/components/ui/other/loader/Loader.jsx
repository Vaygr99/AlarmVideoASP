import styles from "./Loader.module.css";

// Loader animation, since data from server is loading
function Loader() {
  return (
    <div id="loader" className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}></div>
      </div>
    </div>
  );
}

export default Loader;
