import React from "react";
import "./sidebar.css";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <NavLink className="brandingLink" to="/">
        <div className="branding">typify</div>
      </NavLink>

      <div className="userIcon">
        <NavLink className="profileIcon" to="/register">
          person
        </NavLink>
      </div>
    </div>
  );
}
