import React from "react";
import "./SideBar.css";
import Navigation from "./Navigation";
import User from "./User";
import LogOut from "./LogOut";

const SideBar = ({ setIsLoggedIn }) => {
  return (
    <aside className="sidebar">
      <section className="sidebarTop">
        <User />
        <Navigation />
      </section>
      <LogOut setIsLoggedIn={setIsLoggedIn} />
    </aside>
  );
};

export default SideBar;
