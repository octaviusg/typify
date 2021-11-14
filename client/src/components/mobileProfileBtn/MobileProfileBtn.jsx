import React from "react";
import { Link } from "react-router-dom";
import "./mobileprofileBtn.css";
import PersonIcon from "@material-ui/icons/Person";

export default function MobileProfileBtn() {
  return (
    <div className="mobileProfileBtn">
      <Link className="sideLink" to="/register">
        <PersonIcon className="u-icon" />
      </Link>
    </div>
  );
}
