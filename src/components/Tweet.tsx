import React, { useState } from "react";
import { BsChatSquare, BsHeart, BsHeartFill } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { getApiUrl, post } from "../services/config";
import ParentTweet from "./ParentTweet";
import RetweetModal from "./RetweetModal";
import TweetMenu from "./TweetMenu";
import { Link } from "react-router-dom";
import ActionBtn from "./ActionBtn";

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

      {tweet.parent ? (
        <div className="parent-tweet-container">
          <ParentTweet tweet={tweet.parent} />
        </div>
      ) : null}

      {/* Tweet action*/}
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
    </div>
  );
};

export default Tweet;
