import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import Footer from "../../components/footer/Footer";
import MobileNav from "../../components/mobileNav/MobileNav";
import MobileProfileBtn from "../../components/mobileProfileBtn/MobileProfileBtn";

export default function home() {
  return (
    <div className="homeContainer">
      <Sidebar />
      <MobileNav />
      <Feed />
      <MobileProfileBtn />
      <Footer />
    </div>
  );
}
