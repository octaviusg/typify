import React from "react";
import { Link } from "react-router-dom";
import "./registerfooter.css";

export default function RegisterFooter() {
  return (
    <div className="footerContainer">
      <ul className="footerNav">
        <Link className="footerLink" to="/login">
          <li>Login > </li>
        </Link>
        <Link className="footerLink" to="/">
          <li>Information </li>
        </Link>
        <Link className="footerLink" to="/">
          <li>Privacy Policy </li>
        </Link>
        <Link className="footerLink" to="/">
          <li>Terms of Service </li>
        </Link>
      </ul>
    </div>
  );
}
