import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import RegisterForm from "../../components/registerForm/RegisterForm";
import "./register.css";
import MobileNav from "../../components/mobileNav/MobileNav";
import RegisterFooter from "../../components/registerFooter/RegisterFooter";
export default function Register() {
  return (
    <div className="registerContainer">
      <Sidebar />
      <MobileNav />
      <RegisterForm />
      <RegisterFooter />
    </div>
  );
}
