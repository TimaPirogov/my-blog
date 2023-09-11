import React from "react";
import SideBar from "./SideBar/index";
import Posts from "./Posts";
import './MainBlock.css'

const MainBlock = ({ setIsLoggedIn }) => {
  return (
    <>
      <SideBar setIsLoggedIn={setIsLoggedIn} />
      <main className="mainBlock">
        <Posts />
      </main>
    </>
  );
};

export default MainBlock;
