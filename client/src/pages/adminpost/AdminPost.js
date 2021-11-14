import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./adminpost.css";
import AdminPostForm from "../../components/adminpostform/AdminPostForm";
import Footer from "../../components/footer/Footer";
import MobileNav from "../../components/mobileNav/MobileNav";
import MobileProfileBtn from "../../components/mobileProfileBtn/MobileProfileBtn";

export default function AdminPost() {
  return (
    <div className="adminpostContainer">
      <Sidebar />
      <MobileNav />
      <AdminPostForm />
      <MobileProfileBtn />
      <Footer />
    </div>
  );
}
