import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/authActions";
import { useAppSelector } from "../utilities/typedReduxHooks";
import { BsPower, BsHouseFill, BsPersonFill } from 'react-icons/bs';
import { FaCompass, FaFacebookMessenger } from 'react-icons/fa';
import { MdEmail, MdMore } from 'react-icons/md'

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
          <li className="header__list-icon" ><BsHouseFill className="icon"/></li>
          <li className="header__list-text">Home</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li className="header__list-icon" ><FaCompass className="icon"/></li>
          <li className="header__list-text">Explore</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li className="header__list-icon" ><MdEmail className="icon"/></li>
          <li className="header__list-text">Notifications</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li className="header__list-icon" ><FaFacebookMessenger className="icon"/></li>
          <li className="header__list-text">Messages</li>
        </Link>
        <Link to={`/${auth.user ? auth.user.username : null}`} className="header__list-item">
          <li className="header__list-icon" ><BsPersonFill className="icon"/></li>
          <li className="header__list-text">Profile</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li className="header__list-icon" ><MdMore className="icon"/></li>
          <li className="header__list-text">More</li>
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
