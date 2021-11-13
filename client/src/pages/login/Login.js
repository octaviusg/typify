import React from "react";
import LoginForm from "../../components/logInForm/LoginForm";
import Sidebar from "../../components/sidebar/Sidebar";
import UserFooter from "../../components/userFooter/UserFooter";
import "./Login.css";

export default function Login() {
  return (
    <div className="loginContainer">
      <Sidebar />
      <LoginForm />
      <UserFooter />
    </div>
  );
}
