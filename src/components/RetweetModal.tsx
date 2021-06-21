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
  const current_user = useAppSelector((state) => state.auth.user);

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
      <div className="retweetModal">
        <div className="retweetModal-left">
          <img
            src={current_user.profile.picture || defaultProfilePic}
            alt="profile-pic"
            className="modal__user-pic"
          />
        </div>
        <div className="retweetModal-rigth">
          <form onSubmit={handleSubtmit}>
            <textarea
              className="tweetForm__input"
              placeholder="Add a comment"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />

            <div className="retweet-container">
              <ParentTweet tweet={tweet} />
            </div>
            <button className="button">Tweet</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default RetweetModal;
