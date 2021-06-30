import React from "react";
import { IconType } from "react-icons";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../utilities/typedReduxHooks";

interface Props {
  Icon: IconType;
  iconColor?: string;
  count: Number;
  onClick: () => any;
}

const ActionBtn: React.FC<Props> = (props) => {
  const { Icon, iconColor, count, onClick } = props;
  let history = useHistory();
  const auth = useAppSelector((state) => state.auth);

  const handleClick = () => {
    if (auth.isAuthenticated) {
      onClick();
    } else {
      console.log("working");
      history.push("/login");
    }
  };

  return (
    <div className="tweet__actions-item" onClick={handleClick}>
      <div className="tweet__cu want to protect your route from unauthomment-icon">
        <Icon className="icon" color={iconColor} />
        <small className="tweet__comments-count">{count}</small>
      </div>
    </div>
  );
};

export default ActionBtn;
