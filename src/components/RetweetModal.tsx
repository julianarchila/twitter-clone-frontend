import React, { ChangeEvent, FormEvent, useState } from "react";
import Modal from "../utilities/Modal";
import ParentTweet from "./ParentTweet";
import { useDispatch } from "react-redux";
import { retweet } from "../actions/tweetActions";

const defaultProfilePic =
  "https://pbs.twimg.com/profile_images/1121521882682077186/f1_RS9s9_400x400.png";

interface Props {
  tweet: any;
  isOpen: boolean;
  onClose: () => any;
}

const RetweetModal: React.FC<Props> = (props) => {
  const { tweet, isOpen, onClose } = props;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    content: "",
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubtmit = (e: FormEvent) => {
    e.preventDefault();
    const content = { parent: tweet.id, ...formData };
    dispatch(retweet(content));
    setFormData({ content: "" });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={props.onClose}>
      <img
        src={tweet.user.profile.picture || defaultProfilePic}
        alt="profile-pic"
        className="tweet__author-pic"
      />
      <form onSubmit={handleSubtmit}>
        <textarea
          className="form-control tweetForm__input"
          placeholder="What's happening?"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />

        <div className="parent-tweet-container">
          <ParentTweet tweet={tweet} />
        </div>
        <button className="btn btn-primary">Tweet</button>
      </form>
    </Modal>
  );
};

export default RetweetModal;
