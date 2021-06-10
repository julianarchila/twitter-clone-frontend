import React from "react";

function Header() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__list-item">Home</li>
        <li className="header__list-item">Explore</li>
        <li className="header__list-item">Notifications</li>
        <li className="header__list-item">Messages</li>
        <li className="header__list-item">Profile</li>
        <li className="header__list-item">More</li>
      </ul>
      <button className="btn btn-primary">Tweet</button>
    </div>
  );
}

export default Header;
