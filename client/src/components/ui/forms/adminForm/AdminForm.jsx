import PasswordInput from "./passwordInput/PasswordInput.jsx";
import Submit from "./submit/Submit.jsx";

// Admin form from mini area (pussword input and submit/cancel buttons)
function AdminForm({ ...props }) {
  return (
    <form>
      <h2>Логин</h2>
      <PasswordInput />
      <Submit {...props} />
    </form>
  );
}

export default AdminForm;
