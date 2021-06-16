import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { logout } from "../actions/authActions";
import { useAppSelector } from "../utilities/typedReduxHooks";

const defaultProfilePic =
  "https://pbs.twimg.com/profile_images/1121521882682077186/f1_RS9s9_400x400.png";
function Header() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    <Redirect to="/login" />;
  };
  return (
    <div className="header">
      <ul className="header__list">
        <Link to="/">
          <li className="header__list-item">Home</li>
        </Link>
        <li className="header__list-item">Explore</li>
        <li className="header__list-item">Notifications</li>
        <li className="header__list-item">Messages</li>

        <Link to={`/${auth.user ? auth.user.username : null}`}>
          <li className="header__list-item">Profile</li>
        </Link>

        <li className="header__list-item">More</li>
        {auth.isAuthenticated ? (
          <button className="btn btn-info" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </ul>
      {auth.user ? (
        <div className="header__profile">
          <img
            src={auth.user.profile.picture || defaultProfilePic}
            alt="profile-pic"
            className="tweet__author-pic"
          />
        </div>
      ) : null}
      <button className="btn btn-primary">Tweet</button>
    </div>
  );
}

export default Header;
