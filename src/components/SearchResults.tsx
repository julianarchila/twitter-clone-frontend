import React, { useState } from "react";
import { getApiUrl, post } from "../services/config";
import { Link } from "react-router-dom";

interface Props {
  user: any;
}

const SearchResults: React.FC<Props> = (props) => {
  const { user } = props;
  const [userFollow, setUserFollow] = useState(user.following);

  const handleFollow = () => {
    post(getApiUrl("users/follow_toogle/"), {
      user: user.username,
    });
    setUserFollow(!userFollow)
  };
  return (
        <div className="explore-aside__users-item">
          <Link to={`/${user.username}`} className="explore-aside__users-item-auth">
              <figure>
                <img src={user.profile.picture} alt={user.username} />
              </figure>
              <p>{user.username}</p>
          </Link>
          <button className="button" onClick={handleFollow}>
            {userFollow ? "Unfollow" : "Follow"}
          </button>
        </div>
  );
};

export default SearchResults;
