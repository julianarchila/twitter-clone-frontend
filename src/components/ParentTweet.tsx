import React from "react";

function ParentTweet(props: any) {
  const { tweet } = props;

  if (!tweet) {
    return (
      <div className="tweet">
        <p>This tweet has been delted.</p>
      </div>
    );
  }
  return (
    <div className="tweet">
      <img
        src={tweet.user.profile.picture}
        alt="profile-pic"
        className="tweet__author-pic"
      />
      <span className="tweet__author-name">{tweet.user.username}</span>
      <div className="tweet__content">{tweet.content}</div>
    </div>
  );
}

export default ParentTweet;
