import React, { useState } from "react";
import { BsChatSquare, BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { getApiUrl, post } from "../services/config";
import ParentTweet from "./ParentTweet";
import RetweetModal from "./RetweetModal";
import TweetMenu from "./TweetMenu";
import { Link } from "react-router-dom";

const defaultProfilePic =
  "https://pbs.twimg.com/profile_images/1121521882682077186/f1_RS9s9_400x400.png";
interface Props {
  tweet: any;
}

const Tweet: React.FC<Props> = (props) => {
  const [tweet, setTweet] = useState(props.tweet);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div className="tweet__author-container">
        <Link to={`/${tweet.user.username}`} className="tweet__author">
          <img
            src={tweet.user.profile.picture || defaultProfilePic}
            alt="profile-pic"
            className="tweet__author-pic"
          />
          <span className="tweet__author-name">
            {tweet.user.username}
          </span>
        </Link>
        <div className="tweet-menu">
            <div className="tweet-menu__pointers" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="tweet-menu__point"></div>
                <div className="tweet-menu__point"></div>
                <div className="tweet-menu__point"></div>
            </div>
            <TweetMenu
              isOpen={isMenuOpen}
              tweet={tweet}
            />
        </div>
      </div>
      <div className="tweet__content">{tweet.content}</div>

      {tweet.parent ? (
        <div className="parent-tweet-container">
          <ParentTweet tweet={tweet.parent} />
        </div>
      ) : null}

      <div className="tweet__actions">
        <div className="tweet__actions-item">
          <div className="tweet__comment-icon">
            <BsChatSquare className="icon"/>
            <small className="tweet__comments-count">0</small>
          </div>
        </div>

        <div
          onClick={() => setIsModalOpen(true)}
          className="tweet__actions-item"
        >
          <div className="tweet__retweet-icon">
            <FaRetweet className="icon"/>
            <small className="tweet__retweet-count">{tweet.retweets}</small>
          </div>
        </div>

        <div
          onClick={handleLike}
          className="tweet__actions-item"
        >
          <div className="tweet__like-icon">
            {tweet.liked ? <BsHeartFill color="rgb(249, 50, 50)" className="icon"/> : <BsHeart className="icon"/>}
            <small className="tweet__like-count">{tweet.likes}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
