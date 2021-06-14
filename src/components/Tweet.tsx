import React, { useState } from "react";
import { BsChatSquare, BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { getApiUrl, post } from "../services/config";

const defaultProfilePic =
  "https://pbs.twimg.com/profile_images/1121521882682077186/f1_RS9s9_400x400.png";
interface Props {
  tweet: any;
}

const Tweet: React.FC<Props> = (props) => {
  const [tweet, setTweet] = useState(props.tweet);
  const handleLike = async () => {
    const response = await post(getApiUrl("tweets/like/"), {
      tweet: tweet.id,
    });
    setTweet(response.data);
  };

  return (
    <div className="tweet">
      <img
        src={tweet.user.profile.picture || defaultProfilePic}
        alt="profile-pic"
        className="tweet__author-pic"
      />
      <span className="tweet__author-name font-weight-bold">
        {tweet.user.username}
      </span>
      <div className="tweet__content">{tweet.content}</div>

      <div className="tweet__actions">
        <div className="tweet__actions-item" style={{ cursor: "pointer" }}>
          <div className="tweet__comment-icon">
            <BsChatSquare />
            <small className="tweet__comments-count">34</small>
          </div>
        </div>

        <div className="tweet__actions-item" style={{ cursor: "pointer" }}>
          <div className="tweet__retweet-icon">
            <FaRetweet />
            <small className="tweet__retweet-count">{tweet.retweets}</small>
          </div>
        </div>

        <div
          onClick={handleLike}
          className="tweet__actions-item"
          style={{ cursor: "pointer" }}
        >
          <div className="tweet__like-icon">
            {tweet.liked ? <BsHeartFill color="red" /> : <BsHeart />}
            <small className="tweet__like-count">{tweet.likes}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
