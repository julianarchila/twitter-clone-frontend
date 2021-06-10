import React from "react";

function TweetForm() {
  return (
    <form action="#">
      <textarea
        className="form-control tweetForm__input"
        placeholder="What's happening?"
      />
      <button className="btn btn-primary">Tweet</button>
    </form>
  );
}

export default TweetForm;
