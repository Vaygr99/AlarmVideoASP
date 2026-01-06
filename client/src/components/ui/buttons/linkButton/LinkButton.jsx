import { Link } from "react-router-dom";

function LinkButton({ to, text, className }) {
  return (
    <Link to={to ?? "*"} className={`${className ?? ""}`}>{text}</Link>
  );
}

export default LinkButton;
