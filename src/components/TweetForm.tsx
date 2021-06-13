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
  };
  return (
    <form onSubmit={handleSubtmit}>
      <textarea
        className="form-control tweetForm__input"
        placeholder="What's happening?"
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <button className="btn btn-primary">Tweet</button>
    </form>
  );
}

export default TweetForm;
