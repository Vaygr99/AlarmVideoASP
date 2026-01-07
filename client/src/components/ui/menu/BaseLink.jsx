import { Link } from "react-router-dom";

// Template for menu links
function BaseLink({ children, className, to }) {
  return (
    <Link to={to} className={className ?? ""}>
      {children}
    </Link>
  );
}

export default BaseLink;
