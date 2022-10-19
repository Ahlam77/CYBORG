
import {Link} from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt=" logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/browse" className="nav-link">
                Browse
              </Link>
            </NavItem>
            <NavItemDropDown>
              <a
                href="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Details
              </a>
              <ul className="dropdown-menu">
                <NavItemDropDown>
                  <Link to="/#" className="dropdown-item">
                    Fortnite
                  </Link>
                </NavItemDropDown>
                <li>
                  <a href="#next" className="dropdown-item">
                    Call of Duty
                  </a>
                </li>
              </ul>
            </NavItemDropDown>
            <NavItem>
              <Link to="/streams" className="nav-link">
                Streams
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
