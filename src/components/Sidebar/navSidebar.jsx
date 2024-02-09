import { NavLink } from "react-router-dom";

const NavSideBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/customers">Customers</NavLink>
          </li>
          <li>
            <NavLink to="/income">Income</NavLink>
          </li>
          <li>
            <NavLink to="/promote">Promote</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default NavSideBar;