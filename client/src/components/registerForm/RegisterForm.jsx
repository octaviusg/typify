import React from "react";
import "./registerForm.css";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function RegisterForm() {
  return (
    <div className="registerFormContainer">
      <div className="taglines">
        <span className="mainTag">Hello,</span>
        <p className="tagline">
          are you looking to keep tabs on some inspiration? Create a place to
          hold ‘em
          <ArrowDropDownIcon className="arrowIcon" />
        </p>
      </div>

      <div className="registerForm">
        <div className="inputs">
          <div className="r-cluster">
            <label for="username">Username</label>
            <input type="text" autoFocus={true} />
          </div>
          <div className="r-cluster">
            <label for="email">Email</label>
            <input type="email" />
          </div>
          <div className="r-cluster">
            <label for="password">Password</label>
            <input type="password" />
          </div>
          <div className="r-cluster">
            <label for="re-password">Re-enter password</label>
            <input type="password" />
          </div>
        </div>

        <button className="btnStyleRegister">Create account</button>
        <Link className="btnStyleRegister" to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}
