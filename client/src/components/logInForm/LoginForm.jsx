import React from "react";
import "./loginForm.css";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function LoginForm() {
  return (
    <div className="loginFormContainer">
      <div className="taglines">
        <span className="mainTag"> Greetings,</span>
        <p className="tagline">
          use this form to log back into your collections
          <ArrowDropDownIcon className="arrowIcon" />
        </p>
      </div>

      <div className="loginForm">
        <div className="inputs">
          <div className="cluster">
            <label for="email">Email</label>
            <input type="email" autoFocus={true} />
          </div>
          <div className="cluster">
            <label for="password">Password</label>
            <input type="password" />
            <p className="fp-styles">Forgot password?</p>
          </div>
        </div>

        <button className="btnStyle">Log in</button>
      </div>
    </div>
  );
}
