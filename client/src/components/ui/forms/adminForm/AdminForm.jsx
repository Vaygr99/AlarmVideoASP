import PasswordInput from "./passwordInput/PasswordInput.jsx";
import Submit from "./submit/Submit.jsx";

import styles from "./AdminForm.module.css";

// Admin form from mini area (pussword input and submit/cancel buttons)
function AdminForm({ ...props }) {
  return (
    <form className={styles.container}>
      <h2>Логин</h2>
      <PasswordInput />
      <Submit {...props} />
    </form>
  );
}

export default AdminForm;
