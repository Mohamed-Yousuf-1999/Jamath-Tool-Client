import { Link } from "react-router-dom";
import "./SideBar.css";

const NavBar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/donations">Donations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
