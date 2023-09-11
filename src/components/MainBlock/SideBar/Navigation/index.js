import React from "react";
import "./Navigation.css";
import starIcon from "../../../../assets/images/star.svg";
import blogIcon from "../../../../assets/images/blog.svg";
import settingsIcon from "../../../../assets/images/settings.svg";

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/" className="active">
        <img src={blogIcon} alt="blog" />

        <span>Blog</span>
      </a>
      <a href="/">
        <img src={starIcon} alt="favorite" />

        <span>Favorite</span>
      </a>
      <a href="/">
        <img src={settingsIcon} alt="settings" />

        <span>Settings</span>
      </a>
    </nav>
  );
};

export default Navigation;
