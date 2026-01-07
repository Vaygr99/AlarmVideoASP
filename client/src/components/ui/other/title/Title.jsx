import { Link } from "react-router-dom";

import logo from "../../../../assets/images/logo.svg";

import styles from "./Title.module.css";

// Title container from logo area (image + text)
function Title() {
  return (
    <Link id="title" to="/" className={styles.container}>
      {/* Logo image */}
      <div className={styles.logo}>
        <img alt={logo} src={logo} />
      </div>
      {/* Business owner */}
      <section className={styles.text}>
        <p>
          ФОП Пiлецький О.С.
          <br />
          <span>Безпека та Вiдео</span>
        </p>
      </section>
    </Link>
  );
}

export default Title;
