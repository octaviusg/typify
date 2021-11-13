import React from "react";
import "./tabs.css";
import Sidebar from "../../components/sidebar/Sidebar";
import UserTabs from "../../components/userTabs/UserTabs";

export default function Tabs() {
  return (
    <div className="tabsContainer">
      <Sidebar />
      <UserTabs />
    </div>
  );
}
