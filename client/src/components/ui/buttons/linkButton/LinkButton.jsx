import { Link } from "react-router-dom";

import styles from "./LinkButton.module.css";

function LinkButton({ to, text, className }) {
  return (
    <Link to={to ?? "*"} className={`${styles.container} ${className ?? ""}`}>
      {text}
    </Link>
  );
}

export default LinkButton;
