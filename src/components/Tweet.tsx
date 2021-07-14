import React, { useState } from "react";
import { BsChatSquare, BsHeart, BsHeartFill } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { getApiUrl, post } from "../services/config";
import RetweetModal from "./RetweetModal";
import TweetMenu from "./TweetMenu";
import { Link } from "react-router-dom";
import ActionBtn from "./ActionBtn";

interface Props {
  tweet: any;
  showActions?: boolean;
}

const Tweet: React.FC<Props> = (props) => {
  const [tweet, setTweet] = useState(props.tweet);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!tweet) {
    return (
      <div className="tweet">
        <p>This tweet has been delted.</p>
      </div>
    );
  }
  if (typeof tweet === "string") {
    return null;
  }
  const showActions = () => {
    if (props.showActions === true) {
      return true;
    }
    if (props.showActions === false) {
      return false;
    }
    if (tweet.content || tweet.image) {
      return true;
    } else {
      return false;
    }
  };

  // toogle like function
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
            src={tweet.user.profile.picture}
            alt="profile-pic"
            className="tweet__author-pic"
          />
          <span className="tweet__author-name">{tweet.user.username}</span>
        </Link>
        <div className="tweet-menu">
          <div
            className="tweet-menu__pointers"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="tweet-menu__point"></div>
            <div className="tweet-menu__point"></div>
            <div className="tweet-menu__point"></div>
          </div>
          <TweetMenu
            tweet={tweet}
            isOpen={isMenuOpen}
            setOpen={setIsMenuOpen}
          />
        </div>
      </div>
      <div className="tweet__content">{tweet.content}</div>

      {tweet.retweet && (
        <div className="parent-tweet-container">
          <Tweet tweet={tweet.parent} showActions={!showActions()} />
        </div>
      )}

      {/* Tweet actions */}
      {showActions() && (
        <div className="tweet__actions">
          {/* Comment */}
          <ActionBtn Icon={BsChatSquare} count={0} onClick={() => null} />

          {/* Retweet */}
          <ActionBtn
            Icon={AiOutlineRetweet}
            count={tweet.retweets}
            onClick={() => setIsModalOpen(true)}
          />
          {/* Like */}
          <ActionBtn
            Icon={tweet.liked ? BsHeartFill : BsHeart}
            iconColor={tweet.liked ? "rgb(249,50,50)" : ""}
            count={tweet.likes}
            onClick={handleLike}
          />
        </div>
      )}
    </div>
  );
};

export default Tweet;
