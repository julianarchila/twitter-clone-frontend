import React from "react";
import { getApiUrl, post } from "../services/config";

const defaultHeader =
  "https://i.pinimg.com/originals/39/81/be/3981be23abfd0d5951fe32ba9ae37945.jpg";

interface Props {
  user: any;
  setUser: any;
  auth: any;
}

const ProfileHead: React.FC<Props> = (props) => {
  const { user, setUser, auth } = props;

  const handleFollow = async () => {
    const response = await post(getApiUrl("users/follow_toogle/"), {
      user: user.username,
    });
    const data = response.data;
    setUser({ ...user, following: data.following });
    console.log(response.data);
  };

  return (
    <div className="profile__head">
      <img
        className="profile__header-img"
        src={user.profile.header || defaultHeader}
        alt="header"
      />
      <div className="profile__head__top">
        <img
          className="profile__user-picture"
          src={user.profile.picture}
          alt="profile"
        />
        <div className="profile__head__actions">
          {auth.isAuthenticated ? (
            auth.user.username !== user.username ? (
              <button onClick={handleFollow} className="btn btn-primary mr-3">
                {user.following ? "Unfollow" : "Follow"}
              </button>
            ) : null
          ) : null}
        </div>
      </div>
      <div className="profile__head__info">
        <div className="font-weight-bold">
          {user.first_name} {user.last_name}
        </div>
        <p>@{user.username}</p>
        <small>{user.following_count} following</small>
        <small>{user.followers_count} followers</small>
      </div>
    </div>
  );
};

export default ProfileHead;
