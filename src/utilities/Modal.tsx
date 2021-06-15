import React from "react";
import ReactDOM from "react-dom";

import "../styles/utils/Modal.css";
import { BsXCircle } from "react-icons/bs";

var modalElement = document.getElementById("modal") as HTMLElement;
interface Props {
  isOpen: boolean;
  onClose: () => any;
}

const TweetModal: React.FC<Props> = (props) => {
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <div className="Modal__head">
          <button
            type="button"
            className="Modal__close-button"
            onClick={props.onClose}
          >
            <BsXCircle color="#1b90d8" />
          </button>
        </div>
        <div className="Modal__content">{props.children}</div>
      </div>
    </div>,
    modalElement
  );
};

export default TweetModal;
