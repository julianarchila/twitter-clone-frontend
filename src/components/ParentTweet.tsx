import React from "react";

function ParentTweet(props: any) {
  const tweet = props.tweet;
  return (
    <div className="tweet">
      <img
        src={tweet.user.profile.picture}
        alt="profile-pic"
        className="tweet__author-pic"
      />
      <span className="tweet__author-name font-weight-bold">
        {tweet.user.username}
      </span>
      <div className="tweet__content">{tweet.content}</div>
    </div>
  );
}

export default ParentTweet;
