import React from "react";
import { Link } from "react-router-dom";

export default function UserFooter() {
  return (
    <div className="footerContainer">
      <ul className="footerNav">
        <Link className="footerLink" to="/register">
          <li>Register > </li>
        </Link>
        <Link className="footerLink" to="/">
          <li>Information</li>
        </Link>
        <Link className="footerLink" to="/">
          <li>Privacy Policy</li>
        </Link>
        <Link className="footerLink" to="/">
          <li>Terms of Service</li>
        </Link>
      </ul>
    </div>
  );
}
