import styles from "./Edit.module.css";

// Page for working with clients and devices
function Edit() {
  return (
    <div id="edit" className={styles.container}>
      {/* Clients area */}
      <div className={styles.clients}>
        <div>
          <h2>Клiєнти</h2>
        </div>
      </div>

      {/* Devices area */}
      <div className={styles.devices}>
        <div>
          <h2>Обладнання</h2>
        </div>
      </div>
    </div>
  );
}

export default Edit;
