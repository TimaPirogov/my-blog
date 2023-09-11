import React from "react";
import searchIcon from '../../../../assets/images/search.svg'
import "./PostsHeader.css"

const PostsHeader = () => {
  return (
    <section className="postsHeader">
      <h1>Posts</h1>
      <form className="searchForm">
        <input type="text" placeholder="Найти" />
        <img src={searchIcon} alt="Поиск" />
      </form>
    </section>
  );
};

export default PostsHeader;
