import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerContainer">
      <ul className="footerNav">
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
