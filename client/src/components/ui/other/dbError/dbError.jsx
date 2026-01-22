import styles from "./dbError.module.css";

// set message, when db operations error
function dbError({ message = "!No Message!" }) {
  return (
    <div id="loading-error" className={styles.container}>
      <p>{message}</p>
      <div>
        <div className={styles.errorCirle}></div>
        <div className={styles.errorLeftEye}></div>
        <div className={styles.errorRightEye}></div>
        <div className={styles.errorMouth}></div>
      </div>
    </div>
  );
}

export default dbError;
