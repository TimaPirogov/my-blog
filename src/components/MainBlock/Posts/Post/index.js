import React, { useState } from "react";
import "./Post.css";
import imagePlaceholder from "../../../../assets/images/placeholder.png";
import { ReactComponent as LikeItem } from "../../../../assets/images/heart.svg";

const Post = ({ title, description, liked, image = imagePlaceholder }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const customFilling = isLiked ? "crimson" : "black";

  const like = () => setIsLiked(!isLiked);

  const finalDescription = (
    <p>
      {description.length > 100 ? (
        <>
          {description.slice(0.101)}... 
          <a href="/">Подробнее</a>
        </>
      ) : (
        description
      )}
    </p>
  );

  return (
    <div className="post">
      <img src={image} alt="post image" />
      <h2>{title}</h2>
      {finalDescription}
      <button onClick={like} className="likeButton">
        <LikeItem fill={customFilling} />
      </button>
    </div>
  );
};

export default Post;
