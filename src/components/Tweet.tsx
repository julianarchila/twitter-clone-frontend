import React from "react";
import { BsChatSquare, BsHeart } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";

function Tweet() {
  return (
    <div className="tweet">
      <img
        src="https://pbs.twimg.com/profile_images/1121521882682077186/f1_RS9s9_400x400.png"
        alt="profile-pic"
        className="tweet__author-pic"
      />
      <span className="tweet__author-name font-weight-bold">
        Lorem, ipsum dolor.
      </span>
      <div className="tweet__content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
        soluta, magnam neque sequi doloribus id.
      </div>
      <div className="tweet__actions">
        <div className="tweet__actions-item">
          <small className="tweet__comment-icon">
            <BsChatSquare />
          </small>
          <small className="tweet__comments-count">34</small>
        </div>
        <div className="tweet__actions-item">
          <small className="tweet__retweet-icon"></small>
          <FaRetweet />
          <small className="tweet__retweet-count">56</small>
        </div>
        <div className="tweet__actions-item">
          <small className="tweet__like-icon">
            <BsHeart />
          </small>
          <small className="tweet__like-count">130</small>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
