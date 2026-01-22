import { Link } from "react-router-dom";

// Template for menu links
function BaseLink({ children, to = "*" }) {
  return <Link to={to}>{children}</Link>;
}

export default BaseLink;
