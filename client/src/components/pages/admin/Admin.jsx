import { NavLink, Outlet } from "react-router-dom";

// Container for admin pages
function Admin() {
  return (
    <div>
      <nav>
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
