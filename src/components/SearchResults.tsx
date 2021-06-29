import React from "react";
import { Link } from "react-router-dom";

interface Props {
  users: Array<any>;
  searchName: String;
}

const SearchResults: React.FC<Props> = (props) => {
  const { searchName, users } = props;
  if (searchName === "") {
    return <div className="explore-aside__users scroll"></div>;
  }
  if (users.length < 1) {
    return (
      <div className="explore-aside__users scroll">
        <h3>@{searchName}</h3>
        <p>No match found</p>
      </div>
    );
  }
  return (
    <div className="explore-aside__users scroll">
      <h3>@{searchName}</h3>
      {users.map((user: any, i: number) => {
        return (
          <div key={i} className="explore-aside__users-item">
            <Link to={`/${user.username}`}>
              <div>
                <figure>
                  <img src={user.profile.picture} alt={user.username} />
                </figure>
                <p>{user.username}</p>
              </div>
            </Link>
            <button className="button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
