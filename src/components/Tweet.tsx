import React, { useState } from "react";
import { BsChatSquare, BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { getApiUrl, post } from "../services/config";
import ParentTweet from "./ParentTweet";
import RetweetModal from "./RetweetModal";

const defaultProfilePic =
  "https://pbs.twimg.com/profile_images/1121521882682077186/f1_RS9s9_400x400.png";
interface Props {
  tweet: any;
}

const Tweet: React.FC<Props> = (props) => {
  const [tweet, setTweet] = useState(props.tweet);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLike = async () => {
    const response = await post(getApiUrl("tweets/like/"), {
      tweet: tweet.id,
    });
    setTweet(response.data);
  };

  return (
    <div className="tweet">
      <RetweetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tweet={tweet}
      />
      <img
        src={tweet.user.profile.picture || defaultProfilePic}
        alt="profile-pic"
        className="tweet__author-pic"
      />
      <span className="tweet__author-name font-weight-bold">
        {tweet.user.username}
      </span>
      <div className="tweet__content">{tweet.content}</div>

      {tweet.parent ? (
        <div className="parent-tweet-container">
          <ParentTweet tweet={tweet.parent} />
        </div>
      ) : null}

      <div className="tweet__actions">
        <div className="tweet__actions-item" style={{ cursor: "pointer" }}>
          <div className="tweet__comment-icon">
            <BsChatSquare />
            <small className="tweet__comments-count">0</small>
          </div>
        </div>

        <div
          onClick={() => setIsModalOpen(true)}
          className="tweet__actions-item"
          style={{ cursor: "pointer" }}
        >
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
