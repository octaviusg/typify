import React from "react";
import { Link } from "react-router-dom";
import "./mobilenav.css";

export default function MobileNav() {
  return (
    <div className="mobileBrandContainer">
      <Link className="footerLink" to="/">
        <div className="branding">typify</div>
      </Link>
    </div>
  );
}
