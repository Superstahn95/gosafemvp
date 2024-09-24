import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">GoSafe</div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="link">
            {" "}
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="link">
            Log in
          </NavLink>
        </li>
        <NavLink to="/request" className="nav-request">
          Request Service
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
