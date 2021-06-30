import React, { ChangeEvent, FormEvent, useState } from "react";
import Modal from "../utilities/Modal";
import ParentTweet from "./ParentTweet";
import { useDispatch } from "react-redux";
import { retweet } from "../actions/tweetActions";
import { useAppSelector } from "../utilities/typedReduxHooks";
import "../styles/RetweetModal.css";

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
  const auth = useAppSelector((state) => state.auth);
  const current_user = auth.user;

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
  if (!auth.isAuthenticated) {
    return <></>;
  }

  return (
    <Modal isOpen={isOpen} onClose={props.onClose}>
      <form onSubmit={handleSubtmit} className="retweetModal">
        <div className="retweetModal-top">
          <img
            src={current_user.profile.picture || defaultProfilePic}
            alt="profile-pic"
            className="modal__user-pic"
          />
          <textarea
            className="retweetModal-top__textarea scroll"
            placeholder="Add a comment"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <div className="retweetModal-bottom">
          <div className="retweet-container">
            <ParentTweet tweet={tweet} />
            <button className="button">Tweet</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default RetweetModal;
