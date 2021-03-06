import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/authActions";
import { useAppSelector } from "../utilities/typedReduxHooks";
import {
  BsPower,
  BsHouseFill,
  BsPersonFill,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { FaCompass, FaFacebookMessenger } from "react-icons/fa";
import { MdEmail, MdMore } from "react-icons/md";

function Header() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    const confirm: boolean = window.confirm(
      "Are you sure you want to close your session ?"
    );
    if (confirm === true) {
      dispatch(logout());
    }
  };
  if (!auth.isAuthenticated) {
    return (
      <div className="header scroll">
        <div className="header__list">
          <Link to="#" className="header__list-item">
            <li className="header__list-icon">
              <FaCompass className="icon" />
            </li>
            <li className="header__list-text">Explore</li>
          </Link>
          <Link to="/login" className="header__list-item">
            <li className="header__list-icon">
              <BsBoxArrowInRight className="icon" />
            </li>
            <li className="header__list-text">Login</li>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="header scroll">
      <ul className="header__list">
        <Link to="/" className="header__list-item">
          <li className="header__list-icon">
            <BsHouseFill className="icon" />
          </li>
          <li className="header__list-text">Home</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li className="header__list-icon">
            <FaCompass className="icon" />
          </li>
          <li className="header__list-text">Explore</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li className="header__list-icon">
            <MdEmail className="icon" />
          </li>
          <li className="header__list-text">Notifications</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li className="header__list-icon">
            <FaFacebookMessenger className="icon" />
          </li>
          <li className="header__list-text">Messages</li>
        </Link>
        <Link
          to={`/${auth.user ? auth.user.username : null}`}
          className="header__list-item"
        >
          <li className="header__list-icon">
            <BsPersonFill className="icon" />
          </li>
          <li className="header__list-text">Profile</li>
        </Link>
        <Link to="#" className="header__list-item">
          <li className="header__list-icon">
            <MdMore className="icon" />
          </li>
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
              src={auth.user.profile.picture}
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
