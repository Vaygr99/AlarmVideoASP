import { NavLink, Outlet } from "react-router-dom";

import styles from "./Admin.module.css";

// Container for admin pages
function Admin() {
  return (
    <div id="id" className={styles.container}>
      <nav className={styles.links}>
        <NavLink to="info">Info</NavLink>
        <NavLink to="customers">Customers</NavLink>
        <NavLink to="edit">Edit</NavLink>
        <NavLink to="offer">Offer</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Admin;
