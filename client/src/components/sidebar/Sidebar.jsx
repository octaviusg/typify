import React from "react";
import "./sidebar.css";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <NavLink className="brandingLink" to="/">
        <div className="branding">typify</div>
      </NavLink>

      <div className="userIcon">
        <NavLink
          className="profileIcon"
          exact
          to="/register"
          activeClassName="nav-active"
        >
          <PersonIcon activeClassName="nav-active" className="size" />
        </NavLink>
      </div>
    </div>
  );
}
