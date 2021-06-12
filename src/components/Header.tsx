import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";
import { useAppSelector } from "../utilities/typedReduxHooks";

function Header() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__list-item">Home</li>
        <li className="header__list-item">Explore</li>
        <li className="header__list-item">Notifications</li>
        <li className="header__list-item">Messages</li>
        <li className="header__list-item">Profile</li>
        <li className="header__list-item">More</li>
        {auth.isAuthenticated ? (
          <button className="btn btn-info" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </ul>
      <button className="btn btn-primary">Tweet</button>
    </div>
  );
}

export default Header;
