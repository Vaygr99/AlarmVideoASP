import PasswordInput from "./passwordInput/PasswordInput.jsx";
import Submit from "./submit/Submit.jsx";

import styles from "./AdminForm.module.css";

// Admin form from mini area (pussword input and submit/cancel buttons)
function AdminForm({ ...props }) {
  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        // no page reloading (React is Single Page Application)
        e.preventDefault();
        if (true) props.onClick();
      }}
    >
      <h2>Логин</h2>
      <PasswordInput />
      <Submit />
    </form>
  );
}

export default AdminForm;
