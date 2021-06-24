import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/authActions";
import { useAppSelector } from "../utilities/typedReduxHooks";
import { BsPower } from 'react-icons/bs';

const defaultProfilePic =
  "https://pbs.twimg.com/profile_images/1121521882682077186/f1_RS9s9_400x400.png";

function Header() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    const confirm: boolean = window.confirm('Are you sure you want to close your session ?');
    if (confirm === true) {
      dispatch(logout());
    }
  }

  return (
    <div className="header">

      <ul className="header__list">
        <Link to="/" className="header__list-item">
          <li>Home</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li>Explore</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li>Notifications</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li>Messages</li>
        </Link>
        <Link to={`/${auth.user ? auth.user.username : null}`} className="header__list-item">
          <li>Profile</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li>More</li>
        </Link>
      </ul>

      <div className="header__logout">
        {auth.isAuthenticated && (
            <button className="button-logout" onClick={handleLogout}>
              <BsPower />
            </button>
          )}

        {auth.user && (
            <Link to={`/${auth.user.username}`} className="header__profile">
              <img
                src={auth.user.profile.picture || defaultProfilePic}
                alt="profile-pic"
                className="tweet__author-pic"
              />
            </Link>
        )}
      </div>

    </div>
  );
}

export default Header;
