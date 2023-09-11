import React from "react";
import PostsHeader from "./PostsHeader";
import postImage from "../../../assets/images/postImage.jpg";
import "./Posts.css";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="postsWrapper">
      <PostsHeader />

      <section className="posts">
        <Post
          title="Post 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, saepe
      accusantium quas quia et quidem molestiae impedit alias sequi iusto,
      culpa, eaque nulla esse rerum vero ea qui porro temporibus."
          image={postImage}
        />
        <Post
          title="Post 2"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          liked
          image={postImage}
        />
        <Post
          title="Post 3"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, saepe
      accusantium quas quia et quidem molestiae impedit alias sequi iusto,
      culpa, eaque nulla esse rerum vero ea qui porro temporibus."
          liked
          image={postImage}
        />
      </section>
    </div>
  );
};

export default Posts;
