import Admin from "./admin/Admin.jsx";
import Phone from "./phone/Phone.jsx";
import Theme from "./Theme.jsx";
import Lang from "./lang/Lang.jsx";

import styles from "./Mini.module.css";

function Mini() {
  return (
    <div id="mini" className={styles.container}>
      <Lang />
      <Theme />
      <Phone />
      <Admin />
    </div>
  );
}

export default Mini;
