import React from "react";
import "./adminpostform.css";
import AddIcon from "@material-ui/icons/Add";

export default function AdminPostForm() {
  return (
    <div className="postFormContainer">
      <div className="registerForm">
        <div className="inputs">
          <div className="r-cluster">
            <label for="imageurl">IMG Url</label>
            <input type="text" autoFocus={true} />
          </div>
        </div>
        <label className="addicon" htmlFor="fileInput">
          <AddIcon className="iconsize" /> Select image
        </label>
        <input type="file" id="fileInput" style={{ display: "none" }} />
        <button className="btnStyleRegister">Share image</button>
      </div>
    </div>
  );
}
