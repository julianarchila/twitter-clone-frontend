import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createTweet } from "../actions/tweetActions";

function TweetForm() {
  const [formData, setFormData] = useState({
    content: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubtmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createTweet(formData));
    setFormData({ content: "" });
  };
  return (
    <form onSubmit={handleSubtmit}>
      <textarea
        className="tweetForm__input"
        placeholder="What's happening?"
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <button className="button font-weight-bold">Tweet</button>
    </form>
  );
}

export default TweetForm;
