// Displays company logo and company name inside the header
import { Link } from "react-router-dom";

import logo from "../../../../assets/images/logo.svg";

import styles from "./Title.module.css";

function Title() {
  return (
    <Link id="title" to="/" className={styles.container}>
      <div className={styles.logo}>
        <img alt={logo} src={logo} />
      </div>
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
