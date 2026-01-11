import { Link } from "react-router-dom";

import styles from "./LinkButton.module.css";

// Link button template
function LinkButton({ to = "*", className = "", children }) {
  return (
    <Link to={to} className={`${styles.container} ${className}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
